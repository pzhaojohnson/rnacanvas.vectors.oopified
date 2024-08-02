type VectorLike = {
  x: number;
  y: number;
};

/**
 * A two-dimensional vector.
 */
export class Vector {
  static matching(vectorLike: VectorLike): Vector {
    return new Vector(vectorLike.x, vectorLike.y);
  }

  constructor(public x: number, public y: number) {}

  get magnitude(): number {
    return Math.sqrt(this.x**2 + this.y**2);
  }

  /**
   * The angle that is the direction of the vector
   * in the standard Cartesian coordinate system.
   */
  get direction(): number {
    return Math.atan2(this.y, this.x);
  }
}
