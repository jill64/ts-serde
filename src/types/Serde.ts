import type { Deserialize } from './Deserialize.js'
import type { Serialize } from './Serialize.js'

export type Serde<T> = {
  serialize: Serialize<T>
  deserialize: Deserialize<T>
}
