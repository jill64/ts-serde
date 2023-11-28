import { Serde } from '../types/Serde.js'

export const bigint: Serde<bigint> = {
  serialize: String,
  deserialize: BigInt
}
