import { Json } from '../types/Json.js'
import { serdefy } from '../utils/serdefy.js'

export const json = serdefy<Json>(JSON)
