# eventstop

[![NPM version](https://img.shields.io/npm/v/eventstop.svg?style=flat)](https://npmjs.com/package/eventstop) [![NPM downloads](https://img.shields.io/npm/dm/eventstop.svg?style=flat)](https://npmjs.com/package/eventstop) [![Build Status](https://img.shields.io/circleci/project/egoist/eventstop/master.svg?style=flat)](https://circleci.com/gh/egoist/eventstop) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Features

- Modern
- For Node.js and browsers
- 300 bytes minified and gzipped

## Install

```bash
yarn add eventstop
```

You can also use the UMD version via https://unpkg.com/eventstop

## Usage

```js
const eventstop = require('eventstop')

const {on, emit} = eventstop()

// subscribe an event
const off = on('ready', msg => {
  console.log('message:', msg)
})

emit('ready', 'hola')
//=> hola

// unsubscribe
off()
```

## API

```js
const event = eventstop()
// or
const {on, off, emit, once} = eventstop()
```

### .on(event, handler)

Return a function which would execute `unsubscribe(event, handler)` when you call it.

### .once(event, handler)

Like `.subscribe` but only trigger `handler` once.

#### event

Type: `string`

#### handler

Type: `function`

### .emit(event, ...args)

#### event

Type: `string`

### .off(event, handler)

Same args to `.on`

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
