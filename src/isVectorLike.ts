import type { VectorLike } from './VectorLike';

import { isNonNullObject } from '@rnacanvas/value-check';

import { isNumber } from '@rnacanvas/value-check';

export function isVectorLike(value: unknown): value is VectorLike {
  if (!isNonNullObject(value)) {
    return false;
  }

  if (isNumber(value.x) && isNumber(value.y)) {
    return true;
  }

  if (isNumber(value.magnitude) && isNumber(value.direction)) {
    return true;
  }

  return false;
}
