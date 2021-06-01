# Terra Structures
Terra uses its own structure storage format. THis format is a custom scripting language called TerraScript. For
information on how to write procedural structures in TerraScript, see the [TerraScript Basics](./TerraScript.md) page.
This page will go over exporting structures from your world to TerraScript files.

# Exporting Structures
Exporting structures requires [WorldEdit](https://dev.bukkit.org/projects/worldedit) installed. You only need WorldEdit
for selection, nothing else in Terra requires it.   
Exporting a structure:
1. Build your structure. For this example, this spruce tree will be used:   
    <img src="https://i.imgur.com/LGlpx9N.png"/>
2. (Optional) Place a Center Sign in your structure. A Center sign defines a center to the structure around which the
    script will be made.
    <img src="https://i.imgur.com/yheiObl.png"/>
3. Make a WorldEdit selection including your structure. (The cobblestone shown in the image was for making the
    selection, it was removed afterwards)    
    <img src="https://i.imgur.com/ynOn7UG.png"/>
4. Export your structure with the `/te export <name>` command.    
    <img src="https://i.imgur.com/kpDLV5Z.png"/>    

Your structure will be saved to `plugins/Terra/export/structures/name.tesf`.    

# Loading Structures
Loading structures can be useful for debugging. All loaded structure scripts may be loaded via command.

## Command Syntax

`/te structure export <name>`    
Export a structure to `plugins/Terra/export/structures/name.tesf`

`/te structure load <full|chunk> <id> <rotation>`    
Load a structure script with ID `id` and rotation `rotation
* `full` loads the entire structure
* `chunk` loads the secton of the structure in the current chunk.