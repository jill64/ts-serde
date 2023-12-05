import { expect, test } from 'vitest'
import { integer } from '../../src/index.js'
import { prepare } from '../utils/prepare.js'

test('integer', () => {
  const check = prepare(integer)

  check(0)
  check(123)
  check(-1)

  expect(integer.deserialize('1.23')).toBe(1)
  expect(integer.deserialize('NaN')).toBe(0)
  expect(integer.deserialize('')).toBe(0)
})
