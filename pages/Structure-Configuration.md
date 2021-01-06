This page discusses the configuration of Structures.   


Structure configurations are in the `structures/single/` directory within a config pack.    
Structure files are in the `structures/data/` directory within a config pack.  
Loot tables are in the `structures/loot` directory within a config pack.    

# Object Options
Structures support all Terra [Object Options](./Objects).

# Options

## files
A [weighted pool](./Weighted-Pools) of [structure](./Working-With-Structures) filenames (sans `.tstructure`) and their
weights. The files must be located in the Structure data directory (`structures/data/`).

## spawn
Options for structure spawning.
* `bound` - Y-Range in which the structure can generate. Spawn will be aborted if the structure scan's Y-value leaves
    this range.
    * `min` - Lower Y-bound.
    * `max` - Upper Y-bound.
* `start` - Range in which to begin Y-value checking. A random value will be selected from this range, and Terra will
    search downwards until either a spawn that matches the structure's spawn signs can be found, or until the
    Y-value is out of range.
    * `min` - Minimum Y-value to begin searching.
    * `max` - Maximum y-value to begin searching.
* `width` - Width of cells in the padded grid to use for structure placement.
* `padding` - Padding between cells in the padded grid used for structure placement.

<img src="https://i.imgur.com/DSXCUqo.png" alt="Padded Grid" width="500"/>     

Example of width and padding in a padded grid. Black dots represent structure spawn locations.

## loot
Loot tables to use for this structure. Keys represent [Loot Table IDs](Working-With-Structures#Loot), and values
represent the loot table file to use (sans `.json`).    
Loot table files go in the `structures/loot` directory. They can be generated with any Vanilla [loot table
generation utility](https://amaury.carrade.eu/minecraft/loot_tables), as they are a re-implementation of Vanilla loot
table syntax.

## features
Features define modifications to structures *after* generation. Multiple structure features amy be added to this list,
even multiple features of the same type.

### ENTITY_FEATURE
Spawn entities inside the structure after generation.
* `entity` - The Entity Type to spawn.
* `amount` - The number of entities to try to spawn.
    * `min` - Minimum number of entities
    * `max` - Maximum number of entities
* `attempts` - The maximum number of attempts to spawn the entity (overrides `amount` if exceeded)
* `spawnable-on` - A list of block IDs that the entity can spawn *on* (the floor it can spawn on).
* `spawnable-in` - A list of block IDs that the entity can spawn *in* (air, etc).
* `in-height` - The amount of blocks to search vertically to verify against the `spawnable-in` list.

<details>
<summary>Example Entity Features</summary>

This structure has two Entity Features. One spawns between 20 and 30 Silverfish (but gives up after 40 attempts), the
other spawns between 10 and 15 Zombies (but gives up after 20 attempts).
```yaml
features:
  - ENTITY_FEATURE:
      entity: SILVERFISH
      attempts: 40
      in-height: 1
      amount:
        min: 20
        max: 30
      spawnable-on:
        - "minecraft:stone"
        - "minecraft:stone_bricks"
        - "minecraft:mossy_stone_bricks"
      spawnable-in:
        - "minecraft:air"
  - ENTITY_FEATURE:
      entity: ZOMBIE
      attempts: 20
      in-height: 2
      amount:
        min: 10
        max: 15
      spawnable-on:
        - "minecraft:stone"
        - "minecraft:stone_bricks"
        - "minecraft:mossy_stone_bricks"
      spawnable-in:
        - "minecraft:air"
```

</details>