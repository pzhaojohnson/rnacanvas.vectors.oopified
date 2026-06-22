# Installation

With `npm`:

```
npm install @rnacanvas/vectors.oopified
```

# Usage

All exports of this package can be accessed as named imports.

```javascript
// an example import
import { Vector } from '@rnacanvas/vectors.oopified';
```

## `Vector`

The `Vector` class represents a two-dimensional vector.

```javascript
var vector = new Vector(56.1, -88.2);

vector.x; // 56.1
vector.y; // -88.2

// vectors are mutable
vector.x = -101.4;
vector.y = 18.9;

// vectors are iterable
[...vector]; // [-101.4, 18.9]
```

### `magnitude`

The magnitude of the vector.

```javascript
var vector = new Vector(5, 12);

vector.magnitude; // 13
```

### `direction`

The angle (in radians) that is the direction of the vector
in the standard Cartesian coordinate system.

```javascript
var vector = new Vector(100, 0);
vector.direction; // 0

vector.y = 100;
vector.direction; // Math.PI / 4

vector.x = 0;
vector.direction; // Math.PI / 2

vector.x = -100;
vector.y = -100;
vector.direction; // -3 * Math.PI / 4
```

### `isFinite()`

Returns `true` if the X and Y components and magnitude / direction of a vector are all finite numbers.

Returns `false` otherwise.

```javascript
var vector = new Vector(10, 20);
vector.isFinite(); // true

// nonfinite X component
var vector = new Vector(NaN, 20);
vector.isFinite(); // false

// nonfinite Y component
var vector = new Vector(10, Infinity);
vector.isFinite(); // false
```

### `static matching()`

Creates a new vector instance with the same X and Y components
(and magnitude and direction)
as the input vector-like object.

(See type definition below for `VectorLike` objects.)

```javascript
var vector = Vector.matching({ x: 57, y: 36 });

vector.x; // 57
vector.y; // 36

vector = Vector.matching({ magitude: 2, direction: Math.PI / 3 });

vector.x; // 1
vector.y; // 3**0.5
```

## `type VectorLike`

For objects that are similar to vectors.

```typescript
type VectorLike = (
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
```

## `function isVectorLike()`

Returns `true` if a value is a `VectorLike` object.

Returns `false` otherwise.

```javascript
isVectorLike({ x: 10, y: 20 }); // true

// missing X or Y components
isVectorLike({ x: 10 }); // false
isVectorLike({ y: 20 }); // false

isVectorLike({ magnitude: 100, direction: Math.PI / 3 }); // true

// magnitude or direction are the wrong type
isVectorLike({ magnitude: 100, direction: 'Math.PI / 3' }); // false
isVectorLike({ magnitude: null, direction: Math.PI / 3 }); // false

// this is technically allowed as well
isVectorLike({ x: 10, y: 20, magnitude: 100, direction: Math.PI / 3 }); // true

// some random values
isVectorLike('asdf'); // false
isVectorLike(true); // false
isVectorLike(null); // false
isVectorLike(undefined); // false
```
