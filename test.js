import test from 'ava'
import eventstop from './src'

test('main', t => {
  const {on, emit} = eventstop()
  let yourName
  const off = on('hola', name => {
    yourName = name
  })
  emit('hola', 'taki')
  t.is(yourName, 'taki')
  off()
  emit('hola', 'mitsuha')
  t.is(yourName, 'taki')
})

test('once', t => {
  const {once, emit} = eventstop()
  let yourName
  const off = once('hola', name => {
    yourName = name
  })
  emit('hola', 'taki')
  t.is(yourName, 'taki')
  emit('hola', 'mitsuha')
  t.is(yourName, 'taki')
})
