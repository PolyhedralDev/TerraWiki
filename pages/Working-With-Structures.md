# Terra Structures
Terra uses its own structure storage format. This format uses serialized instances of the
[Structure](https://github.com/PolyhedralDev/Terra/blob/master/src/main/java/com/dfsek/terra/structure/Structure.java)
class to store structures. They have the file extension `.tstructure`.

# Exporting Structures
Exporting structures requires [WorldEdit](https://dev.bukkit.org/projects/worldedit) installed. You only need WorldEdit
for selection, nothing else in Terra requires it.   
Exporting a structure:
1. Build your structure. For this example, this spruce tree will be used:   
    <img src="https://i.imgur.com/LGlpx9N.png"/>
2. Place Magic Signs in your structure. More information on Magic Signs can be found below, the only required sign is
    the Center sign. This example uses a Center sign, and a single Land spawn sign.    
    <img src="https://i.imgur.com/yheiObl.png"/>
3. Make a WorldEdit selection including your structure. (The cobblestone shown in the image was for making the
    selection, it was removed afterwards)    
    <img src="https://i.imgur.com/ynOn7UG.png"/>
4. Export your structure with the `/te export <name>` command.    
    <img src="https://i.imgur.com/kpDLV5Z.png"/>    

Your structure will be saved to `plugins/Terra/export/structures/name.tstructure`.    
<img src="https://i.imgur.com/vZ8polS.png"/>

# Loading Structures
Loading structures can be useful for debugging. Structures can only be loaded via command if they are in the structure
export directory. (`plugins/Terra/export/structures/`)

## Command Syntax

`/te structure load <name> <rotation> <chunk_border>`

* `name` - The name of the structure (sans `.tstructure`).
* `rotation` - The rotation (in degrees) of the structure.
* `chunk_border` - Whether to paste the structure into the current chunk (`false`), or paste the whole thing (`true`)

# Magic Signs
Magic Signs define special functions within Terra structures.
## Center Sign
A Center Sign defines the X/Z center of the structure (it can be placed on any Y-level and have the same effect).
Center Sign Syntax:
```text
[TERRA]
[CENTER]
minecraft:whatev
er
```
A structure **must** include one, and only one center sign.
## Spawn Sign
A Spawn Sign defines a spawn requirement for a structure. A structure may have any number, and any combination
of types of Spawn Signs.   

Spawn Sign Syntax:
```text
[TERRA]
[SPAWN=TYPE]
minecraft:whatev
er
```

There are 3 types of spawn sign (replace `TYPE` with a Type ID):
#### LAND
A Land Spawn Sign specifies that the location of the sign must be in the ground.
#### OCEAN
An Ocean Spawn Sign specifies that the location of the sign must be in the ocean.
#### AIR
An Air Spawn Sign specifies that the location of the sign must be in the air.


## Pull Sign
A pull sign defines a block to be "pulled" down to ground level, or up to ceiling level.    

Pull Sign Syntax:
```text
[TERRA]
[PULL=TYPE_N]
minecraft:whatev
er
```
There are 2 types of Pull Signs:
#### UP
Pull the block up to the ceiling.
#### DOWN
Pull the block down to the floor.
***
### N
N is an integer that represents the offset from the ceiling/floor. A value of zero replaces the block in the
ceiling/floor, a value of 1 is 1 block upwards, etc. This value can be negative.
***
## minecraft:whatever
This placeholder has been used in all the examples. It represents the block ID that the Magic Sign is to be replaced
with. It occupies the last 2 lines of the sign, so if you run out of space on one, carry over to the next.

# Miscellaneous
## Loot
To assign a container a Loot ID (used during configuration), put any number of any item in the first slot of the
inventory. The Loot ID will be the same as the number of items in the first slot. (Default is zero, duh).