import { isVectorLike } from './isVectorLike';

test('`function isVectorLike()`', () => {
  // X and Y components
  expect(isVectorLike({ x: 1, y: 2 })).toBe(true);

  expect(isVectorLike({ x: 1, y: '2' })).toBe(false);
  expect(isVectorLike({ x: true, y: 2 })).toBe(false);

  // magnitude / direction
  expect(isVectorLike({ magnitude: 100, direction: Math.PI / 3 })).toBe(true);

  expect(isVectorLike({ magnitude: 100, direction: true })).toBe(false);
  expect(isVectorLike({ magnitude: '100', direction: Math.PI / 3 })).toBe(false);

  // X and Y components and magnitude / direction
  // (note that redundant components don't have to agree with each other)
  expect(isVectorLike({ x: 1, y: 2, magnitude: 100, direction: Math.PI / 3 })).toBe(true);

  // empty object
  expect(isVectorLike({})).toBe(false);

  // random values
  expect(isVectorLike(2)).toBe(false);
  expect(isVectorLike(null)).toBe(false);
  expect(isVectorLike(undefined)).toBe(false);
});
