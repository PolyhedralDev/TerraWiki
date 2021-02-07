The Biome Pipeline is a powerful tool that allows for customization of the distribution of biomes in the world.

## Pipeline Options

## `initial-size`
The initial size of biome chunks. This value must be at least 2. **This is not the final size of biome chunks. Final
chunks will be *much* larger**.     

It is recommended to keep biome chunks' **final size** in the range of
`[50, 300]` to prevent performance issues. To calculate the size of biome chunks, simply take `initial-size` and for
each `expand` stage, multiply the running value by 2 and subtract 1. (The size is also printed to the server
console if you have debug mode enabled)

## `source`
The Biome Source to use to provide base biomes for the pipeline to work with. Generally this provides very few biomes,
used to define the largest stage of the world. In overworld configs, for example, the biome source is generally used to
define land/ocean layout.

## Source Options

### `type`
The type of biome source to use. Available source types:
* `NOISE` - Use a noise function to distribute source biomes.

### `biomes`
A [Weighted Pool](./Weighted-Pools) of biomes to use for selection.

### `noise`
The [noise configuration](./Noise-Options) to use for selection.   

<br>

(End source options)
## `stages`
List of stages. The source biomes are passed through these stages sequentially, and each stage applies an operation to
the biomes.

## Stage Options
Stages are defined by a key specifying stage type, with a value containing stage options.
Stage types:
* `expand` - Expand the biome selection. Expander stages are helpful to get rid of noise artifacts.
* `mutate` - Mutate the biome selection. Mutators allow you to manipulate the biome selection by replacing biomes,
adding borders, and more.

All stages have the following options:
## `noise`
The noise function to be used for the stage. Different stages use noise functions in different ways, which will be
explained below.

## Expander Stage Options

## `type`
Type of expander to use. Expander types:
* `FRACTAL` - Fractal expander using cellular automaton. In this expander type, the noise function defines which biome
to choose if a priority tie occurs. Generally, white noise is used here.

## Mutator Stage Options


## `type`
Type of mutator to apply. Mutator types:
* `REPLACE` - Replace a tag with a weighted pool of biomes. The stage noise function is used for selections from the
pool.
* `REPLACE_LIST` - Replace a list of biomes with per-biome weighted pool, with a default tag/replace list. This is a
boilerplate-reducing option for when many biomes are being replaced with specific replacements. The stage noise function
is used for selections from the pools.
* `BORDER` - Replace a biome whenever it borders another biome from a weighted pool. The stage noise function is used
for selections from the pool.
* `BORDER_LIST` - Another boilerplate-reducing mutator, similar to `REPLACE_LIST`. The stage noise function is used for
selections from the pools.
* `SMOOTH` - Smooth rough edges left by `expand` stages. The stage noise function is used to choose biomes in the case
of a priority tie.

## REPLACE Options
### `from`
Biomes with this tag will be replaced.

### `to`
[Weighted Pool](./Weighted-Pools) of biomes to use as replacements.


## REPLACE_LIST Options
### `to`
Map of Biome ID to [Weighted Pool](./Weighted-Pools). Biomes here will be specially replaced with selections from their
weighted pools.

### `default-from`
Biomes with this tag will be replaced by the default pool, provided that no `to` biomes match.

### `default-to`
[Weighted Pool](./Weighted-Pools) of biomes to use as replacements for biomes matching `default-from`.

## BORDER Options
### `from`
Tag to trigger border replacement.

### `replace` 
Biomes with this tag will be replaced, if they are bordering a biome tagged with `from`.

### `to`
[Weighted Pool](./Weighted-Pools) of biomes to use as replacements.

## BORDER_LIST Options
### `from`
Tag to trigger border replacement.

### `replace`
Map of Biome ID to [Weighted Pool](./Weighted-Pools). Biomes here will be specially replaced with selections from their
weighted pools.

### `default-replace`
Biomes with this tag will be replaced by the default pool, provided that no `to` biomes match.

### `default-to`
[Weighted Pool](./Weighted-Pools) of biomes to use as replacements for biomes matching `default-from`.

A commented pipeline is available in the [Default Config's](https://github.com/PolyhedralDev/TerraDefaultConfig)
`pack.yml`.