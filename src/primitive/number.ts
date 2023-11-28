import { Serde } from '../types/Serde.js'

export const number: Serde<number> = {
  serialize: String,
  deserialize: Number
}
