import * as de from 'devalue'
import { Devaluate } from '../types/Devaluate.js'
import { serdefy } from '../utils/serdefy.js'

export const devalue = serdefy<Devaluate>(de)
