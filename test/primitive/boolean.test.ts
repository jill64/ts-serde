import { test } from 'vitest'
import { boolean } from '../../src/index.js'
import { prepare } from '../utils/prepare.js'

test('boolean', () => {
  const check = prepare(boolean)

  check(true)
  check(false)
})
