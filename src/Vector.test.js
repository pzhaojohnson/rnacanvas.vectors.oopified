import { Vector } from './Vector';

describe('Vector class', () => {
  test('`matching()` static method', () => {
    var vector = Vector.matching({ x: 28.7, y: -101.25 });

    expect(vector.magnitude).toBeCloseTo((28.7**2 + (-101.25)**2)**0.5);
    expect(vector.direction).toBeCloseTo(Math.atan2(-101.25, 28.7));

    var vector = Vector.matching({ magnitude: 54, direction: -2 * Math.PI / 1.5 });

    expect(vector.x).toBeCloseTo(54 * Math.cos(-2 * Math.PI / 1.5));
    expect(vector.y).toBeCloseTo(54 * Math.sin(-2 * Math.PI / 1.5));
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

  test('`set magnitude()`', () => {
    let vector = new Vector(29, -15);

    vector.magnitude = 120;
    expect(vector.magnitude).toBeCloseTo(120);

    expect(vector.direction).toBeCloseTo(-0.4773453823736719);

    expect(vector.x).toBeCloseTo(120 * Math.cos(-0.4773453823736719));
    expect(vector.y).toBeCloseTo(120 * Math.sin(-0.4773453823736719));
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

  test('`set direction()`', () => {
    let vector = new Vector(57, 88);

    vector.direction = (-1.2) * Math.PI;
    expect(vector.direction - ((-1.2) * Math.PI) % (2 * Math.PI)).toBeCloseTo(2 * Math.PI);

    expect(vector.magnitude).toBeCloseTo((57**2 + 88**2)**0.5);

    expect(vector.x).toBeCloseTo((57**2 + 88**2)**0.5 * Math.cos((-1.2) * Math.PI));
    expect(vector.y).toBeCloseTo((57**2 + 88**2)**0.5 * Math.sin((-1.2) * Math.PI));
  });

  test('`isFinite()`', () => {
    var vector = new Vector(10, 20);
    expect(vector.isFinite()).toBe(true);

    // nonfinite X component
    var vector = new Vector(NaN, 20);
    expect(vector.isFinite()).toBe(false);

    // nonfinite Y component
    var vector = new Vector(10, Infinity);
    expect(vector.isFinite()).toBe(false);
  });
});
