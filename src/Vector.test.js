import { Vector } from './Vector';

describe('Vector class', () => {
  test('`x` property', () => {
    let vector = new Vector(28.4, 99.3);
    expect(vector.x).toBe(28.4);

    vector.x = -21.7;
    expect(vector.x).toBe(-21.7);
  });

  test('`y` property', () => {
    let vector = new Vector(28.4, 99.3);
    expect(vector.y).toBe(99.3);

    vector.y = 8.2;
    expect(vector.y).toBe(8.2);
  });

  test('`magnitude` getter', () => {
    let vector = new Vector(26, -59);

    expect(vector.magnitude).toBeCloseTo(64.47480127925948);
  });
});
