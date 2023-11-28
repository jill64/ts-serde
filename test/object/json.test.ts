import { json } from '@/object/json.js'
import { expect, test } from 'vitest'
import { prepare } from '../utils/prepare.js'

test('json', () => {
  const serde = json(
    (x): x is { key: string } =>
      !!(x && typeof x === 'object' && 'key' in x && typeof x.key === 'string')
  )

  const check = prepare(serde)

  check({
    key: 'value'
  })

  expect(() => serde.deserialize('')).toThrowError()
})

test('json-fallback', () => {
  const serde = json(
    (x): x is { key: string } =>
      !!(x && typeof x === 'object' && 'key' in x && typeof x.key === 'string'),
    null
  )

  const check = prepare(serde)

  check({
    key: 'value'
  })

  expect(serde.deserialize('')).toBe(null)
})
