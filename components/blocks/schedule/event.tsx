import dayjs from 'dayjs'
import classNames from 'classnames'
import { Modal } from '../../modal'
import { TinaMarkdown } from "tinacms/dist/rich-text";

function Card({ children, color }) {
  let borderColor = 'bg-gray'
  let bgColor = 'bg-white'

  if (color) {
    borderColor = 'bg-' + color
    bgColor = 'bg-' + color
  }

  return (
    <div className={classNames(
      borderColor,
      'eventcard',
      'p-0.5 shadow-md h-full whitespace-normal hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-green-500'
    )}>
      <div className={classNames(
        bgColor,
        'block p-3 sm:px-3 sm:py-2 h-full hover:bg-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-cyan-500/10 hover:to-green-500/10'
      )}>
        <div className="flex flex-col h-full text-xs text-gray-600">
          {children}
        </div>
      </div>
    </div>
  )
}

export function EventCard({ event }) {
  const isWorkInProgress = event.tags?.some((el) => el.toLowerCase() === "wip")
  return (
    <Modal content={<EventModalContent event={event}/>} title={event.name} hash={event.hash}>
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
            <div className="text-black mg-copy-small mt-2">
              {event.times !== "To be confirmed" &&
                <div>
                  {event.times}
                </div>
              }
              {event.venueName && event.venueName != "Private" &&
                <div>
                  <TinaMarkdown content={event.venueName} />
                </div>
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
            <div className="event-tags w-full">
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
    </Modal>
  )
}

function EventModalContent({ event }) {
  return (
    <>
      <ul className="list-disc ml-4">
        <li><b>Date</b>: {dateStr(event.date, event.days)}</li>
        <li><b>Times</b>: {event.times}</li>
        {event.venueName &&
          <li><b>Venue</b>: <span className="inline-block">
            <TinaMarkdown content={event.venueName} />
          </span></li>
        }
        <li><b>Organization</b>: {event.org}</li>
        <li><b>Attendees</b>: {event.attendees} ({event.difficulty})</li>
      </ul>
      <div className="event-tags">
        {event.tags?.map((tag, i) => (
          (tag && <Tag key={i}>{tag}</Tag>)
        ))}
      </div>
      <p className="text-base leading-relaxed prose">
        <TinaMarkdown content={event.description} />
      </p>
      {event.timeslots && <TimeslotTable timeslots={event.timeslots} />}
    </>
  )
}

export function AddCard({ config }) {
  return (
    <Modal content={<AddEventModalContent config={config} />} title="Add your event" hash="add-event">
      <Card color="white">
        <div className="place-content-center w-full m-0 py-5 text-center text-gray-300 hover:text-gray-500">
          <div className="text-6xl">
            +
          </div>
          <div className="text-xl font-bold">
            Add your event
          </div>
        </div>
      </Card>
    </Modal>
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

function TimeslotTable({ timeslots }) {
  return (
    <div>
      <h4 className="py-3 text-sm text-gray-900">Schedule</h4>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">time</th>
            <th scope="col" className="px-6 py-3">speaker</th>
            <th scope="col" className="px-6 py-3">info</th>
          </tr>
        </thead>
        <tbody>
          {timeslots.map((timeslot, i) => (
            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 align-top dark:text-white whitespace-nowrap">{timeslot.startTime}</th>
              <td className="px-6 py-4 align-top">{timeslot.speakers && timeslot.speakers.join(", ")}</td>
              <td className="px-6 py-4">
                <span className="font-bold">{timeslot.title}</span>
                <br />
                <p>{timeslot.description}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Tag({ children }) {
  return (
    <button className="px-1.5 py-0.5 mr-1 my-1 border border-gray-400 text-gray-400 rounded-full text-xs cursor-default">
      {children}
    </button>
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
