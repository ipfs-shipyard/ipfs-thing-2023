# IPFS þing

IPFS þing is a week-long gathering for the IPFS implementors community. There will be talks, workshops, discussion circles, hacking time, and more — all focused on advancing IPFS implementations.

## Submitting Events

We encourage you to submit your events to this site via a pull request on github, to do so...

1. Create a new file in ```/content/events``` and name it your-event-name.md
2. Copy and paste the following template into your new file

```
---
name: Your Track
org: Organization Name
dri: Directly Responsible Individual
website: http://www.example.com or leave blank
date: 02/06/2023
days: 1
times: 19:00 - 22:00
venueName: Venue Name
venueAddress: Street Address
attendees: 100
difficulty: All Welcome
logomark: URL to a square PNG
description: Track description
priority: 1
---
```

3. Fill in the template with details for your event, please use month/day/year format for dates
4. Create a PR to this repo to add this new file
5. The Member Services team will review and merge your event into the website

Start date & end date are required to display the event on the timeline.

If you don't have concrete dates, add the approximate dates & set ```dateTBD: true```.

## Editing Events

If you've already created your event but want to add or change details in the .md file, create a PR with your edit requests, along with any comments. The Spaceport team will review and merge your changes to the website.

## Developers

This is a [Microgen](https://github.com/pathfindertools/microgen) site.

To run the site locally ```yarn install``` and ```yarn dev```.

See full documentation in the docs folder.
