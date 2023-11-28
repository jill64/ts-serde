import { Serde } from '../index.js'
import { Deserialize } from '../types/Deserialize.js'
import { Serialize } from '../types/Serialize.js'

export const serdefy =
  <U>({
    stringify,
    parse
  }: {
    stringify: Serialize<U>
    parse: Deserialize<U>
  }) =>
  <T extends U>(guard: (value: U) => value is T, fallback?: T): Serde<T> => ({
    serialize: stringify,
    deserialize: (str) => {
      try {
        const value = parse(str)

        if (guard(value)) {
          return value
        }

        throw new Error('Failed to check type guard')
      } catch (e) {
        if (e instanceof SyntaxError && fallback) {
          return fallback
        }

        throw e
      }
    }
  })
