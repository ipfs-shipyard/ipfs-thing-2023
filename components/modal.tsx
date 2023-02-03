import { useState, useEffect } from 'react'

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

function getLocationHash() {
  if (typeof window !== 'undefined') {
    return window.location.hash
  }
}

function setLocationHash(hash) {
  if (typeof window !== 'undefined') {
    if (history?.pushState) {
      history.pushState(null, null, hash);
    } else {
      window.location.hash = hash
    }
  }
}

export function Modal({ children, content, title, hash }) {
  const [openModal, setOpenModal] = useState(getLocationHash() === hash);
  const open = () => {
    setLocationHash(hash)
    setOpenModal(true)
  }
  const close = () => {
    setLocationHash('#')
    setOpenModal(false)
  }

  // const [hashChangeEventRegistered, setHashChangeEventRegistered] = useState(false);
  // if (typeof window !== 'undefined' && !hashChangeEventRegistered) {
  //   window.addEventListener('hashchange', (hashChangeEvent) => {
  //     const oldUrlHash = (new URL(hashChangeEvent.oldURL)).hash
  //     const newUrlHash = (new URL(hashChangeEvent.newURL)).hash
  //     if (newUrlHash === event.hash) {
  //       open()
  //     } else if (oldUrlHash === event.hash) {
  //       close()
  //     }
  //   })
  //   setHashChangeEventRegistered(true)
  // }

  /* TODO: This runs on every modal */
  bindKey('Escape', close)

  return (
    <>
      <div className="h-full w-full" onClick={open}>
        {children}
      </div>
      <div className={`modal fixed inset-0 z-20 overflow-y-auto overflow-x-hidden flex items-center justify-center backdrop-blur-xl ${openModal ? "" : "hidden"}`}>
        <div className="modal-fader absolute inset-0 bg-black opacity-50"></div>
        <div className="modal-wrap relative w-full max-w-3xl bg-gradient-to-r from-accent4 via-accent2 to-accent3 p-1">
          <div className="bg-white">
            <div className="modal-header p-5 mg-headline-medium">{title}</div>
            <div className="modal-body p-5 mg-copy-medium overflow-y-scroll border-gray-light border-b border-t max-h-[70vh]">
              {content}
            </div>
            <div className="modal-footer p-5">
              {/* {event.website &&
                <Link href={event.website} prefetch={false} target="_blank">
                  <a target="_blank" rel="noreferrer">
                    <Button>Website</Button>
                  </a>
                </Link>
              } */}
              <a className="mg-btn-primary" color="alternative" onClick={close}>Close</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
