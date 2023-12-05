import { expectTypeOf, test } from 'vitest'
import { Json } from '../../src/index.js'

test('Json', () => {
  expectTypeOf('').toMatchTypeOf<Json>()
  expectTypeOf(0).toMatchTypeOf<Json>()
  expectTypeOf(true).toMatchTypeOf<Json>()
  expectTypeOf(null).toMatchTypeOf<Json>()
  expectTypeOf({}).toMatchTypeOf<Json>()
  expectTypeOf([
    {
      a: 0,
      b: 'b',
      c: true,
      d: null,
      e: {},
      f: []
    }
  ]).toMatchTypeOf<Json>()
})
