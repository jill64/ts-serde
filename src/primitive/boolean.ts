import { Serde } from '../types/Serde.js'

export const boolean: Serde<boolean> = {
  serialize: String,
  deserialize: (str) => str === 'true'
}
