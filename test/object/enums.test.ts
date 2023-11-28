import { enums } from '@/object/enums.js'
import { expect, test } from 'vitest'
import { prepare } from '../utils/prepare.js'

test('enums', () => {
  const serde = enums(['foo', 'bar', 'baz'])
  const check = prepare(serde)

  check('foo')
  check('bar')
  check('baz')

  expect(() => serde.deserialize('')).toThrowError()
})

test('enums-fallback', () => {
  const serde = enums(['foo', 'bar', 'baz'], 'value')
  const check = prepare(serde)

  check('foo')
  check('bar')
  check('baz')

  expect(serde.deserialize('')).toBe('value')
})
