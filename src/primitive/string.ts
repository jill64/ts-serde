import type { Serde } from '../types/Serde.js'

export const string: Serde<string> = {
  serialize: String,
  deserialize: String
}
