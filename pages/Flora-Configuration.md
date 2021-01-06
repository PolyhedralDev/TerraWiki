This page discusses the configuration of **custom** Flora objects. For information on *included* Flora, see the
[Included Flora](./Included-Flora) page.

Flora configurations are in the `flora/` directory within a config pack.   
A Flora object is a small structure-like object that is 1xNx1 blocks in size (1x1 blocks wide, any number of blocks
tall). For larger common custom structures (like trees/rocks), see [Trees](./Tree-Configuration). For even larger,
less common structures, like temples and monuments, see [Structures](./Structure-Configuration).

# Object Options
Flora supports all Terra [Object Options](./Objects).


# Options

## ceiling
Whether this Flora object generates from the ceiling, or the floor.
When true, the object will generate hanging from the ceiling.
When false, the object will generate upwards from the floor.
**Note:** This does not invert the layers (e.g. first layer will still be on the top, regardless of this option).   
This value is optional, and defaults false.

## spawnable
A list of block IDs that this Flora object can spawn on.

## replaceable
A list of block IDs that this Flora object can replace during generation.

## irrigable
A list of blocks that must be bordering the block the Flora will be planted on for it to grow. This value is optional.
It defaults to all blocks (allowing the Flora to grow on any spawnable block).    

## rotatable
A list of blocks that the flora item should be rotated to face. 

An example use case is sugarcane, where water would be the only item in this list, meaning sugarcane would only
be able to grow bordering water.

## layers
This option is identical to the [`layers` option of a Block Palette](./Palette-Configuration#layers), just interpreted
differently. When generating Flora, each layer will be generated, starting with the topmost layer, and going downwards.

# Examples

<details>
<summary>Example Flora (Tall Seagrass)</summary>

```yaml
layers:
  - materials:
      - "minecraft:tall_seagrass[half=upper]": 1
    layers: 1
  - materials:
      - "minecraft:tall_seagrass[half=lower]": 1
    layers: 1
id: TALL_SEAGRASS
name: "Tall Sea Grass"
spawnable:
  - "minecraft:sand"
  - "minecraft:stone"
  - "minecraft:red_sand"
  - "minecraft:gravel"
  - "minecraft:dirt"
replaceable:
  - "minecraft:water"
```

This config will generate a 2-block Seagrass plant.     
The top layer of the palette is `tall_seagrass`, set to the upper half variant.    
The second (bottom) layer of the palette is `tall_seagrass`, set to the bottom half variant.    

This Flora object can generate on Sand, Stone, Red Sand, Gravel, and Dirt. It can only replace Water blocks.

</details>