###### CONTENTS

- [Anatomy of a Pack](#anatomy-of-a-pack)
  - [Pack Structure](#pack-structure)
  - [Sub-folders](#sub-folders)
- [Adjusting the Generator](#adjusting-the-generator)
  - [Reloading edits](#reloading-edits)

This section overviews the many options available to adjust world generation in your new config.

In this section, we will go through the typical workflow involved in making changes to a pack, and cover some basic
changes to the world generation.

If you aren't sure where to get started with creating a pack, check out [Creating a Pack](./Creating-a-Pack).

### Anatomy of a Pack

Terra configuration packs can be divided into sub-folders each containing different configuration file types. Every pack
has a unique ID, used for setting up world generators and loading everything correctly. If you have already
read through [Creating a Pack](./Creating-a-Pack), then you should already know how to set up the ID for a pack.

#### Pack Structure

Here is what to expect when looking inside a Terra config pack. You can
expand the following sections to read descriptions of each:

<details>
<summary>:page_facing_up: <code>pack.yml</code></summary><br>

>[Pack Manifest](./pack.yml-Options) documentation

If you followed [Creating a Pack](./Creating-a-Pack), then you should already be familiar with pack.yml. The pack
manifest controls broad scale things like *how biomes are arranged*, and defines things integral to a pack such as
the *author, version and pack name*.

---
</details>

<details>
<summary>:file_folder: <code>biomes</code></summary><br>

> The `biomes` folder contains user-defined [Biome Configurations](./Biome-Configuration).

Aside from pack.yml, you will probably be configuring the bulk of your work inside this folder, as it contains
everything that makes biomes unique.

Biomes generally take many assets defined in other folders (or even other biomes!) and combines them together to
define a singular unique biome. Many biomes can share aspects such as the blocks that make up the landscape, what
trees within the biome, and how ores spawn etc. For a full list of biome parameters you can check out the
[Biome Configuration](./Biome-Configuration) documentation.

---
</details>

<details>
<summary>:file_folder: <code>carving</code></summary><br>

> The `carving` folder contains user-defined [Carver Configurations](./Carver-Configuration).

Carver configurations define the behaviour of basic caves in Terra. Biomes can pick and choose which carvers they
take from this folder to use when generating.
If you want to change how caves look, then is the folder to go to.

---
</details>

<details>
<summary>:file_folder: <code>flora</code></summary><br>

> The `flora` folder contains user-defined [Flora Configurations](./Flora-Configuration).

Flora configurations define aspects like grass and flowers that will be used within biome configurations, but can also
be generalized to other aspects of generation such as sugarcane, lily-pads, water springs etc.

Flora is generally configured to be a block or stack of blocks that only spawns under certain conditions. For example
sugarcane would only generate on grass and sand that is adjacent to water, and can only replace air blocks. You can
think of flora like a *post-processor*.

If you want to configure your own flora, you would do it in this folder. Alternatively, Terra also provides various
[preset flora configs](./Included-Flora) included within the plugin.

---
</details>

<details>
<summary>:file_folder: <code>ores</code></summary><br>

> The `ore` folder contains user-defined [Ore Configurations](./Ore-Configuration).

Ore configurations determine how various individual deposits of blocks behave. Aspects like what block deposits are made
of, and how large deposits are can be controlled here. Note that ore configurations pertain to how singular deposits
behave, meaning that aspects like *where* and *how frequent* deposits are not handled in this folder (Those factors are
defined within biomes).

Another thing to note is that aspects like dirt and granite pockets are also defined here, meaning that ore
configurations are not specific to just ores.

---
</details>

<details>
<summary>:file_folder: <code>palettes</code></summary><br>

>The `palettes` folder contains user-defined [Palette Configurations](./Palette-Configuration).

---
</details>

<details>
<summary>:file_folder: <code>structures</code></summary><br>

The `structure` folder contains several Terra defined sub-directories as follows:

* :file_folder:`trees`

    >[Tree Configuration](./Tree-Configuration) documentation

* :file_folder:`structures`
  
    >[Structure Configuration](./Structure-Configuration) documentation

* :file_folder:`loot`

    Loot tables

* :file_folder:`data`

    >[Terrascript](./TerraScript) documentation

---
</details>

#### Sub-folders

Just about every configuration file within each pack sub-directory can be further nested in user-defined folders for
organization. This can be very useful for pack development as it will make files much easier to locate and edit, and is
a good practice to do to make things neater. For example, here is what an organized biome folder structure might look like:

```diff
# Terra defined folders
pack
└ biomes
# User defined folders
  ├ land
  │ ├ hot
  │ │ └ desert.yml
  │ ├ temperate
  │ │ ├ forest.yml
  │ │ └ plains.yml
  │ └ cold
  │   └ tundra.yml
  └ water
    ├ ocean.yml
    └ river.yml
```

### Adjusting the Generator

```diff
! This section is incomplete !
```

Terra has a vast amount of options for configuring world generation from the ground up. We don't expect you to be able
to pick up *every little aspect* as there is a lot to take in, but you will have to put in some work grasping a handful
of important concepts, if you're looking to develop a pack. These topics include:

- [Noise](./Noise)
- [Objects](./Objects)
- [Weighted Pools](./Weighted-Pools)
- [Biome Pipeline](./Biome-Pipeline)
- [TerraScript](./TerraScript)

#### Reloading edits

When adjusting your configuration, you might think that you will need to restart your whole server for any changes to
take effect. This is not the case with Terra; you can simply reload your configurations live while the server is
running. If your server is in debug mode (which is covered in [Creating a Pack](./Creating-a-Pack)), simply run
`/te reload` to reload all configurations.

###### NOTE

> You will still need to generate new chunks after reloading to preview any changes!