
[//]: # (Ore Configuration)
[//]: # (Ores Configuration)

Ores are materials that generate in veins throughout the world. Per Terra's rather loose definition, they do not even
necessarily need to be made of ore, or even underground! Veins generate as deformed spheres, which is basically a sphere
with its radius stretched and compressed at different points using noise. To experiment with this concept
visually, use the `/te geometry deformedsphere <radius> <deform> <frequency>` command to generate such spheres
in your world.

# Object Options
Ores support all Terra [Object Options](./Objects).

# Options

## material
BlockData string representing the material of the ore. Examples:
* `minecraft:gold_ore` will generate Gold Ore.
* `minecraft:oak_fence[waterlogged=true]` will generate waterlogged oak fences.   

This value is required.

## radius
Minimum and maximum radii of the vein.
* `min` - Minimum radius of the vein
* `max` - Maximum radius of the vein.

## deform
The amount by which to deform. The true meaning of this value is difficult to explain without the technical aspect. Technically, this value is the value multiplied by the deform noise value to produce the deformed sphere's radius at a point. Less technically, the further this value is from one, the more deformed the vein will be. Higher values make the vein larger, lower values make it smaller.   
This value is optional. (Defaults to 0.75)

## deform-frequency
Frequency of the noise function used to deform the ore sphere. Higher values produce more "scattered" veins, values
approaching zero produce increasingly spherical veins.   
This value is optional. (Defaults to 0.1)  

## replace
A list of block IDs that the ore can replace during generation.
This value is required.


## update
Whether to update the physics on blocks generated in the vein. This is required if you want liquid veins to have physics (to flow after generation). **Do not** enable this unless physics is required, as it *will* cause lag on large veins!      
This value is optional. (Defaults false)

## cross-chunks
Whether ore veins are able to cross chunk borders. Disabling this may help increase performance. Defaults to true.  

# Debugging
Ore veins can be generated live using the `/te ore <ID>` command. This command will generate a vein of <ID> ore at the location you are looking at. It will only replace materials in the `replaceable` list, so make sure you're looking somewhere it can generate!