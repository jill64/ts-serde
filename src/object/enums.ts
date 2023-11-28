import { Serde } from '../index.js'
import { serdefy } from '../utils/serdefy.js'

const make = serdefy({
  stringify: String,
  parse: String
})

export function enums<T extends string>(
  list: Readonly<T[]>,
  fallback?: T
): Serde<T> {
  const exists_fallback = arguments.length > 1

  const guard = (value: string): value is T =>
    (list as Readonly<string[]>).includes(value) ||
    (exists_fallback ? value === fallback : false)

  return exists_fallback ? make(guard, fallback) : make(guard)
}
