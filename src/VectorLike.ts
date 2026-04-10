export type VectorLike = (
  {
    readonly x: number;
    readonly y: number;
  }
| {
    readonly magnitude: number;

    /**
     * In radians.
     */
    readonly direction: number;
  }
);
