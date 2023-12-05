import { expectTypeOf, test } from 'vitest'
import { Devaluate } from '../../src/index.js'

test('Devaluate', () => {
  expectTypeOf(1).toMatchTypeOf<Devaluate>()
  expectTypeOf('a').toMatchTypeOf<Devaluate>()
  expectTypeOf(new Map()).toMatchTypeOf<Devaluate>()
  expectTypeOf(new Date()).toMatchTypeOf<Devaluate>()
  expectTypeOf(/Regexp/).toMatchTypeOf<Devaluate>()
})
