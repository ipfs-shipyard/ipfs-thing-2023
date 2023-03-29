
const https = require('https');

const token = process.env.AIRTABLE_TOKEN;

//const url = 'https://api.airtable.com/v0/apptAzTf0HPbYkCbn/Responses';
const url = 'https://api.airtable.com/v0/apptAzTf0HPbYkCbn/Responses?&view=IPFS%20%C3%BEing%202023%20Track%20%26%20Talk%20Submissions';

const fields = {
	'Title': 'title',
	'Talk Description': 'desc',
	'Title & Organization': 'spkrTitle',
	'What track(s) would be suitable for your session?': 'tracks',
	'What format(s) are suitable for your talk or workshop?': 'format',
	'If you are affiliated with an organization and would like your logo to be displayed on our event website as a participating team at IPFS thing, please upload a high res image below.': 'logo',
	'Headshot': 'headshot',
	'Last Name': 'lastName',
	'Archive of Original Tracks Submission': 'tracksSubmittedFor',
	'Talk Status': 'status',
	'Track Description': 'trackDesc',
	'Email Address': 'email',
	'Talk or Track?': 'type',
	'First Name': 'firstName',
	'Created': 'createdDate',
	'Last Modified By': 'lastModifiedBy',
	'Last Modified': 'lastModifiedDate',
  'Track Date': 'trackDate',
  'Track Date (from TrackLink)': 'trackDate',
  'Duration': 'duration',
  'Order': 'order',
  'Priority': 'priority',
  'Track Status': 'trackStatus'
};

const options = {
	headers: {
    'Authorization': 'Bearer ' + token
  }
};

// add some error handling jeez
const getAirtableData = (url, options, callback) => {
	https.get(url, options, res => {
		let data = [];

		res.on('data', chunk => {
			data.push(chunk);
		});

		res.on('end', () => {
			const bc = Buffer.concat(data);
			const str = bc.toString();
			const obj = JSON.parse(str);
			const records = cleanDump(obj.records);
			callback(records);
		});
	}).on('error', err => {
		console.log('Error: ', err.message);
	});
};

const onRecordsReady = records => {
	const talks = getTalks(records);

	const tracks = getTracks(records);

	const grouped = groupTracks(tracks, talks);

  const trackTitles = Object.keys(grouped);

  trackTitles.map(t => grouped[t])
    .filter(t => t.talks.length > 0)
    .map(t => {
      const filename = t.title.replaceAll(/\W/g, '_') + '.toml';
      t.filename = filename;

      const toml = trackToTOML(t);
      t.toml = toml;
      return t;
    })
    .forEach(t => {
      const path = './content/tracks/' + t.filename;
      writeFile(path, t.toml);
    });

  console.log('Tracks', tracks.length);
  console.log('Talks', talks.length);
};

const writeFile = (relativePath, string) => {
  const fs = require('fs');

  try {
    fs.writeFileSync(relativePath, string);
    // file written successfully
  } catch (err) {
    console.error(err);
  }
};

const cleanDump = records => {
  return records
    .map(r => r.fields)
    .map(r => {
      let o = {};
      Object.keys(fields).forEach(f => {
        o[ fields[f] ] = r[f];
      });
      // TODO
      o.startTime = '00:00';
      return o;
    });
};

const getTalks = records => {
  return records
    .filter(r =>
      r.type == 'Talk'
      && r.status == 'Accepted by track lead'
    ).map(r => {
      if (!r.tracks) {
        r.tracks = r.tracksSubmittedFor;
      }
      return r;
    });
};

const getTracks = records =>
  records.filter(r => 
    r.type == 'Track'
    && r.trackStatus == 'Confirmed'
  );

const groupTracks = (tracks, talks) => {
  // array of track titles
  const trackTitles = tracks.map(t => t.title);

  // create map of track title => track data
  const trackList = tracks.reduce((obj, t) => {
    // array to hold talks
    t.talks = [];
    // set track title property
    obj[t.title] = t;
    return obj;
  }, {});

  // add each talk to its track
  talks.forEach(talk => {
    if (!trackList.hasOwnProperty(talk.tracks[0])) {
      // if talk is on a track that isn't confirmed
      // then drop it for now, will fix in airtable
    }
    else {
      trackList[ talk.tracks[0] ].talks.push(talk);
    }
  });

  return trackList;
};

const trackToTOML = track => {
	return trackDetailsToTOML(track)
    + '\n\n'
    + track.talks.map(talkToTOML).join('\n');
};

const talkToTOML = talk => {
  //console.log('talkToTOML', talk);
  return [
		'[[timeslots]]',
    `startTime="${talk.startTime}"`,
    `speaker="${talk.firstName + ' ' + talk.lastName}"`,
    `title="${talk.title}"`,
    `description="${talk.desc}"`,
    '\n'
  ].join('\n');
}

const trackDetailsToTOML = track => {
	return `
# the name of your track or event
name = "${track.title}"

# the name handle of the directly responsible individual for this event
# (this person will coordinate with devent organizers)
dri = "${track.firstName} ${track.lastName}"

# the start date of the event
date = "2023-10-29"

# how many days the event lasts (1 - N)
days = 1

# the event venue name (will show up on the event card - TODO)
venueName = "Hypatia"

# the event times (shows up in the event card)
times = "10:00 - 13:00"

# the "difficulty" of the event -- one of:
# ["Beginner", "Intermediate", "Advanced", "All Welcome"]
difficulty = "All Welcome"

# tags for the event, will show up as labels.
# pick 1-4
tags = ["Talks"]

# a color, to group key events visually. use sparingly
# color="purple"

# the priority in the schedule table, leave commented if you don't need to control this
# 1 will appear at the top, higher numbers appear closer to bottom
# priority = 1

# a description of the track.
# will show up when the user clicks the event card.
description = """
${track.desc}
"""

# schedule is an array of timeslots objects
# schema:
#  startTime   - string for starting time
#  speakers    - array of string speaker names. please to use consistent naming across timeslots
#  title       - string for talk or timeslot title, should be short
#  description - string describing the timeslot. 1-3 sentences.
# 
# Notes:
# - recommended start: 10:00
# - recommended lunch: 13:00
# - recommended end:   16:00 (On 30 Oct, 1h Camp wrapup begins at 16:00)
# - use 15m, 20m, 30m, 45m, or 60m session slots
# - use 15m breaks, one in the morning, one or two in the afternoon

`;
};

getAirtableData(url, options, onRecordsReady);
