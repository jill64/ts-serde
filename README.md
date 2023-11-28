<!----- BEGIN GHOST DOCS HEADER ----->

# ts-serde

[![npm-version](https://img.shields.io/npm/v/ts-serde)](https://npmjs.com/package/ts-serde) [![npm-license](https://img.shields.io/npm/l/ts-serde)](https://npmjs.com/package/ts-serde) [![npm-download-month](https://img.shields.io/npm/dm/ts-serde)](https://npmjs.com/package/ts-serde) [![npm-min-size](https://img.shields.io/bundlephobia/min/ts-serde)](https://npmjs.com/package/ts-serde) [![ci.yml](https://github.com/jill64/ts-serde/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/ts-serde/actions/workflows/ci.yml) [![codecov-coverage](https://codecov.io/gh/jill64/ts-serde/graph/badge.svg)](https://codecov.io/gh/jill64/ts-serde)

🎶 Typed Serialization and Deserialization

## Installation

```sh
npm i ts-serde
```

<!----- END GHOST DOCS HEADER ----->

This library is a type-safe serialization/deserialization library inspired by [`serde.rs`](https://serde.rs).
It contains the basic abstract types, some primitive functions, and object functions.

## Types

```ts
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

```ts
import { string, number, boolean, bigint } from 'ts-serde/primitive'
```

| Type                                  | serialize | deserialize         |
| ------------------------------------- | --------- | ------------------- |
| [string](./src/primitive/string.ts)   | `String`  | `String`            |
| [number](./src/primitive/number.ts)   | `String`  | `Number`            |
| [boolean](./src/primitive/boolean.ts) | `String`  | `x => x === 'true'` |
| [bigint](./src/primitive/bigint.ts)   | `String`  | `BigInt`            |

## Enum

```ts
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

```ts
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

const de = devalue(
  (x): x is Set<Date> =>
    // ... Type Guard
    ,
    null // fallback value
)

de.serialize(new Set([new Date()]))
// => '[["Set",1],["Date","20XX-01-01T00:00:00.000Z"]]'

de.deserialize('') // => null (fallback value)
```
