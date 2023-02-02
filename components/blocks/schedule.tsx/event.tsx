import Link from "next/link";
import { useState, useEffect } from 'react'
import { Button } from 'flowbite-react'
// import { Modal, Button } from 'flowbite-react'
import dayjs from 'dayjs'
import classNames from 'classnames'
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function Card({ children, color, onClick }) {

  let borderColor = 'bg-gray-400'
  let bgColor = 'bg-white'

  if (color) {
    borderColor = 'bg-' + color + '-400'
    bgColor = 'bg-' + color + '-100'
  }

  return (
    <div className={classNames(
      borderColor,
      'eventcard',
      'p-0.5 shadow-md h-full whitespace-normal hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-green-500'
    )} onClick={onClick}>
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

// hover:ml-1 hover:-mr-1 hover:mt-1 hover:-mb-1
export function EventCard({ event }) {
  const isWorkInProgress = event.tags?.some((el) => el.toLowerCase() === "wip")

  return (
    <EventModal event={event}>
      <div className={classNames('w-full', 'h-full', 'overflow-hidden', { 'opacity-70': isWorkInProgress })}>
        <Card color={event.color} onClick={() => { return ""}}>
          <div className="flex-1">
            <div className="flex gap-2">
              <h5 className="flex-1 text-lg font-bold leading-6 text-gray-900">
                {event.name}
              </h5>
              {event.isLive &&
                <div className="w-12 mt-0.5 flex-none">
                  <img width="48" height="18" src="/live-streaming.svg" />
                </div>
              }
            </div>
            <div className="text-sm mt-2">
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
    </EventModal>
  )
}

export function BlankCard() {
  return (
    <Card onClick={() => {return ""}} color="">
      <div className="place-content-center w-full m-0 py-5 text-center text-gray-300 hover:text-gray-500">
        <div className="text-6xl">
          +
        </div>
        <div className="text-xl font-bold">
          Add your event
        </div>
      </div>
    </Card>
  )
}

/**
 * @see https://github.com/ipfs-shipyard/ipfs-thing-2022/issues/125
 */
function getLocationHash() {
  if (typeof window !== 'undefined') {
    return window.location.hash
  }
}

/**
 * @see https://github.com/ipfs-shipyard/ipfs-thing-2022/issues/125
 */
function setLocationHash(hash) {
  if (typeof window !== 'undefined') {
    if (history?.pushState) {
      history.pushState(null, null, hash);
    } else {
      window.location.hash = hash
    }
  }
}

export function EventModal({ children, event }) {
  let defaultOpenState = false
  if (getLocationHash() === event.hash) {
    defaultOpenState = true
  }
  const [openModal, setOpenModal] = useState(defaultOpenState);
  const open = () => {
    if (getLocationHash() !== event.hash) {
      setLocationHash(event.hash)
    }
    setOpenModal(true)
  }
  const close = () => {
    if (getLocationHash() === event.hash) {
      setLocationHash('#')
    }
    setOpenModal(false)
  }
  const isOpen = () => openModal === true

  const [hashChangeEventRegistered, setHashChangeEventRegistered] = useState(false);
  if (typeof window !== 'undefined' && !hashChangeEventRegistered) {
    window.addEventListener('hashchange', (hashChangeEvent) => {
      const oldUrlHash = (new URL(hashChangeEvent.oldURL)).hash
      const newUrlHash = (new URL(hashChangeEvent.newURL)).hash
      if (newUrlHash === event.hash) {
        open()
      } else if (oldUrlHash === event.hash) {
        close()
      }
    })
    setHashChangeEventRegistered(true)
  }

  bindKey('Escape', close)

  return (
    <>
      <div className="h-full w-full" onClick={open}>
        {children}
      </div>
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

export function AddEventModal({ config }) {
  const [openModal, setOpenModal] = useState(false);
  const open = () => setOpenModal(true)
  const close = () => setOpenModal(false)
  const isOpen = () => openModal === true

  // add opener to window.
  if (typeof window !== 'undefined') {
    // window.showAddEventModal = open
  }

  bindKey('Escape', close)

  return (
    <>
      <p>Modal</p>
    </>
  )
}

export function Tag({ children }) {
  return (
    <button className="px-1.5 py-0.5 mr-1 my-1 border border-gray-400 text-gray-400 rounded-full text-xs cursor-default">
      {children}
    </button>
  )
}

function bindKey(bindKey, handler) {
  const kHandler = ({ key }) => {
    if (key === bindKey) handler()
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', kHandler);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', kHandler);
      }
    }
  }, []);
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
