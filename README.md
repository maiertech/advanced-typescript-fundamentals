# Advanced TypeScript fundamentals

My course notes for
https://egghead.io/courses/advanced-typescript-fundamentals-579c174f.

## Optional chaining

[Example](https://github.com/maiertech/advanced-typescript-fundamentals/blob/main/01-optional-chaining/index.ts)

```bash
npx tsc --project 01-optional-chaining/ && node 01-optional-chaining/index.js
```

Use optional chaining to replace

```ts
const value = options ? options.formatting : undefined;
```

with

```ts
const formatting = options?.formatting;
```

Optional chaining can be nested. This example

```ts
const indent = options
  ? options.formatting
    ? options.formatting.indent
    : undefined
  : undefined;
```

can be simplified to

```ts
const indent = options?.formatting?.indent;
```

The optional chaining operator `?.` can also be followed by `[]`

```ts
const indent = options?.formatting?.['indent-level'];
```

or `()`

```ts
const indent = options.formatting.getIndent?.();
```

## Nullish coalescing operator

[Example](https://github.com/maiertech/advanced-typescript-fundamentals/blob/main/02-nullish-coalescing-operator/index.ts)

```bash
npx tsc --project 02-nullish-coalescing-operator/ && node 02-nullish-coalescing-operator/index.js
```

The `||` (or) operator evaluates to the right hand side if the left hand side is
falsy:

| Expression         | Evaluates to    |
| :----------------- | :-------------- |
| `null \|\| 2`      | 2               |
| `undefined \|\| 2` | 2               |
| `false \|\| 2`     | 2               |
| `"" \|\| 2`        | 2 ("" is falsy) |
| `0 \| \| 2`        | 2 (0 is falsy)  |

Use `||` to provide a fallback value for falsy values.

The `??` (nullish coalescing) operator evaluates to the right hand side if the
left hand side is nullish:

| Expression       | Evaluates to |
| :--------------- | :----------- |
| `null ?? 2`      | 2            |
| `undefined ?? 2` | 2            |
| `false ?? 2`     | false        |
| `"" ?? 2`        | ""           |
| `0 ?? 2`         | 0            |

Use `??` to provide a fallback value for nullish values.

## Unknown type

[Example](https://github.com/maiertech/advanced-typescript-fundamentals/blob/main/03-unknown-type/index.ts)

```bash
npx tsc --project 03-unknown-type/ && node 03-unknown-type/index.js
```

Whenever you intend to use `any`, you should use `unknown`. With `any` you lose
the benefits that TypeScript (TS) gives you and it spreads through your projects
due to type inference. `unknown` is a better choice because TS forces you to put
the correct checks in place.

## Assertion functions

[Example](https://github.com/maiertech/advanced-typescript-fundamentals/blob/main/04-assertion-functions/index.ts)

```bash
npx tsc --project 04-assertion-functions/ && node 04-assertion-functions/index.js
```

Assertion functions can be used to narrow the `unknown` type. Assertion
functions assert a condition that helps TS inferring types.

## Null checking

[Example](https://github.com/maiertech/advanced-typescript-fundamentals/blob/main/05-null-checking/index.ts)

We start with

```ts
const root = document.getElementById('root');
```

which can be null. Accessing anything on root will trigger a TS warning. This
warning can be addressed in different ways.

### Non-null assertion operator

```ts
const root = document.getElementById('root')!;
```

This makes the warning go away but provides no runtime protection.

### Classic null check

Adding this null check will elimininate the warning and provide runtime
protection:

```ts
if (root === null) {
  throw Error("Coudn't find DOM element #root.");
}
```

### Assertion function

This assertion function asserts that a value is not nullish:

```ts
function assertionIsNonNullish<T>(
  value: T,
  message: string
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw Error(message);
  }
}
```

Run it on `root`:

```ts
assertionIsNonNullish(root, "Coudn't find DOM element #root.");
```
