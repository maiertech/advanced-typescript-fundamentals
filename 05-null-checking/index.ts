function assertionIsNonNullish<T>(
  value: T,
  message: string
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw Error(message);
  }
}

const root = document.getElementById('root');

assertionIsNonNullish(root, "Coudn't find DOM element #root.");

root.addEventListener('click', (e) => {
  // ...
});
