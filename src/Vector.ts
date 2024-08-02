/**
 * A two-dimensional vector.
 */
export class Vector {
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
