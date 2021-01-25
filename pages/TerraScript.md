
[//]: # (TerraScript Basics)

## What is TerraScript?
TerraScript is a custom scripting language with JavaScript-like syntax designed for writing custom structures. 
It is simple to learn and easy to use, and incredibly powerful at the same time. You can use TerraScript for anything
from custom procedurally generated trees, to mineshafts, to villages.

## What specifically can TerraScript do?
TerraScript has many features to allow manipulation of the world, including:
* Setting blocks
* Setting block NBT data (Spawner NBT data, sign NBT data, etc)
* Applying loot tables to inventories
* Setting blocks that are auto-pulled to the ground
* Spawning entities

It can also read data from the world in different ways to allow for efficient structure generation. TerraScript can read:
* Location type (`AIR`, `LAND`, or `OCEAN`) for fast checking and spawn validation.
* Block States for slower, but more accurate checking.
* Marks allow scripts to "mark" locations, then check them later, in a way that does not affect generation.

Perhaps the most powerful part of TerraScript is its ability to generate scripts recursively. TerraScript contains
functions to:
* Invoke other scripts at offset locations within the current script, and check whether the sub-structure was
    successfully generated
* Check the amount of recursions in the current script

TerraScript contains essential language features like:
* String, Integer, and Boolean variables
* `if` `else if` and `else` statements
* `for` and `while` loops, with flow control statements (`continue` `break` and `return`)

In the default, TerraScript is used for:
* All custom trees. Most trees are TerraScript schematics made with the `export` command, others, like Oak and Spruce
trees, are procedurally generated.
* Procedurally generated villages using recursive scripts
* Procedurally generated mineshafts using recursive, completely procedural scripts.
