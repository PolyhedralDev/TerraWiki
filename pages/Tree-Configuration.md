This page discusses the configuration of **Custom** Structure Trees. For information on included trees, see the
[Trees](./Terra-Tree-Types) page.

Tree configurations are in the `structures/trees/` directory within a config pack.    
Tree structure files are in the `structures/data/` directory within a config pack (Same directory as standard structures).  

# Object Options
Trees support all Terra [Object Options](./Objects).

# Options

## y-offset
An integer to add to the Y-value of generation. Useful for trees that have large underground portions. This value can be
negative.

## spawnable
A list of Block IDs that this tree can spawn on

## files
A [weighted pool](./Weighted-Pools) of [structure](./Working-With-Structures) filenames (sans `.tstructure`) and their
weights. The files must be located in the Tree data directory (`trees/data/`).

# Example
<details>
<summary>Example Custom Tree</summary>

```yaml
files:
  spruce1: 1
  spruce2: 2
id: SPRUCE_CUSTOM
y-offset: 0
spawnable:
  - "minecraft:grass_block"
```
This custom tree has an ID of `SPRUCE_CUSTOM`. It can spawn on Grass Blocks, has a y-offset of zero, and has 2 structure
files, `spruce1.tstructure` with weight 1, and `spruce2.tstructure` with weight 2.
</details>