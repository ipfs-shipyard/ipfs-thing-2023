import { useRef, useEffect } from 'react'
import { Section } from "../section";
import { AddCard } from './event-schedule/event'

import { backgroundSchema } from "../../schema/background"
import { navigationLabelSchema } from "../../schema/navigation-label";
import dayjs from 'dayjs'

import ScrollContainer from 'react-indiana-drag-scroll'
import ScheduleTable from './event-schedule/schedule-table';

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
    "dateStart": "2023-4-14",
    "dateEnd": "2023-4-20",
    "repo": "https://github.com/ipfs-shipyard/ipfs-thing-2023"
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
      <div className="bg-gray-100 py-10 pb-0 text-center">
        <img className="inline-block mr-3" src="/click-drag.svg" />
        Click and drag the schedule to navigate
      </div>
      <div className='w-full max-w-desktop-full mx-auto min-h-[10vh]' id='schedule'>
        <ScrollContainer innerRef={scrollContainer} className="scroll-container bg-gray-100 py-10" ignoreElements='.modal'>
            <div className="flex-none min-h-full w-full">
              <div className="content">
                <ScheduleTable events={annotateEvents(events, config)} config={config} />
              </div>
            </div>
          </ScrollContainer>
          <div className={`bg-gray-100 p-10 pt-0`}>
            <AddCard config={config}/>
          </div>
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
