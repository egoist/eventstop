export default function eventstop() {
  const events = {}

  function select(event) {
    return events[event] || (events[event] = [])
  }

  function on(event, handler) {
    select(event).push(handler)
    return () => {
      off(event, handler)
    }
  }

  function once(event, fn) {
    const handler = (...args) => {
      off(event, handler)
      fn(...args)
    }
    return on(event, handler)
  }

  function off(event, fn) {
    if (event in events) {
      const index = events[event].indexOf(fn)
      // why would I use `~index` if `!==` is more clear
      if (index !== -1) {
        select(event).splice(index, 1)
      }
    }
  }

  function emit(event, ...args) {
    select(event).forEach(event => event(...args))
  }

  return {
    on,
    off,
    once,
    emit
  }
}
