export default class EventStop {
  constructor() {
    this.events = {}
  }

  subscribe(event, fn) {
    this.events[event] = this.events[event] || []
    this.events[event].push(fn)
    return () => {
      this.unsubscribe(event, fn)
    }
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
