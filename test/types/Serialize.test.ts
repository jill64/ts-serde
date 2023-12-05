import { expectTypeOf, test } from 'vitest'
import { Serialize } from '../../src/index.js'

test('Serialize', () => {
  expectTypeOf((x: string) => x).toMatchTypeOf<Serialize<string>>()
  expectTypeOf((x: number) => x.toString()).toMatchTypeOf<Serialize<number>>()
})
