/**
 * A two-dimensional vector.
 */
export class Vector {
  constructor(public x: number, public y: number) {}

  get magnitude(): number {
    return Math.sqrt(this.x**2 + this.y**2);
  }
}
