import { useRef, useEffect } from 'react'
import { Section } from "../section";

import { backgroundSchema } from "../../schema/background"
import { navigationLabelSchema } from "../../schema/navigation-label";
import dayjs from 'dayjs'

import ScrollContainer from 'react-indiana-drag-scroll'
import ScheduleTable from './schedule.tsx/schedule-table';

function dayOffset(start, date) {
  return dayjs(date).diff(dayjs(start), 'days')
}

function readableHash(eventName) {
  return eventName.replace(/þ/g, 'th').replace(/[^a-zA-Z0-9þ]/g, ' ').replace(/\s+/g, '-')
}

function annotateEvents(events, config) {
  const startDate = dayjs(config.dateStart)
  const endDate = dayjs(config.dateEnd)
  const numDays = Number(dayOffset(startDate, endDate) + 1)
  const eventWithinRange = (e) => (e.startDay >= 0 && e.startDay < numDays)
  const uniqEventHashes = new Set()

  return Object.keys(events).map((fileName, i) => {
    const event = {
        ...events[fileName],
        fileName,
    }
    event.startDay = dayOffset(startDate, event.date)
    event.isWithinRange = eventWithinRange(event)
    event.hash = `#${readableHash(event.name)}`

    // To ensure our event modal hashes are unique we keep a Set of all the hashes
    if (uniqEventHashes.has(event.hash)) {
        // Filename's are always unique
        event.hash = `#${readableHash(event.fileName)}`
    }

    uniqEventHashes.add(event.hash)

    return event
  })
}


export const EventSchedule = ({ data, events, parentField = "" }) => {
  const scrollContainer = useRef(null);

  const config = {
    "dateStart": "2023-1-31",
    "dateEnd": "2023-2-4",
    "repo": "repo-name"
  }

  const testEvents = {
    "zama-party": {
      "name": "Zama Party",
      "org": "Zama",
      "dri": "Jeremy Zaccherini",
      "website": "https://lu.ma/zama-party-labweek22",
      "date": "2023-2-2",
      "days": 1,
      "times": "19:00 - 22:00",
      "venueName": "[Flat Eventos Lisboa](https://goo.gl/maps/9UJeot3L49GtbUM39)",
      "venueAddress": "Calçada Ribeiro Santos 37 1º andar, 1200-769 Lisboa, Portugal",
      "attendees": "",
      "difficulty": "All Welcome",
      "tags": [
        "Party"
      ],
      "color": "yellow",
      "logomark": "/logomarks/Zama - Square.png",
      "description": "As part of LabWeek22 by Protocal Labs, Zama is throwing a party on Thursday, October 27th. The idea is to connect web3 entrepreneurs and builders, meet the Zama team, discuss privacy, crypto—graphy and blockchain... And have a good time!!!!\n",
      "priority": 6
    },
    "zama-party-2": {
      "name": "Zama Party 2",
      "org": "Zama",
      "dri": "Jeremy Zaccherini",
      "website": "https://lu.ma/zama-party-labweek22",
      "date": "2023-2-3",
      "days": 1,
      "times": "19:00 - 22:00",
      "venueName": "[Flat Eventos Lisboa](https://goo.gl/maps/9UJeot3L49GtbUM39)",
      "venueAddress": "Calçada Ribeiro Santos 37 1º andar, 1200-769 Lisboa, Portugal",
      "attendees": "",
      "difficulty": "All Welcome",
      "tags": [
        "Party"
      ],
      "color": "yellow",
      "logomark": "/logomarks/Zama - Square.png",
      "description": "As part of LabWeek22 by Protocal Labs, Zama is throwing a party on Thursday, October 27th. The idea is to connect web3 entrepreneurs and builders, meet the Zama team, discuss privacy, crypto—graphy and blockchain... And have a good time!!!!\n",
      "priority": 6
    }
  }

  useEffect(() => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollTo(0, 0);
    }
  });

  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className='w-full pt-10 lg:pt-56 pb-28 min-h-[10vh]' id='schedule'>
        {/* <ScrollContainer innerRef={scrollContainer} className="scroll-container bg-gray-100 py-10"> */}
            <div className="flex-none min-h-full w-full">
              <div className="content">
                <ScheduleTable events={annotateEvents(testEvents, config)} config={config} />
              </div>
            </div>
          {/* </ScrollContainer> */}
        </div>
    </Section>
  );
};

export const eventScheduleBlockSchema: any = {
  label: "Event Schedule",
  name: "eventSchedule",
  fields: [
    backgroundSchema,
    navigationLabelSchema,
  ],
};