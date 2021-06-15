This page discusses how to generate custom blocks in your world using outside custom item plugins such as
MMOItems and CustomItems (these two just for sake of example, there are likely other custom item plugins
out there worth checking out). For information on configuring ore generation with Terra, see
[Ore Configuration](https://github.com/PolyhedralDev/TerraWiki/blob/master/pages/Ore-Configuration.md).

**This tutorial is for Bukkit only. On other platforms, simply use the namespaced ID of the block you want, the
same way as you would any Minecraft block.**

# Custom Blocks

It's important to understand that custom item plugins do not actually add new blocks to Minecraft, but instead
replace existing blocks. The blocks of choice are usually Brown and Red Mushroom Blocks due to their many block states.
As of Minecraft 1.14, the way in which Mushroom Blocks are handled has changed from numeric IDs to directional
facings. As a result, this guide will be covering **Minecraft 1.14 (and above) versions only**.

Knowing custom blocks are mushroom blocks, we will be using this to figure out how to have custom ore
generate in your world with a unique texture (thanks to your custom item plugin, note that *Terra by itself
does not offer such a feature*).

# Getting Block Facings

When you create a custom block (using a custom item plugin!) and place it on the ground, if you did everything
correctly, you will see a custom block instead of a mushroom block. So, how do we get this block to generate in
your world naturally?

After creating a custom block, place the block on the ground and press F3 to bring up Minecraft's debug screen. The
information we need is the block state information on the right:

![Custom Block Faces](https://i.imgur.com/V8B6PYu.png)

*This information will only show if you're looking at the custom block.*

The information highlighted is the most important, but directly above it is whether it's a red or brown mushroom block.
In this example, it's a `red_mushroom_block`. You'll want to know this information, too. The combination of whether it's
a red or brown mushroom block and the facings in which they are true or false will be *unique* to each type of custom
block you have and will be key in determining what spawns where and how in your
[Ore Configuration](https://github.com/PolyhedralDev/TerraWiki/blob/master/pages/Ore-Configuration.md).

# Generating Custom Blocks

Navigate to your `ores` folder and create a new .YML file. In my example, I want my custom block to
generate with a similar size to diamonds, so I'll take the provided  `minerals/diamond.yml`'s setup as an example:

```yaml
material: "minecraft:red_mushroom_block[down=false,south=false]"
size:
  min: 8
  max: 8
extends: MINERAL
id: "SAPPHIRE_ORE"
```

The big takeaway here is the material: field. As shown in our example, our block was a red_mushroom_block
(and not a brown_mushroom_block), so we set that as the material. However, in order to grab the facings, we must
review which facings were **false**. By default, all facings are true, so for every facing that is true, you don't
need to include it anywhere. You only need to include what is shown as false.

In our case, both down and south were **false**, so we include that with square brackets right next to
the material (with *no space*!). You use a comma with no space to separate each facing that is false. Feel free
to copy and paste the above example and adjust the values as necessary for your own custom block.

the `id` field can be anything we wish. In this example, I opted for `SAPPHIRE_ORE`. This is what you'll
use for Terra to generate it into your world.
