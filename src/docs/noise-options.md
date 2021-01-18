# Noise Options

Wherever you see a "noise options" section in your config, you can define a noise function there, using the following
values:

## `type`

The type of noise algorithm to use. Included noise algorithms:

- Simplex - `OpenSimplex2` or `OpenSimplex2S` - Gradient noise (`2S` is the Smooth variant of OpenSimplex).
- White Noise - `WhiteNoise` - Entirely random deterministic noise.
- Perlin - `Perlin` - Another gradient noise, similar to Simplex but with more diagonal artifacts.
- Cellular - `Cellular` - Cellular/Voronoi noise.
- Value - `Value` or `ValueCubic` - Gradient noise. `Value` is linearly interpolated, `ValueCubic` is cubically
  interpolated.

## `salt`

A value to add to the seed of the noise function. Noise functions are seeded with the world seed, adding a salt
allows multiple otherwise identical noise functions to produce unique results in the same world.

Default: `0`

## `frequency`

The frequency of the noise function. Higher values = higher frequencies = quicker changes in noise values. Frequency
has no effect on white noise (other than effectively being a second salt).

Default: `0.02`

## `dimensions`

Number of dimensions of this noise function. Must be either 2 or 3.

Default: `2`

## `fractal`

These options control noise fractal settings. Fractal noise essentially stacks multiple noise functions of different
frequencies on top of each other.

#### `type`

Fractal algorithm to use. Included fractal algorithms:

- `None` - No fractals
- `FBm` - Fractal Brownian Motion. This is the most common fractal algorithm you will be using, it simply stacks each
  noise function on its fractals.
- `Ridged` - Ridged fractals.
- `PingPong` - Generates striped patterns based on number of octaves.

Default: `None`

#### `octaves`

`fractal.octaves` defines the number of fractal octaves to generate. A fractal octave is a single noise function.
For example, 5 octaves would equal 5 noise functions stacked on top of each other.

Default: `1`

#### `gain`

`fractal.gain` controls the fractal gain. The gain sets the amplitude multiplier of each subsequent noise function.
For example, the default gain of `0.5` would cause an input noise function to have noise added with half the amplitude, then one
quarter, then one eighth, etc.

Defualt: `0.5`

#### `lacunarity`

`fractal.lacunarity` controls the fractal lacunarity. The lacunarity sets the frequency multiplier of each subsequent
noise function. For example, the default lacunarity of `2.0` would cause the first octave to have the base frequency,
the second to have 2 times the frequency, the third to have 4 times, etc.

Default: `2.0`

#### `ping-pong`

`fractal.ping-pong` sets the strength of the "ping-pong" algorithm. Higher numbers will produce more defined stripes.

Default: `2.0`

#### `weighted-strength`

`fractal.weighted-strength` sets the weight of each octave. Higher values will cause octaves to produce higher weights
at higher values. Note that values outside of `[0, 1]` will not maintain `[-1, 1]` output.

Default: `0`

## `cellular`

Options for the `Cellular` noise variant.

#### `distance`

`cellular.distance` sets the distance function to use for calculating the cell border. Supported distance functions:

- `Euclidean` - [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance).
- `EuclideanSq` - Calculate distance based on the square of Euclidean distances. This is faster than `Euclidean` (as it
  does not require a square root operation) and produces effectively the same result.
- `Manhattan` - Manhattan ([Taxicab](https://en.wikipedia.org/wiki/Taxicab_geometry)) distance.
- `Hybrid` - Average of EuclideanSq and Manhattan distances.

Default: `EuclideanSq`

#### `return`

`cellular.return` sets the return type of the cellular noise function Supported return types:

- `CellValue` - Returns the value of the cell itself.
- `Distance` - Returns the distance to the nearest point.
- `NoiseLookup` - Return the value of the cell's center point when passed into the `lookup` function.

Default: `Distance`

#### `lookup`

`cellular.lookup` defines another noise function to use in the `NoiseLookup` return type.

Default: OpenSimplex2 function with no fractal, and 0.02 frequency.

## `normalize`

Options to normalize (redistribute) noise. Most applications of noise within Terra assume a range of `[-1, 1]`. If your
noise function does not have that range, you will want to normalize it.

#### `type`

`normalize.type` defines the type of normalization to perform. Normalization types are:

- `None` - No normalization.
- `Linear` - Linear redistribution.

Default: `None`

#### `linear.min`

`normalize.linear.max` defines the minimum value of the _input_ noise. It will be redistributed to have a minimum of -1.

#### `linear.max`

`normalize.linear.max` defines the maximum value of the _input_ noise. It will be redistributed to have a maximum of 1.

For linear normalization, if a function output in the range `[0, 1]`, a configuration to normalize to `[-1, 1]` would
look like this:

```yaml
normal:
  min: 0
  max: 1
```
