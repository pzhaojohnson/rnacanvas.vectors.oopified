# Installation

With `npm`:

```
npm install @rnacanvas/vectors.oopified
```

# Usage

All exports of this package can be accessed as naked imports.

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
```

### `magnitude`

The magnitude of the vector.

```javascript
var vector = new Vector(5, 12);

vector.magnitude; // 13
```
