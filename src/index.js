export default class EventStop {
  constructor() {
    this.events = {}
  }

  subscribe(event, fn, once) {
    this.events[event] = this.events[event] || []
    const handler = once ? (...args) => {
      this.unsubscribe(event, fn)
      fn(...args)
    } : fn
    this.events[event].push(handler)
    return () => {
      this.unsubscribe(event, handler)
    }
  }

  once(event, fn) {
    return this.subscribe(event, fn, true)
  }

  unsubscribe(event, fn) {
    if (event in this.events) {
      this.events[event].splice(this.events[event].indexOf(fn), 1)
    }
  }

  emit(event, ...args) {
    if (event in this.events) {
      for (const fn of this.events[event]) {
        fn(...args)
      }
    }
  }
}
