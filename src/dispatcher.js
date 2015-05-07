let listeners = {}

function register (event, fn) {
  listeners[event] = listeners[event] || []
  listeners[event].push(fn)
}

function remove (event, fn) {
  let handlers = listeners[event]

  handlers.splice(handlers.indexOf(fn), 1)
}

function dispatch (event, ...args) {
  const eventListeners = listeners[event]
  if (eventListeners) {
    eventListeners.forEach(event => {
      event.apply(null, args)
    })
  }
}

function getEventHandlers (event) {
  return listeners[event]
}

function clearEventHandlers (event) {
  if (event) {
    listeners[event] = []
  }
}

export default {
  register,
  remove,
  dispatch,
  getEventHandlers,
  clearEventHandlers
}
