import { expectTypeOf, test } from 'vitest'
import { Deserialize } from '../../src/index.js'

test('Deserialize', () => {
  expectTypeOf(() => '').toMatchTypeOf<Deserialize<string>>()
  expectTypeOf(() => 0).toMatchTypeOf<Deserialize<number>>()
})
