import Markdown from 'markdown-to-jsx'
import dayjs from 'dayjs'
import classNames from 'classnames'
import { Modal } from '../../modal'
import Link from 'next/link.js'

function Card({ children, color }) {
  let borderColor = 'bg-gray'
  let bgColor = 'bg-white'

  if (color) {
    borderColor = 'bg-' + color
    bgColor = 'bg-' + color
  }

  return (
    <>
      <div className={classNames(
        'cursor-pointer p-0.5 shadow-md h-full whitespace-normal bg-gray bg-gradient-to-br hover:from-accent4 hover:via-accent2 hover:to-accent3'
      )}>
        <div className={classNames(
          bgColor,
          'event-card-background relative block p-3 sm:px-3 sm:py-2 h-full bg-white'
        )}>
          <div className="flex flex-col h-full text-xs text-gray-600">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export function EventCard({ event, urlHash }) {
  const isWorkInProgress = event.tags?.some((el) => el.toLowerCase() === "wip")
  return (
    <Modal content={<EventModalContent event={event} urlHash={urlHash}/>} title={event.name} link={event.website} hash={event.hash} urlHash={urlHash}>
      <Link href={`/${event.hash}`} scroll={false}>
        <div className={classNames('w-full', 'h-full', 'overflow-hidden', { 'opacity-70': isWorkInProgress })}>
          <Card color={event.color}>
            <div className="flex-1">
              <div className="flex gap-2">
                <h5 className="flex-1 text-black mg-headline-small">
                  {event.name}
                </h5>
                {event.isLive &&
                  <div className="w-12 mt-0.5 flex-none">
                    <img width="48" height="18" src="/live-streaming.svg" />
                  </div>
                }
              </div>
              <div className="mg-copy-small mt-2">
                {event.times !== "To be confirmed" &&
                  <div>{event.times}</div>
                }
                {event.venueName && event.venueName != "Private" &&
                  <div>{event.venueName}</div>
                }
                <div>
                  👤 {event.attendees && `${event.attendees} -`} {event.difficulty}
                </div>
                <div className="mt-3">
                  {event.org}
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-end">
              <div className="event-tags">
                {event.tags?.map((tag, i) => (
                  (tag && <Tag key={i}>{tag}</Tag>)
                ))}
              </div>
              {event.logomark &&
                <div className="logomark inline-block">
                  <img height="48" className="w-auto h-12 object-contain" src={event.logomark} />
                </div>
              }
            </div>
          </Card>
        </div>
      </Link>
    </Modal>
  )
}

function EventModalContent({ event, urlHash }) {
  return (
    <>
      <ul className="list-disc mg-copy-small ml-4">
        <li><b>Date</b>: {dateStr(event.date, event.days)}</li>
        <li><b>Times</b>: {event.times}</li>
        {event.venueName &&
          <li><b>Venue</b>: <span className="inline-block">
            {event.venueName}
          </span></li>
        }
        <li><b>Track Lead</b>: {event.dri}</li>
        <li><b>Attendees</b>: {event.attendees} ({event.difficulty})</li>
      </ul>
      <div className="event-tags">
        {event.tags?.map((tag, i) => (
          (tag && <Tag key={i}>{tag}</Tag>)
        ))}
      </div>
      {event.description && (
        <div className="markdown mg-copy-small mt-4">
          <Markdown>{event.description}</Markdown>
        </div>
      )}
      {event.timeslots?.length >= 1 && <TimeslotTable timeslots={event.timeslots} hash={event.hash} urlHash={urlHash} />}
    </>
  )
}

export function AddCard({ config }) {
  return (
    // <Modal content={<AddEventModalContent config={config} />} title="Submit a track or talk" link="" hash="#add-event">
    <a target="_blank" href="https://airtable.com/shr2Eq1juLJh0ri3i">
      <Card color="white">
        <div className="place-content-center w-full m-0 py-5 text-center text-gray-300 hover:text-gray-500">
          <div className="text-6xl">
            +
          </div>
          <div className="text-xl font-bold">
            Submit a track or talk
          </div>
        </div>
      </Card>
    </a>
    // </Modal>
  )
}

function AddEventModalContent({config}) {
  return (
    <>
      <p>The event listings in this website are coordinated through GitHub.</p>
      <p>Steps to list your event:</p>
      <ol className="list-decimal ml-4 mt-3">
        <li><b>Step 1</b>: Read & file a pull-request in this repo: <br />
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href={config.repo} target="_blank">{config.repo}</a>
        </li>
        <li><b>Step 2</b>: Address any comments until your PR is merged.</li>
        <li><b>Step 3</b>: Blastoff! ⭐️💙</li>
      </ol>
    </>
  )
}

function TimeslotTable({ timeslots, hash, urlHash }) {
  const sortedTimeslots = timeslots.sort((a, b) => a.time.localeCompare(b.time))
  return (
    <div>
      <h4 className="py-3 mg-small text-black font-bold">Schedule</h4>
      <table className="w-full">
        <thead className="bg-gray-light text-left mg-copy-xs">
          <tr>
            <th scope="col" className="px-6 py-3">TIME</th>
            <th scope="col" className="px-6 py-3">SPEAKER</th>
            <th scope="col" className="px-6 py-3">INFO</th>
          </tr>
        </thead>
        <tbody className="mg-copy-small">
          {sortedTimeslots?.map((timeslot, i) => {
            const timeslotId = `${hash}-timeslot${i+1}`
            const currentTimeslot = urlHash?.replace('/', '-timeslot')
            const isCurrent = timeslotId === currentTimeslot
            return (
              <tr id={timeslotId} key={i} className={`relative border-b border-gray-light ${isCurrent ? 'bg-gray-light' : 'bg-white' }`} >
                <th scope="row" className="px-6 py-4 align-top whitespace-nowrap text-left">{timeslot.time}</th>
                <td className="px-6 py-4 align-top">{timeslot.speakers}</td>
                <td className="px-6 py-4">
                  <a className="font-bold underline" href={`/${hash}/${i+1}`}>{timeslot.title}</a>
                  {timeslot.description && (
                    <div className="markdown">
                      <Markdown>{timeslot.description}</Markdown>
                    </div>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function Tag({ children }) {
  return (
    <span className="inline-block px-1.5 py-0.5 mr-1.5 my-1 border border-gray text-gray mg-copy-small rounded-full cursor-default">
      {children}
    </span>
  )
}

function dateStr(date, days) {
  const d1 = dayjs(date)

  if (days === 1) {
    return d1.format("MMM DD")
  }

  const d2 = d1.add(days - 1, 'day')
  return d1.format("MMM DD") + ' - ' + d2.format("MMM DD")
}

export default EventCard
