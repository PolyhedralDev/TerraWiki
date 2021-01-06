`pack.yml` is a required file located in the root of all Terra config packs. It defines universal pack options like biome
blending, biome selection, and erosion.

## Configuration

### id
The ID of the config pack. This should be unique (not something generic like "overworld,"
since users may wish to install multiple config packs).  
World configs use this ID to identify which config pack is to be used in the world.

### grids
A list of BiomeGrid IDs, which makes up the third dimension "zone" axis of biome selection. Generally, this section is
the lowest-frequency biome axis, and is used to differentiate between very different BiomeGrids, such as ocean, land,
and mountain biomes.

### frequencies
The frequencies to use for BiomeZone selection
* `zone` - defines the frequency of Zone selection, described above.  
Note that the values here are actually the *inverses* of the actual frequencies, meaning, higher values correspond to
more spread-out biomes. (a value of 1000 will become 0.001 internally)

### blend
Biome blending options. These options configure whether to, and how much to blend biomes together at intersections.  
All of these are optional. If they are not included, the generator will not attempt to blend biomes (equivalent to
`blend.enable` = `false`).
* `enable` - Whether to blend biomes at all.
* `frequency` - The frequency of the noise used to blend biomes. Higher values produce "messier" blends, with values 0.5
and above generally producing "random" scattered blending. Unlike the Biome choosing frequencies, this value corresponds
to the actual frequency used internally.
* `amplitude` - The amplitude of blending. This basically defines "how much" biomes should be blended. (for example, a 
value of 16 will create an approximately 16-block wide blended zone between biomes)  

### erode
Options for erosion. Erosion inserts a custom BiomeGrid at locations where the square of the erosion noise
function is greater than the erosion threshold. (It is most commonly used to create rivers).  
All of these are optional. If they are not included, the generator will not attempt to generate erosion (equivalent to
`erode.enable` = `false`).
* `enable` - Whether to enable erosion
* `frequency` - Erosion noise frequency. Higher values "zoom out" the erosion, producing smaller, more tightly-packed
eroded biomes. Unlike the Biome choosing frequencies, this value corresponds to the actual frequency used internally.
* `threshold` - When the erosion noise function produces a value which, when squared, is *less than* this threshold, the
location will be eroded.
* `octaves` - The number of noise octaves to use for erosion. Higher values produce "squigglier" erosion.
* `grid` - The BiomeGrid to pull biomes from when a location is to be eroded.

### noise
This configuration section contains options for the noise functions to use in world generation. Each entry defines a
custom noise function that may be invoked inside noise equations.

* `dimensions` - The number of dimensions for this noise function. Should be either 2 (takes 2 arguments) or 3 (takes 3
arguments). Defaults to 3.
* `type` - The type of noise to use. Currently, supported values are `OpenSimplex2`, `OpenSimplex2S`, `Perlin`,
`Cellular`, `Value` and `ValueCubic`. Defaults to `OpenSimplex2`.
* `frequency` - The frequency of this noise function. Higher values "zoom in", lower values "zoom out". Defaults to
`0.02`.
* `offset` - The amount by which to offset this noise function from the world seed. Offsetting a noise function makes
it generate completely different results than others with identical parameters (because it changes the seed). Defaults
to 0.
* `fractal` - Options for fractal noise. Fractal noise "stacks" multiple noise functions of different frequencies, to
make noisier noise.
    * `type` - The fractal algorithm to use. Supported values are `FBm` (Brownian Motion), `None` (No Fractal),
    `Ridged`, `PingPong`, `DomainWarpIndependent`, and `DomainWarpProgressive`. Defaults to `FBm`.
    * `octaves` - The number of fractal octaves to use. Defaults to 1.
    * `gain` - The gain (multiplier for the magnitude of each octave) Defaults to 0.5.
    * `lacunarity` - The fractal lacunarity. Defaults to 2.0.
    * `ping-pong` - The ping-pong weight. Only applies if using the `PingPong` fractal type. Defaults to 2.0.
    * `weighted-strength` - Sets the weighting of fractal octaves, for non-DomainWarp fractal types.
* `cellular` - Options for the Cellular noise variant.
    * `distance` - The distance function to use for cells. Supported values are `Euclidean`, `Manhattan`,
    `EuclideanSq`, and `Hybrid`. Defaults to `EuclideanSq`.
    * `return` - The return type when calculating noise. Supported values are `CellValue`, `Distance`, `Distance2`,
    `Distance2Add`, `Distance2Sub`, `Distance2Mul`, and `Distance2Div`. Defaults to `Distance`.

<details>
<summary>Example Noise Configuration</summary>

An example noise configuration that defines the `noise2` and `noise3` functions you know and love.
```yaml
noise:
  noise2:
    dimensions: 2
    type: OpenSimplex2
    frequency: 0.0075
    fractal:
      type: FBm
      octaves: 5
  noise3:
    dimensions: 3
    type: OpenSimplex2
    frequency: 0.0075
    fractal:
      type: FBm
      octaves: 5
```

</details>

## variables
A list of variables that may be used in noise equations within this config.
```yaml
variables:
  var: 2
```
The above config would define a variable called `var` with a value of 2. It may be used in any noise or elevation
equations.

### image
Options to pull Biome selections from an image.   
All of these are optional. If they are not included, the generator will not use an image for terrain. (equivalent to
`image.enable` = `false`).
* `enable` - Whether to pull Biome selections from an image.
* `align` - The alignment of the image. Valid values are `CENTER` and `NONE`.
    * `CENTER` - Center the image, so world coordinates (0, 0) are at the center of the image.
    * `NONE` - Do not re-align the image, so world coordinates (0, 0) are at image coordinates (0, 0).
* `file` - The image file location on the drive. **Must be a locally stored image, not an online one!**
* `channels` - What color channels will be used for what Biome selection axis. The values `red`, `green`, and `blue`
are all used once, and only once.
    * `biome-x` - What color channel to use for BiomeGrid X selection (image exports as `red`)
    * `biome-z` - What color channel to use for BiomeGrid Z selection (image exports as `green`)
    * `zone` - What color channel to use for Biome Zone selection (image exports as `blue`)  

***

## Examples
<details>
<summary>Example Configuration</summary>

An example config with 3 grids, `OCEAN`, `LAND`, and `MOUNTAIN`, and with biome blending and erosion enabled.
the generator ID is `OVERWORLD_DEMO`.
```yaml
id: OVERWORLD_DEMO
grids:
  - OCEAN
  - LAND
  - MOUNTAIN
frequencies:
  zone: 2048
blend:
  enable: true
  frequency: 0.1
  amplitude: 4
erode:
  enable: true
  frequency: 0.001
  threshold: 0.0015
  octaves: 5
  grid: "BIOME:RIVER"
noise:
  noise2:
    dimensions: 2
    type: OpenSimplex2
    frequency: 0.0075
    fractal:
      type: FBm
      octaves: 5
  noise3:
    dimensions: 3
    type: OpenSimplex2
    frequency: 0.0075
    fractal:
      type: FBm
      octaves: 5
locatable:
  STRONGHOLD: STRONGHOLD
variables:
  base: 63
```

</details>

<details>
<summary>Example Image Configuration</summary>

An example world config. This world has been assigned an image to pull biome selections from, located at
`/home/user/image/image.png`.
```yaml
image:
  enable: true
  align: CENTER
  file: "/home/user/image/image.png"
  channels:
    biome-x: RED
    biome-z: GREEN
    zone: BLUE
```

</details>