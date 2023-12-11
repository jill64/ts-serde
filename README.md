<!----- BEGIN GHOST DOCS HEADER ----->

# ts-serde

<!----- BEGIN GHOST DOCS BADGES -----><a href="https://npmjs.com/package/ts-serde"><img src="https://img.shields.io/npm/v/ts-serde" alt="npm-version" /></a> <a href="https://npmjs.com/package/ts-serde"><img src="https://img.shields.io/npm/l/ts-serde" alt="npm-license" /></a> <a href="https://npmjs.com/package/ts-serde"><img src="https://img.shields.io/npm/dm/ts-serde" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/ts-serde"><img src="https://img.shields.io/bundlephobia/min/ts-serde" alt="npm-min-size" /></a> <a href="https://github.com/jill64/ts-serde/actions/workflows/ci.yml"><img src="https://github.com/jill64/ts-serde/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a><!----- END GHOST DOCS BADGES ----->

🎶 Typed Serialization and Deserialization

<!----- END GHOST DOCS HEADER ----->

This library is a type-safe serialization/deserialization library inspired by [`serde.rs`](https://serde.rs).  
It contains the basic abstract types, some primitive functions, and object functions.

## Installation

```sh
npm i ts-serde
```

## Types

```js
import { Serde } from 'ts-serde'
import { Serialize, Deserialize } from 'ts-serde/types'
```

```ts
type Serialize<T> = (val: T) => string

type Deserialize<T> = (str: string) => T

type Serde<T> = {
  serialize: Serialize<T>
  deserialize: Deserialize<T>
}
```

## Primitive

Simple implementation using standard constructors.

```js
import { string, number, boolean, bigint } from 'ts-serde/primitive'
```

| Type                                  | serialize | deserialize    |
| ------------------------------------- | --------- | -------------- |
| [string](./src/primitive/string.ts)   | `String`  | `String`       |
| [number](./src/primitive/number.ts)   | `String`  | `Number`       |
| [bigint](./src/primitive/bigint.ts)   | `String`  | `BigInt`       |
| [boolean](./src/primitive/boolean.ts) | `String`  | `x === 'true'` |
| [integer](./src/primitive/integer.ts) | `String`  | `parseInt`     |

## Enum

```js
import { enums } from 'ts-serde/object'

const e = enums(['foo', 'bar', 'baz'])

e.serialize('foo') // => 'foo'
e.deserialize('foo') // => 'foo'

e.deserialize('qux') // => To Throw Error

const withFallback = enums(['foo', 'bar', 'baz'], 'fallback')

withFallback.deserialize('qux') // => 'fallback'
```

## Object

The object conversion methods are `JSON` and [`devalue`](https://github.com/Rich-Harris/devalue).

```js
import { json } from 'ts-serde/object'

const j = json(
  (x): x is { key: string } =>
    // ... Type Guard
)

j.serialize({ key: 'value' }) // => '{"key":"value"}'
j.deserialize('') // => To Throw Error
```

`devalue` supports more types than JSON.

```ts
import { devalue } from 'ts-serde/object'

const d = devalue(
  (x): x is Set<Date> =>
    // ... Type Guard
    ,
    null // fallback value
)

d.serialize(new Set([new Date()]))
// => '[["Set",1],["Date","20XX-01-01T00:00:00.000Z"]]'

d.deserialize('') // => null (fallback value)
```
