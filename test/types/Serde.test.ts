import { expectTypeOf, test } from 'vitest'
import { Serde } from '../../src/index.js'

test('Deserialize', () => {
  expectTypeOf({
    serialize: (x: string) => x,
    deserialize: (x: string) => x
  }).toMatchTypeOf<Serde<string>>()

  expectTypeOf({
    serialize: (x: number) => x.toString(),
    deserialize: (x: string) => parseInt(x)
  }).toMatchTypeOf<Serde<number>>()
})
