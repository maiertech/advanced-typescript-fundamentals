# Advanced TypeScript fundamentals

My course notes for
https://egghead.io/courses/advanced-typescript-fundamentals-579c174f.

## Optional chaining

Use optionsl chaining to replace

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
