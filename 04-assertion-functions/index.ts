function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    throw Error(message);
  }
}

function assertIsNumber(value: unknown, name: string): asserts value is number {
  if (typeof value !== 'number') {
    throw Error(`Expected "${name}" to be a number.`);
  }
}

function range(from: number, to: number): number[];
function range(from: unknown, to: unknown): number[] {
  // assert(typeof from === 'number', "'from' must be a number");
  // assert(typeof to === 'number', "'to' must be a number");
  assertIsNumber(from, 'from');
  assertIsNumber(to, 'to');

  const values: number[] = [];
  for (let i = from; i < to; i++) {
    values.push(i);
  }
  return values;
}

console.log(range(0, 5));
