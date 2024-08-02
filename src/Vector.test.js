import { Vector } from './Vector';

describe('Vector class', () => {
  test('`matching()` static method', () => {
    let vector = Vector.matching({ x: 28.7, y: -101.25 });

    expect(vector.x).toBe(28.7);
    expect(vector.y).toBe(-101.25);
  });

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

  test('iterability', () => {
    let vector = new Vector(39.2, -17.88);

    expect([...vector]).toStrictEqual([39.2, -17.88]);
  });

  test('`magnitude` getter', () => {
    let vector = new Vector(26, -59);

    expect(vector.magnitude).toBeCloseTo(64.47480127925948);
  });

  test('`direction` getter', () => {
    let vector = new Vector(100, 0);
    expect(vector.direction).toBeCloseTo(0);

    vector.y = 100;
    expect(vector.direction).toBeCloseTo(Math.PI / 4);

    vector.x = 0;
    expect(vector.direction).toBeCloseTo(Math.PI / 2);

    vector.x = -74;
    vector.y = -128;
    expect(vector.direction).toBeCloseTo(-2.09497595557781);
  });
});
