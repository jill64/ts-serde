import { expect } from 'vitest'
import { Serde } from '../../src/index.js'

export const prepare =
  <T>({ serialize, deserialize }: Serde<T>) =>
  (value: T) => {
    expect(deserialize(serialize(value))).toEqual(value)
    expect(serialize(deserialize(serialize(value)))).toEqual(serialize(value))
  }
