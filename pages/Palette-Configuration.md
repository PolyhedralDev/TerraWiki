This page discusses the configuration of Block Palettes. For information on Block Palettes, see the [About Block
Palettes](./Block-Palettes) page.

Palette configurations are in the `palettes/` directory within a config pack.  

# Object Options
Palettes support all Terra [Object Options](./Object).

# Options

## layers
A list of palette layers. Each layer has a block layout, and can be configured to repeat for a number of blocks.
### Layer options
* `materials` - A [weighted pool](./Weighted-Pools) of materials and their weights.
* `layers` The number of blocks to repeat this layer for. (The "depth" of this layer). The actual depth of this layer is
equal to the sum of the depths of all previous layers.    

The last layer of a palette will be repeated infinitely, regardless of its `layers` option.
## seed
The seed used in the pseudorandom number generator/Simplex generator. If the seed for two palettes is the same, and they
have an equal number of materials in each layer, the materials in the palettes will line up.

## simplex
Whether to use Simplex noise in this palette. If true, the palette will use a Simplex noise generator to pull blocks
from layers. If false or not included, a pseudorandom number generator will be used.

## frequency
The frequency to use for the Simplex generator. Lower values produce more "blob-like" selections. Defaults to 0.02.

***

# Examples
<details>
<summary>Example Palette</summary>

An example palette that generates 1 layer of Grass Blocks, 2 layers of Dirt underneath, then Stone for all
remaining blocks. Its ID is `GRASSY`.
```yaml
layers:
  - materials:
      - "minecraft:grass_block": 1
    layers: 1
  - materials:
      - "minecraft:dirt": 1
    layers: 2
  - materials:
      - "minecraft:stone": 1
    layers: 1
id: GRASSY
```

</details>

<details>
<summary>Example Simplex Palette</summary>

An example palette that generates 2 layers of simplex-distributed Gravel, Dirt, and Sand. Dirt is more common,
weighted at 4/7, followed by sand at 2/7, then gravel at 1/7. The seed of the Simplex generator is 3, and
its frequency has been set to 0.05.   
Subsequent layers are Stone.
```yaml
layers:
  - materials:
      - "minecraft:gravel": 1
      - "minecraft:dirt": 4
      - "minecraft:sand": 2
    layers: 2
  - materials:
      - "minecraft:stone": 1
    layers: 1
id: RIVER_BOTTOM
simplex: true
frequency: 0.05
seed: 3
```

</details>