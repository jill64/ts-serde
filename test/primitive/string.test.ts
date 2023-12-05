import { test } from 'vitest'
import { string } from '../../src/index.js'
import { prepare } from '../utils/prepare.js'

test('string', () => {
  const check = prepare(string)

  check('')
  check(' ')
  check('\t')
  check('\n')
  check('Test String')
  check('Test String\n')
  check('Test String\n\t')
  check('Test Emojis 😃')
})
