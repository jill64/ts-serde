import { number } from '@/primitive/index.js'
import { test } from 'vitest'
import { prepare } from '../utils/prepare.js'

test('number', () => {
  const check = prepare(number)

  check(0)
  check(123)
  check(-1)

  check(1.1)
  check(-1.1)
  check(0.1)
  check(-0.1)

  check(1e10)
  check(-1e10)
  check(1e-10)
  check(-1e-10)

  check(Infinity)
  check(-Infinity)
  check(NaN)

  check(Number.MAX_SAFE_INTEGER)
  check(Number.MIN_SAFE_INTEGER)
  check(Number.MAX_VALUE)
  check(Number.MIN_VALUE)
})
