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
