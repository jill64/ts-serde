import { devalue } from '@/object/devalue.js'
import { expect, test } from 'vitest'
import { prepare } from '../utils/prepare.js'

test('devalue', () => {
  const serde = devalue(
    (x): x is Set<Date> =>
      !!(
        x &&
        typeof x === 'object' &&
        x instanceof Set &&
        [...x].every((x) => x instanceof Date)
      )
  )

  const check = prepare(serde)

  check(new Set([new Date()]))

  expect(() => serde.deserialize('')).toThrowError()
})

test('devalue-fallback', () => {
  const serde = devalue(
    (x): x is Set<Date> =>
      !!(
        x &&
        typeof x === 'object' &&
        x instanceof Set &&
        [...x].every((x) => x instanceof Date)
      ),
    undefined
  )

  const check = prepare(serde)

  check(new Set([new Date()]))

  expect(serde.deserialize('')).toBe(undefined)
})
