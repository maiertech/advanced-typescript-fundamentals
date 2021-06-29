let value: unknown;

// value = undefined;
value = 'Hello World';

if (typeof value === 'string') {
  const upperCaseText = value.toUpperCase();
  console.log(upperCaseText);
}

// This is perfectly fine to use inside your own TS project.
/*
function range(from: number, to: number): number[] {
  const values: number[] = [];
  for (let i = from; i < to; i++) {
    values.push(i);
  }
  return values;
}
*/

// If you share this function in a library, consumers may not see type annotations.
// Add additional checks that work with plain JS.
// Use `unknown` type to add these checks.
// Use a function overload signature to ensure correct type hints.
function range(from: number, to: number): number[];
function range(from: unknown, to: unknown): number[] {
  if (typeof from !== 'number' || typeof to !== 'number') {
    throw Error('range() expects 2 numbers');
  }
  const values: number[] = [];
  for (let i = from; i < to; i++) {
    values.push(i);
  }
  return values;
}

console.log(range(0, 5));
