# eventstop

[![NPM version](https://img.shields.io/npm/v/eventstop.svg?style=flat)](https://npmjs.com/package/eventstop) [![NPM downloads](https://img.shields.io/npm/dm/eventstop.svg?style=flat)](https://npmjs.com/package/eventstop) [![Build Status](https://img.shields.io/circleci/project/egoist/eventstop/master.svg?style=flat)](https://circleci.com/gh/egoist/eventstop) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Features

- Modern
- For Node.js and browsers
- 300 byte minified and gzipped

## Install

```bash
yarn add eventstop
```

## Usage

```js
const EventStop = require('eventstop')

const event = new EventStop()

// subscribe an event
const unsubscribe = event.subscribe('ready', msg => {
  console.log('message:', msg)
})

event.emit('ready', 'hola')
//=> hola

// unsubscribe
unsubscribe()
```

## API

### .subscribe(event, handler)

Return a function which would execute `unsubscribe(event, handler)` when you call it.

#### event

Type: `string`

#### handler

Type: `function`

### .emit(event, ...args)

#### event

Type: `string`

### .unsubscribe(event, handler)

Same args to `.subscribe`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**eventstop** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/eventstop/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
