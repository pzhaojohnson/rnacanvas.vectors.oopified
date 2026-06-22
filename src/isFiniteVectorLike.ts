import { Vector } from './Vector';

import type { VectorLike } from './VectorLike';

import { isVectorLike } from './isVectorLike';

/**
 * Returns `true` if a value is a `VectorLike` object and its component values are all finite numbers.
 *
 * Returns `false` otherwise.
 */
export function isFiniteVectorLike(value: unknown): value is VectorLike {
  if (!isVectorLike(value)) {
    return false;
  }

  let v = Vector.matching(value);

  return v.isFinite();
}
