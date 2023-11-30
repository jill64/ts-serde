import { Serde } from '../types/Serde.js'

export const integer: Serde<number> = {
  serialize: String,
  deserialize: (str) => {
    const n = parseInt(str)
    return isNaN(n) ? 0 : n
  }
}
