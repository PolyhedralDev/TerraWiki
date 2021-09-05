
[//]: # (pack.yml)
[//]: # (pack configuration)

`pack.yml` is a required file located in the root of all Terra config packs. It defines universal pack options like biome
blending, biome selection, and erosion.

# Configuration

## id
The ID of the config pack. This should be unique (not something generic like "overworld,"
since users may wish to install multiple config packs).  

## author
Put your name here! The author option allows you to take credit for the cool things you make with Terra. It is displayed
on config load.

## version
The version of your config pack.

## biomes
Options for biome distribution.

### `type`
Biome Provider type. Provider types are:
* `SINGLE` - Single-biome provider. Useful for biome debugging.
* `IMAGE` - Image provider, for pulling biome selections from an image.
* `PIPELINE` - [Biome Pipeline](./Biome-Pipeline) distribution system.

### SINGLE Options
### `biome`
Biome to use in single-biome provider.

### IMAGE Options
When using this provider, the biome with the `color` attribute closest to an image pixel will be chosen.
### `image.name`
Name of the image to use for biome selections.

### PIPELINE Options
See the [Biome Pipeline](./Biome-Pipeline) page.

## noise
This configuration section contains options for the noise functions to use in world generation. Each entry defines a
custom noise function that may be invoked inside noise equations.

Each entry is a key-value pair, where the key is the identifier to use for the noise function, and the value is
a [Noise Configuration](./Noise-Options).

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
Variables that may be used in noise equations within this config.
```yaml
variables:
  var: 2
```
The above config would define a variable called `var` with a value of 2. It may be used in any noise or elevation
equations.

## functions
Functions that may be used in noise equations. Useful for reducing boilerplate. Example:
```yaml
functions:
  fourMax:
    arguments: # Four arguments, a b c and d
      - a
      - b
      - c
      - d
    function: "max(max(max(a, b), c), d)"
```
