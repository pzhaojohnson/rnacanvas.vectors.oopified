import type { VectorLike } from './VectorLike';

import { isFiniteNumber } from '@rnacanvas/value-check';

/**
 * A two-dimensional vector.
 */
export class Vector {
  static matching(v: VectorLike): Vector {
    let x = 'x' in v ? (
      v.x
    ) : (
      v.magnitude * Math.cos(v.direction)
    );

    let y = 'y' in v ? (
      v.y
    ) : (
      v.magnitude * Math.sin(v.direction)
    );

    return new Vector(x, y);
  }

  constructor(public x: number, public y: number) {}

  [Symbol.iterator]() {
    return [this.x, this.y].values();
  }

  get magnitude(): number {
    return Math.sqrt(this.x**2 + this.y**2);
  }

  set magnitude(magnitude) {
    let direction = this.direction;

    this.x = magnitude * Math.cos(direction);
    this.y = magnitude * Math.sin(direction);
  }

  /**
   * The angle that is the direction of the vector
   * in the standard Cartesian coordinate system.
   */
  get direction(): number {
    return Math.atan2(this.y, this.x);
  }

  set direction(direction) {
    let magnitude = this.magnitude;

    this.x = magnitude * Math.cos(direction);
    this.y = magnitude * Math.sin(direction);
  }

  /**
   * Returns `true` if the X and Y components and magnitude / direction of this vector are all finite numbers.
   *
   * Returns `false` otherwise.
   */
  isFinite(): boolean {
    return isFiniteNumber(this.x) && isFiniteNumber(this.y);
  }
}
