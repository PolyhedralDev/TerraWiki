This page discusses the configuration of Biomes.

Biome configurations are in the `biomes/` directory within a config pack.  

# Object Options
Biomes support all Terra [Object Options](./Objects).

# Main options

## tags
A list of tags to be used in Biome Pipeline selection. Tags may be any string, and a biome may have any number
of tags.

## color
An integer representation of a color to be used in image selection. Example: `0xffffff` = white.

## noise-equation
Noise equation to generate terrain with. Positive values produce solid terrain, negative values produce negative
terrain. Variables and functions:
* `x` - Current x-coordinate
* `y` - Current y-coordinate
* `z` - Current z-coordinate
* All [defined noise functions](./pack.yml-Options#noise) can be accessed via their ID.
* Terra includes most standard mathematical functions (trig functions, `max(a, b)`, `min(a, b)`, `floor(x)`, `ceil(x)`,
`round(x)`, etc.) If you want another function implemented, submit a PR to
[Paralithic](https://github.com/PolyhedralDev/Paralithic) (our expression evaluator), or create an issue requesting it.    

More info about setting up equations [here](./My-First-Noise-Equation).   
This value must be included, and can be abstracted.

## vanilla
The ID of the Vanilla biome to use for this custom biome. A list of IDs can be found
[here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).

# Subsections

## structures
A list of [structure config](./Structure-Configuration) IDs that can generate in this biome.   
This value is optional (defaults to an empty list) and can be abstracted.

## palette
A list of Palettes to use in the biome. Each list entry contains a single key-value pair, with the key being the
palette ID, and the value being the Y-level at which the palette *starts* to generate.   

A shortcut exists for palettes that only contain a single block. Instead of creating a palette file for a
single-block palette, you may simply include `BLOCK:minecraft:block_id` as a palette ID in this list.    
This value must be included, and can be abstracted.

<details>
<summary>Example Palette Configuration</summary>

```yaml
palette:
  - "BLOCK:minecraft:bedrock": 0
  - GRASSY: 255
```

This palette configuration generates the `GRASSY` palette at Y level 255 and down, until it reaches Y=0, where
a single-block palette containing just Bedrock will be generated.
</details>

## flora
A list of Flora layers to generate in this biome. Terra generates these layers one by one, meaning you can stack multiple
layers on top of each other.

Various options that define the Flora to generate in this biome.    
This value must be included, and can be abstracted.   
### Layer Options:
* `density` - The chance (per 100) each block will attempt to generate Flora. This value may be a decimal.
* `distribution` - [Noise Configuration](./Noise-Options) defining flora placement. Defaults to 2D white noise.
    If this value is zero, or if it is not included, a random distribution will be used instead.
* `items` - Contains a weighted pool of Flora items to generate in this layer. Key = flora ID, value = weight.
    IDs may be from [pre-included](./Included-Flora) flora, or [custom](./Flora-Configuration) flora.
* `y` - Height restrictions for this Flora object. 
    * `min` - The minimum height at which this Flora object can generate.
    * `max` - The maximum height at which this Flora object can generate.    

You may include as many layers as you want in your biomes, they will generate sequentially.


<details>
<summary>Example Flora Configuration</summary>

```yaml
flora:
  - density: 100
    simplex-frequency: 0.1
    items:
      - BLANK: 7
      - LEAVES: 3
    y:
      min: 62
      max: 180
  - density: 50
    items:
      - TALL_GRASS: 3
      - GRASS: 7
      - SMALL_ROCK: 1
    y:
      min: 62
      max: 180
```

This example config generates 2 layers of flora, one with a simplex distribution of `LEAVES` and `BLANK`, the other 
with a random distribution of `TALL_GRASS`, `GRASS`, and `SMALL_ROCK`.
</details>

## trees
A list of tree layers to include in this biome.

### Layer Options
* `density` - The chance (per 100) every fourth block will attempt to generate a Tree. This value may be a decimal.    
    (Since this value is every *fourth* block, it can be thought of as out of 400).
* `distribution` - [Noise Configuration](./Noise-Options) defining tree placement. Defaults to 2D white noise.
* `items` - Contains a weighted pool of Tree items to generate in this layer. Key = tree ID, value = weight.
    IDs may be from [pre-included](./Terra-Tree-Types) flora, or [custom](./Tree-Configuration) flora.
* `y` - Height restrictions for this Tree object. 
    * `min` - The minimum height at which this Tree object can generate.
    * `max` - The maximum height at which this Tree object can generate.    


<details>
<summary>Example Tree Configuration</summary>

```yaml
  - density: 10
    items:
      - OAK: 1
    y:
      min: 58
      max: 84
```

A standard Tree configuration, potentially useful for a forest. It generates `OAK` trees. All Tree items have the
same height restrictions; they can only generate from Y levels 58 to 84.    

</details>

## carving
Options for Carvers in this biome.
This option contains key-value pairs.   
The key is a [Carver](./Carver-Configuration) ID, and the value is tha *chance per chunk* that carver will spawn in a
chunk. **Carvers aren't stored in a weighted pool**, Each carver uses an independent calculation, therefore multiple
carvers may spawn in the same chunk!

<details>
<summary>Example Carver Configuration</summary>

```yaml
carving:
  CAVE: 30
  RAVINE: 5
  CAVERN: 5
```
This configuration defined 3 Carvers in this biome:
* `CAVE` with a 30% chance of spawning per chunk.
* `RAVINE` with a 5% chance of spawning per chunk.
* `CAVERN` with a 5% chance of spawning per chunk.

</details>

## ores
A set of entries that each define an [Ore](./Ore-Configuration) object to generate, how much of it to generate, and the maximum and minimum
Y-levels at which veins may generate.   
Options:
* `ORE_ID` - The ID of the Ore object to generate.
    * `min` - The minimum number of veins to generate per chunk.
    * `max` - The maximum number of veins to generate per chunk.
    * `min-y` - The minimum Y-level at which veins may begin.
    * `max-y` - The maximum Y-level at which veins may begin.
<details>
<summary>Example Ore Configuration</summary>

```yaml
ores:
  DIRT:
    min: 0
    max: 1
    min-height: 0
    max-height: 84
  GRAVEL:
    min: 0
    max: 1
    min-height: 0
    max-height: 84
  DIORITE:
    min: 0
    max: 1
    min-height: 0
    max-height: 84
  ANDESITE:
    min: 0
    max: 1
    min-height: 0
    max-height: 84
  GRANITE:
    min: 0
    max: 1
    min-height: 0
    max-height: 84
  COAL_ORE:
    min: 4
    max: 8
    min-height: 0
    max-height: 84
  IRON_ORE:
    min: 2
    max: 6
    min-height: 0
    max-height: 64
  GOLD_ORE:
    min: 1
    max: 3
    min-height: 0
    max-height: 32
  LAPIS_ORE:
    min: 1
    max: 2
    min-height: 0
    max-height: 32
  REDSTONE_ORE:
    min: 1
    max: 2
    min-height: 0
    max-height: 16
  DIAMOND_ORE:
    min: 1
    max: 1
    min-height: 0
    max-height: 16
```
This configuration is a classic, it defines several "deposits" (Dirt, Gravel, Diorite, Andesite, Granite), as well as
all Vanilla ores, at standard Y-levels and chances. This example assumes that [Ore configs](./Ore-Configuration) with
the corresponding IDs have been set up.
</details>


# Super-Secret Advanced Options
These options are for advanced users that wish to have more control over biomes.

## ocean
Options for the ocean in this biome.
* `level` - Y-value at which to generate oceans. Ocean will be generated at locations that would be air, and are below
this Y-value. Defaults to 62.
* `palette` - Palette to generate Ocean with. Defaults to a single-block palette containing Water.

## slant
Options for slant palettes in this biome. A slant palette is a separate [palette](#palette) that is inserted into
steep/slanted locations. It allows for custom blocks to be defined on cliffsides.
* `palette` A map of palettes for different Y-levels. Follows the same structure as the main
[palette configuration](#palette). These palettes will be inserted into locations that are "slanted".
* `y-offset` - The distance to check vertically for blocks.
    * `top` - The distance to check upwards for blocks. Higher values allow the normal palette to take over on top of
    steep ledges.
    * `bottom` - The distance to check downwards for blocks. Higher values allow the normal palette to take over under
    steep overhangs.

## elevation
Options for the "elevation" feature, used to raise/lower areas in high resolution.
* `equation` - The elevation equation to use. The elevation equation is very similar to the noise equation, except it is
2-dimensional. This means that only `x` and `z` exist as variables, and only `noise2` is available as a function. The
standard noise equation receives the current Y-value, *plus* the result of this equation during generation, so the
elevation equation raises/lowers the terrain height based on its value for any x/z coordinate pair.
* `weight` - Weight of this biome's elevation equation. Higher weights take priority during elevation blending.

## blend
Per-biome blending options
* `distance` - Distance to use for blending. Higher distance = more blending. Actual distance = distance*step. By
default, this is 4.
* `step` - Step for sampling blend points. Higher values = lower resolution blending. By default, this is 4.
* `weight` - Weight of this biome. Higher weights take priority during blending.

## variables
Identical to the `variables` option in [pack.yml](./pack.yml-Options). These may be used to define custom variables
per-biome, or to override variables per-biome.

## functions
Identical to the `functions` option in [pack.yml](./pack.yml-Options). These may be used to define custom functions
per-biome, or to override functions per-biome.