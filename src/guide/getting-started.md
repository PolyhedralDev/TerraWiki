# Getting Started

This guide will outline process of creating your own world!
This guide assumes that you have a running minecraft server with Terra installed and working.

**This guide is a work in progress.**

## Preparation

This section goes over basic workspace setup, and creating a config from a template. See [Config Packs](./Config-Packs)
for more information on config packs.

1. Set up a test server, and install and run Terra.
2. Open `plugins/Terra/config.yml` in a text editor, and set `debug` to `true`.
3. Navigate to the packs directory (`plugins/Terra/packs`) and make a copy of the `default` directory. Name the copy
   whatever you want, this tutorial will call the new config `example`.
4. Open the new pack directory in a text editor like VS Code. Do not use Notepad/Notepad++! You'll want to set up your
   workspace in a text editor with file browsing support.
5. Open `pack.yml`, found in the root directory of the new config pack. Change `id` to the ID you wish to assign your
   config. This tutorial will use `EXAMPLE` as the config ID.
6. Set your test server's world to use the new config:
   1. Open `bukkit.yml` (Found in the root of the server).
   2. Assign your new generator to the default world by adding the following lines to the end of the file:
   ```yaml
   worlds:
     world:
       generator: Terra:EXAMPLE
   # Replace EXAMPLE with the ID of your config.
   ```
7. Stop your test server, delete the `world` folder, and start your server again. Your test server will now be using
   your new config pack!

#### Let's Recap

You now have a copy of the default config, called `EXAMPLE`. It's running on your test server, and is assigned to the
overworld. You have a workspace in VS Code set up to work on this new config.

## Configuring the World

This section overviews the many options available to adjust world generation in your new config.

In this section, we will go through some basic changes to the world generation to explain you all the different settings.
When adjusting your configuration, remember that most values can be reloaded live! If your server is in debug mode,
simply run `/te reload` to reload all configurations. You will need to fly into un-generated chunks to view any changes.

## Adjusting the Generator

Terra has a vast amount of options for configuring world generation from the ground up.
This tutorial will begin at the largest scale, then narrow down into finer aspects of generation.

### The Largest Scale: "The Zone"

A Biome Zone holds Biome Grids (overviewed later in this page). Zones generally define large differences in terrain,
for example, in the image below, which shows a zone, there are 5 grids:

- Ocean
- Beach
- Land
- Mountains Low
- Mountains High

<img height="600" src="https://i.imgur.com/ayb9Ygc.png" alt="BiomeZone">

Each section of the zone contains a BiomeGrid with biomes containing unique types of terrain. For example, all biomes
that fall under the OCEAN category should probably be grouped together in the world, so they would be arranged in the
OCEAN grid, then put in the zone together.

The Biome Zone is configured in `pack.yml`. See the [pack.yml page](./pack.yml-Options#grids) for more information.
The zone in the image above would be configured as:

```yaml
grids:
  - OCEAN
  - OCEAN
  - BEACH
  - BEACH
  - LAND
  - LAND
  - MOUNTAINS_LOW
  - MOUNTAINS_HIGH
```

The layout of the list is important! Grids that are adjacent in the Biome Zone will be adjacent in the world.
Using the above example, the generator must place BEACH between the OCEAN and LAND grids, MOUNTAINS_HIGH must border MOUNTAINS_LOW,
and MOUNTAINS_LOW must border either MOUNTAINS_HIGH or LAND. Repeating grids allows to make larger areas of e.g. OCEAN.

The Biome Zone can be a maximum of 4096 grids long.

Since there are already many default icy, ocean or mountain biomes (and you can create tons more), it would not be
meaningful to start manually configuring which biomes can be next to each other at the largest scale. So let's rather define a collection of biomes that make up an environment, called a biome "grid". You could have an "ocean" grid, a "beach" grid or a "low mountain" and a "high mountain" grid. Each grid then will be built of all the biomes that you think make sense for that grid. A biome can appear in several grids. For your Zone, you can then define which of these grids can be next to each other in a list. This list can be found for the default pack in `\plugins\Terra\packs\default\pack.yml`. Details how to configure this list can be found here: [[Biome-Selection#biome-zones]].

Terra will go through that list and make sure that those grids are next to each other only in the sequence listed in pack.yml. While there is a complex randomization happening the background to determine which biome in the end will be next to each other, the rules of the zone's grid list will always be followed.

To start with, it's highly recommended to have Ocean biomes on the one end of the list and Mountain on the other with flat land in the middle, as in the default pack.

### Biome Grids

<img height="250" src="https://i.imgur.com/FSmfxh4.png" alt="BiomeGrid">
Coming to the next level of detail now, you have to configure the grids that you listed in your pack.yml. Essentially, you can now define a 2-D pattern of biomes that you think look good next to each other in order to make the grid look nice. For each entry on your list in pack.yml, you need to have a file in `/plugins/Terra/packs/default/grids/` such as `ocean.yml`

Within this file, there is a 2-dimensional list (hence a grid) of biomes that defines all the biomes that can appear in that grid. If biomes in this list are next to each other (vertically or horizontally), they will also have a chance to be next to each other in the real world. The neighboring biome will not be chosen by jumping diagonally.

This list can be maximum the same length as the Zone file grid list (4096) in either direction, so quite huge if you need to. You can find more information about Biome Grids here: [[Biome-Selection#biome-grids]]

### Managing individual Biomes

Biomes have several components, See [[Biome-Configuration]] for details. Some introduction of components here:

#### Surface formation

Minecraft worlds are dimensioned by X, Y and Z coordinates. Y is the height, the other two are North-South (X) and East-West (Z). Terra uses a so-called [noise function](./My-First-Noise-Equation) that calculates how the world looks like.

#### Water level

Biomes by default have a water level at height 62 and will fill the empty area below that height with water (except caves of course). If you do not want to have any water level in your biome, add

    ocean:
      level: -1

to the biome config.
