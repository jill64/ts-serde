import { test } from 'vitest'
import { bigint } from '../../src/index.js'
import { prepare } from '../utils/prepare.js'

test('bigint', () => {
  const check = prepare(bigint)

  check(-0n)
  check(0n)
  check(123n)
  check(-123n)
  check(1234567890123456789012345678901234567890n)
  check(-1234567890123456789012345678901234567890n)
})
