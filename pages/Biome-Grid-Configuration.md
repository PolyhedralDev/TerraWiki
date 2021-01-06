This page discusses the configuration of Biome Grids. For information on Biome Grids, see the
[Biome Selection](./Biome-Selection#biome-grids) page.   

# Object Options
Biomes support all Terra [Object Options](./Objects).

# Options

## grid
A 2D array of Biome IDs that make up the grid. See the example below for the specific layout.   
For each location in the world, the two Grid noise functions defined in the [Pack Config](pack.yml-Options#frequencies)
choose an X and Z coordinate in the array, and pick the biome in the corresponding cell.

## frequency
Frequencies for this BiomeGrid. These frequencies are auto-scaled for the size of the BiomeGrid along its X and Z axes.
(This means that frequencies will always produce approximately the same size of biomes, no matter the size of the grid)
* `x` - X frequency
* `z` - Z frequency

***

## Example
<details>
<summary>Example Grid</summary>

An example Grid. its ID is `LAND`, and its layout is the same as the example table shown in the
[Biome Selection](./Biome-Selection#biome-grids) page.
```yaml
grid:
  - ["PLAINS", "PLAINS", "OAK_FOREST", "OAK_FOREST"]
  - ["PLAINS", "PLAINS", "BIRCH_FOREST", "BIRCH_FOREST"]
  - ["DESERT", "DESERT", "SAVANNA", "SAVANNA"]
  - ["DESERT", "DESERT", "SAVANNA", "SAVANNA"]
id: LAND
frequency:
  x: 2048
  z: 2048
```

</details>