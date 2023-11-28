export type Devaluate =
  | string
  | number
  | boolean
  | null
  | undefined
  | bigint
  | Devaluate[]
  | RegExp
  | Date
  | Map<Devaluate, Devaluate>
  | Set<Devaluate>
  | { [key: string]: Devaluate }
