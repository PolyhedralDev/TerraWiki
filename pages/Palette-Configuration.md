This page discusses the configuration of Block Palettes. For information on Block Palettes, see the [About Block
Palettes](./Block-Palettes) page.

Palette configurations are in the `palettes/` directory within a config pack.  

# Object Options
Palettes support all Terra [Object Options](./Objects).

# Options

## layers
A list of palette layers. Each layer has a block layout, and can be configured to repeat for a number of blocks.
### Layer options
* `materials` - A [weighted pool](./Weighted-Pools) of materials and their weights.
* `layers` The number of blocks to repeat this layer for. (The "depth" of this layer). The actual depth of this layer is
equal to the sum of the depths of all previous layers.    

The last layer of a palette will be repeated infinitely, regardless of its `layers` option.
## noise
A [Noise Configuration](./Noise-Options) that defines placement of blocks in this palette. Defaults to 3D white noise.

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