Carver configurations are in the `carving/` directory within a config pack.   
Carvers "carve" out sections of a world after generation. They are typically used to create caves and ravines.   
A carver is essentially an ellipse. This ellipse then moves around the world on a randomly determined path (called a
worm), carving out where it moves.

# Object Options
Carvers support all Terra [Object Options](./Objects).

# Options

## length
The minimum and maximum length of the cave.
* `min` - The minimum length of the cave.
* `max` - The maximum length of the cave.

## step
How many blocks the worm should move each step. Example: a value of `2` would cause the worm to move 2 blocks
between each carving. Defaults to 2.

## start
Configuration for how the carver begins.
* `x` - The multiplier for the initial vector X-component. (Higher values cause carving to begin horizontally more
often).
* `y` - The multiplier for the initial vector Y-component. (Higher values cause carving to begin vertically more
often).
* `z` - The multiplier for the initial vector Z-component. (Higher values cause carving to begin horizontally more
often).
* `radius` - Configuration for the radius.
    * `x` - X radius equation.
    * `y` - Y radius equation.
    * `z` - Z radius equation.
* `height` - Minimum and maximumY-levels at which the carver is able to begin.
    * `min` - Minimum Y-level at which the carver can begin.
    * `max` - Maximum Y-level at which the carver can begin.

### Radius Equations
The X, Y, and Z radius equations are mathematical expressions to be evaluated at each carving step. 2 variables are
provided to these expressions:
* `length` - The total length of the current worm.
* `position` - The carver's current position. (position = 0 at the beginning of carving, position = length at the end).


## cut
Options to "cut off" the topmost/bottommost parts of the carved area. This can be used to give your carvings flat
floors/ceilings.
* `top` - Number of blocks to cut off the top of carving.
* `bottom` - Number of blocks to cut off the bottom of carving.

## mutate
How to mutate the carver as it progresses.
* `x` - X-Axis rotation multiplier (rotating around the X-Axis will cause the carver to turn up/down, therefore
increasing this value will cause carving to generally be more vertical).
* `y` - Y-Axis rotation multiplier (rotating around the Y-Axis will cause the carver to turn left/right, therefore
increasing this value will cause carving to generally be more horizontal).
* `z` - Z-Axis rotation multiplier (rotating around the X-Axis will cause the carver to turn up/down, therefore
increasing this value will cause carving to generally be more vertical).
* `radius` - Radius multiplier. Increasing this value will cause more variations in the carver's radius during carving.

## shift
A list of blocks to shift downwards when carved.
List elements should be formatted as:
```yaml
"minecraft:block_id": # ID of block to pull downwards.
  - "minecraft:other_block_1" # Block that can be replaced
  - "minecraft:other_block_2" # More blocks that can be replaced...
```
The most common use of this is definitely pulling Grass Blocks down into exposed dirt. 
```yaml
shift:
  "minecraft:grass_block": ["minecraft:dirt"]
```

## update
A list of block IDs that should be updated during generation. **Do not include anything in this option unless you
are pregenerating, as this option can be extremely laggy!)
Example that prevents floating water in caves:
```yaml
update:
  - "minecraft:water"
```

## palette
Options for cave floor, wall, ceiling, and center palettes.
* `inner` - Palette on the inside of the carved area.
* `outer` - Palette on the left/right walls of the carved areas.
* `top` - Palette on the top of the carved area.
* `bottom` - Palette on the bottom of the carved area.

**These are not standard palettes!** Carver palettes must be defined **in the carver file**.

# Cave Palette Configuration
Cave palettes hold more information than standard palettes, hence why they are kept separate. The config scheme
outlined in this section is to be used in the `palette` keys in a Carver config.

## replace
A list of block IDs that may be replaced by this palette.

## replace-blacklist
Whether the materials in `replace` should be treated as a whitelist or blacklist.

## recalculate-direction
How many blocks to continue before recalculating the worm's direction.
* `min` - Minimum distance before recalculating. Defaults to 8.
* `max` - Maximum distance before recalculating. Defaults to 12.

## layers
Standard palette layer configuration (see [Palette](./Palette-Configuration#layers) page)   
One key difference: The `layers` sub-option has been replaced with `y`. while `layers` defines how many layers to
continue the palette layer, `y` defines the Y-level under which the layer generates.