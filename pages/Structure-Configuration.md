This page discusses the configuration of Structures.   


Structure configurations are in the `structures/single/` directory within a config pack.    
Structure files are in the `structures/data/` directory within a config pack.  
Loot tables are in the `structures/loot` directory within a config pack.    

# Object Options
Structures support all Terra [Object Options](./Objects).

# Options

## scripts
A [weighted pool](./Weighted-Pools) of [structure](./Working-With-Structures) script IDs and their
weights.

## spawn
Options for structure spawning.
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