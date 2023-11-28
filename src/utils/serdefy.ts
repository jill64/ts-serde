import { Serde } from '../index.js'
import { Deserialize } from '../types/Deserialize.js'
import { Serialize } from '../types/Serialize.js'

export const serdefy = <U>({
  stringify,
  parse
}: {
  stringify: Serialize<U>
  parse: Deserialize<U>
}) =>
  function <T extends U>(
    guard: (value: U) => value is T,
    fallback?: T
  ): Serde<T> {
    const exists_fallback = arguments.length > 1

    const serialize = stringify

    const deserialize: Deserialize<T> = (str) => {
      try {
        const value = parse(str)

        if (guard(value)) {
          return value
        }

        throw new SyntaxError('Failed to check type guard')
      } catch (e) {
        if (e instanceof SyntaxError && exists_fallback) {
          return fallback as T
        }

        throw e
      }
    }

    return {
      serialize,
      deserialize
    }
  }
