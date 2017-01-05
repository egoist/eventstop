import test from 'ava'
import EventStop from './src'

test('main', t => {
  const event = new EventStop()
  let yourName
  const unsubscribe = event.subscribe('hola', name => {
    yourName = name
  })
  event.emit('hola', 'taki')
  t.is(yourName, 'taki')
  unsubscribe()
  event.emit('hola', 'mitsuha')
  t.is(yourName, 'taki')
})

test('once', t => {
  const event = new EventStop()
  let yourName
  const unsubscribe = event.once('hola', name => {
    yourName = name
  })
  event.emit('hola', 'taki')
  t.is(yourName, 'taki')
  event.emit('hola', 'mitsuha')
  t.is(yourName, 'taki')
})
