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

### `static matching()`

Create a new vector instance matching a vector-like object
(e.g., an object with `x` and `y` properties).

```javascript
var vector = Vector.matching({ x: 57, y: 36 });

vector.x; // 57
vector.y; // 36
```
