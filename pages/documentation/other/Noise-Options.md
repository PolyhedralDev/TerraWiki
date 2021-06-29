Wherever you see a "noise options" section in your config, you can define a noise sampler there, using the following
values:

# Noise Options

## `type`
The type of sampler to use. Included samplers:
* Linear - Linear normalizer.
* Normal - Normal (normal -> continuous) normalizer.
* Clamp - Clamp normalizer.
* Expression - Paralithic expression noise function  
* Image - Pull noise from an image.
* DomainWarp - Domain-warp a function with another function.
* FBM - Fractal Brownian Motion.
* PingPong - Ping Pong fractal type.
* Ridged - Ridged fractal type.
* OpenSimplex2 - OpenSimplex2 noise, regular variant.
* OpenSimplex2S - OpenSimplex2 noise, smooth variant.
* Perlin - Perlin noise.
* Value - Gradient noise.
* ValueCubic - Cubically interpolated gradient noise.
* Cellular - Cellular (Voronoi/Worley) noise.
* WhiteNoise - White (random) noise.
* Gaussian - Gaussian (normally distributed random) noise.
* Constant - Constant value.
* Kernel - Apply a kernel to an input function.

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

# Fractal Noise Types
The following options are supported by all fractal noise types:
* FBM
* PingPong
* Ridged

## `octaves`
Defines the number of fractal octaves to generate. A fractal octave is a single noise function.
For example, 5 octaves would create 5 noise functions stacked on top of each other.

Default: `3`

## `function`
Function to apply fractal to.

## `gain`
Controls the fractal gain. The gain sets the amplitude multiplier of each subsequent noise function.
For example, the default gain of `0.5` would cause an input noise function to have noise added with half the amplitude, then one
quarter, then one eighth, etc.

Default: `0.5`

## `lacunarity`
Controls the fractal lacunarity. The lacunarity sets the frequency multiplier of each subsequent
noise function. For example, the default lacunarity of `2.0` would cause the first octave to have the base frequency,
the second to have 2 times the frequency, the third to have 4 times, etc.

Default: `2.0`

## `ping-pong`
Sets the strength of the "ping-pong" algorithm. Higher numbers will produce more defined stripes.

Default: `2.0`

## `weighted-strength`
Sets the weight of each octave. Higher values will cause octaves to produce higher weights
at higher values. Note that values outside of `[0, 1]` will not maintain `[-1, 1]` output.

# Cellular Noise
Options for the `Cellular` noise variant.

#### `distance`
`distance` sets the distance function to use for calculating the cell border. Supported distance functions:
* `Euclidean` - [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance).
* `EuclideanSq` - Calculate distance based on the square of Euclidean distances. This is faster than `Euclidean` (as it
    does not require a square root operation) and produces effectively the same result.
* `Manhattan` - Manhattan ([Taxicab](https://en.wikipedia.org/wiki/Taxicab_geometry)) distance.
* `Hybrid` - Average of EuclideanSq and Manhattan distances.

Default: `EuclideanSq`

#### `return`
`return` sets the return type of the cellular noise function Supported return types:
* `CellValue` - Returns the value of the cell itself.
* `Distance` - Returns the distance to the nearest point.
* `Distance2` - Returns the distance to the second nearest point.
* `Distance3` - Returns the distance to the third nearest point.  
* `Distance2Add` - D1 + D2
* `Distance2Sub` - D1 - D2
* `Distance2Mul` - D1 * D2
* `Distance2Div` - D1 / D2
* `Distance3Add` - D1 + D3
* `Distance3Sub` - D1 - D3
* `Distance3Mul` - D1 * D3
* `Distance3Div` - D1 / D3  
* `NoiseLookup` - Return the value of the cell's center point when passed into the `lookup` function.


Default: `Distance`

#### `lookup`
`lookup` defines another noise function to use in the `NoiseLookup` return type.

Default: OpenSimplex2 function with no fractal, and 0.02 frequency.

# Normalizer Options
Options supported by all normalizer types:
* Linear
* Normal
* Clamp

## `function`
Function to normalize.


# Linear Options
Linear redistribution redistributes the input from `[min, max]` to `[-1, 1]`.
## `min`
Minimum input value

## `max`
Maximum input value

# Normal Options
Normal redistribution redistributes the input from a normal distribution with mean `mean` and standard deviation
`standard-deviation` to a continuous distribution with range `[-1, 1]`.
## `mean`
The mean of the input function.

## `standard-deviation`
The standard deviation of the input function.

# Clamp Options
The clamp normalizer clamps an arbitrarily ranged input function to a maximum/minimum value. Any value above the maximum
will return the maximum, and any value below the minimum will return the minimum.
## `min`
Minimum value

## `max`
Maximum value

# DomainWarp Options

## `function`
The source function. This function will be used to retrieve noise values.
## `warp`
Function to use for domain warping. The result of this function will be added to the X, Y, and Z inputs of the
`function` parameter.
## `amplitude`
The amplitude of the domain warp. This value is the maximum an input point may be translated (provided that the warp
function is bounded from `[-1, 1]`)

# Image Options

## `image`
The path of the image to use, relative to the config root.

## `channel`
The channel to get values from. Valid channels are:
* `RED` - Red channel of the image
* `GREEN` - Green channel of the image
* `BLUE` - Blue channel of the image
* `ALPHA` - Alpha channel of the image
* `GRAYSCALE` - Average of RED GREEN and BLUE channels.

## `frequency`
The input coordinates are multiplied by this value, allowing for image scaling.

# Kernel Options

## `kernel`
A 2D array representing the kernel to apply to the input function.   
[Examples of common kernels](https://en.wikipedia.org/wiki/Kernel_(image_processing)#Details).

## `factor`
Factor to multiply all kernel values by. Useful for keeping kernels readable. Defaults to 1.

## `function`
Noise function to apply the kernel to.

# Expression Options

## `equation`
The equation to use for this noise function. The variables `x`, `y`, and `z`, along with
any defined in the `variables` key, are registered, along with the noise functions defined in
the `functions` key.

## `functions`
A map of noise functions. These functions are registered for use in the equation.

## `variables`
A map of variables. These variables are registered for use in the equation.