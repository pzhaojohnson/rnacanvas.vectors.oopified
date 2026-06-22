import { isFiniteVectorLike } from './isFiniteVectorLike';

test('`function isFiniteVectorLike()`', () => {
  // finite X and Y components
  expect(isFiniteVectorLike({ x: 1, y: 2 })).toBe(true);

  // nonfinite X or Y components
  expect(isFiniteVectorLike({ x: 1, y: NaN })).toBe(false);
  expect(isFiniteVectorLike({ x: -Infinity, y: 2 })).toBe(false);

  // X or Y components of wrong type
  expect(isFiniteVectorLike({ x: 1, y: '2' })).toBe(false);
  expect(isFiniteVectorLike({ x: true, y: 2 })).toBe(false);

  // finite magnitude / direction
  expect(isFiniteVectorLike({ magnitude: 100, direction: Math.PI / 3 })).toBe(true);

  // nonfinite magnitude or direction
  expect(isFiniteVectorLike({ magnitude: 100, direction: Infinity })).toBe(false);
  expect(isFiniteVectorLike({ magnitude: NaN, direction: Math.PI / 3 })).toBe(false);

  // magnitude or direction of wrong type
  expect(isFiniteVectorLike({ magnitude: 100, direction: true })).toBe(false);
  expect(isFiniteVectorLike({ magnitude: '100', direction: Math.PI / 3 })).toBe(false);

  // X and Y components and magnitude / direction
  // (note that redundant components don't have to agree with each other)
  expect(isFiniteVectorLike({ x: 1, y: 2, magnitude: 100, direction: Math.PI / 3 })).toBe(true);

  // empty object
  expect(isFiniteVectorLike({})).toBe(false);

  // random values
  expect(isFiniteVectorLike(2)).toBe(false);
  expect(isFiniteVectorLike(null)).toBe(false);
  expect(isFiniteVectorLike(undefined)).toBe(false);
});
