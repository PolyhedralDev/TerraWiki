This guide will outline the process of creating a new Terra configuration pack from the beginning. If you haven't already, please read the [Config Development Introduction](./Config-Development-Introduction) for more information before continuing.

While Terra has a very intuitive config system, this does **not** mean creating a decent config pack is a simple task!
Procedural world generation contains a lot of moving parts and can get quite complex depending on how in-depth you want to get. Pack development can also be *very rewarding*. Being able to create, experiment, and modify worlds to your exact specification can be both a creative and enjoyable exercise. On top of that, you can then *play in your personal custom tailored worlds*, whether that is just by yourself, or with your friends on a server.

 This multi-part guide will provide a foundation of knowledge required to build your own world generator in Terra from scratch, while remaining as beginner friendly as possible. If you get stuck at any stage, or need some clarification, be sure to
**ask for help** if you need it! We'll be happy to help you in our [Discord server](https://discord.gg/PXUEbbF).

> If you wish to **modify an existing pack** rather than creating your own from scratch, please refer to **[this](./Modifying-a-Pack)** guide instead.

# Setting up a New Pack

A Terra configuration pack at minimum will need two basic files in order to load correctly - a **Pack Manifest**, and a **Biome Configuration**.

###### PACK MANIFEST

A pack manifest defines some necessary information in order for a pack to load - including the name / ID of the pack used to set the world generator, and the instructions for biome placement for any given world set to generate with the pack.

###### BIOME CONFIGURATION

A world will require *at least one biome* to generate terrain. A biome in Terra is defined in a biome configuration, which is just fancy lists of characteristics that tells Terra how to generate said biome.

###### A NOTE ON YAML

[YAML](https://en.wikipedia.org/wiki/YAML) is the main file format Terra uses for configuration files.

A 'YAML file' simply refers to a text document with one of the extensions `.yml`/`.yaml`, which contains contents that abide by the [YAML spec](https://yaml.org/spec/). In Terra we only use the `.yml` extension for YAML files, which are also generally referred to as 'config files'.

Creating a config file is as simple as creating a new text file with the extension `.yml`.

## Creating the Files

The following steps will walk you through how to create a bare-bones config pack from scratch. *Click each step to expand for instructions.*

<details>

<summary><b>1.</b> <i><b>Create a pack directory</b> that will store all the files for your new pack.</i></summary>

---

- Navigate to your *pack**s** directory* (not to be confused with *pack directory*), this will be a folder contained in the Terra directory (covered in [Enabling Debug Mode](./Config-Development-Introduction#enabling-debug-mode)) under the name `packs`.

- Once you have navigated there, create a new folder. The name of this folder is not important and could be anything you'd like it to be, but for the sake of explanation we will name the folder `tutorial`.

You should now have a folder with the following path:

- Fabric - `/config/Terra/packs/tutorial`

- Bukkit - `/plugins/Terra/packs/tutorial`

From now on we will refer to this folder as the **pack directory**.

---

</details>

<details>

<summary><b>2.</b> <i>Now that you have a pack directory, you will need to <b>create a pack manifest</b>.</i></summary>

---

- Create a new config file([?](#a-note-on-yaml)) within your pack directory called `pack.yml` - this file is your pack manifest.

- Open the pack manifest in your [editor of choice](./Config-Development-Introduction#picking-a-text-editor) and add the following line to the file:

    ```yaml
    id: <Pack Name>
    ```

    > If your editor has a [built-in file explorer](./Config-Development-Introduction#picking-a-text-editor), then you can simply open the pack directory as a project instead of opening singular files.

- Replace `<Pack Name>` with whatever you'd like to use as a pack ID. It's convention to use all uppercase characters and replace spaces with underscores `_`. For this guide we will use the ID `TUTORIAL`.

    Here is an example of what your pack manifest should look like:

    ```yaml
    id: TUTORIAL
    ```

    During [world creation](./Creating-a-Terra-World), this is the ID that will be used to tell Terra what pack to use when generating.

    *Optionally*, you can also add yourself as an author, as well as specify a version for your pack like so:

    ```yaml
    id: TUTORIAL
    author: Astrash # Optional
    version: 1.0.0  # Optional
    ```

You should now have a config file called `pack.yml` inside your pack directory, which contains a pack ID, and optionally an author and or version.

---

</details>

<details>

<summary><b>3.</b> <i>After creating a pack manifest, you will need to <b>create a biome configuration</b> so the generator will have a biome to generate.</i></summary>

---

- Create a new folder within your pack directory called `biomes`.
  
- Within the new `biomes` folder, create a new config file with a name of your choice. This file is your *biome configuration*.

    > The file name of a biome configuration doesn't matter (aside from the extension) but generally you'll want to name it after the name of your biome for organization - for this tutorial we will call the file `first_biome.yml`.

- Add the following lines to your new biome configuration:

    ```yaml
    id: <Biome ID>
    vanilla: <Vanilla Biome ID>
    noise-equation: "-y + <Base Height>"
    palette:
      - "BLOCK:minecraft:<Block ID>": 255
    ```

- **Replace the placeholders** (the things surrounded by angle brackets `< >`) with the relevant information. You're free to use whatever parameters you'd like, but if you need some reference, here is an example with each placeholder filled in, as well as explanations of what each parameter does:

    ```yaml
    id: FIRST_BIOME
        # The ID of your biome.
        # (This is similar to the pack ID in regards to naming conventions)
    
    vanilla: PLAINS
        # A vanilla biome ID - used for aspects like grass color, mob spawning, etc..
        # You can find a list of valid biome IDs on the minecraft wiki:
        # https://minecraft.fandom.com/wiki/Biome#Biome_IDs

    noise-equation: "-y + 64"
        # The mathematical equation that determines the shape of terrain.
        # How exactly this works is a more advanced topic we will cover later on.
        # For now, just know this equation will generate flat land at Y = 64.

    palette:
        # A list of blocks that the terrain in the biome will consist of.
        # In this case, Terra will generate stone everywhere there is land below Y = 255.
      - "BLOCK:minecraft:stone": 255
    ```

You should now have a configuration file located in the biomes folder like so `pack directory/biomes/<biome_name>.yml`, which as been filled out with the relevant information as specified above.

---

</details>

<details>

<summary><b>4.</b> <i>Finally, you will need to <b>add your new biome to the pack manifest</b>, so it can generate in the world.</i></summary>

---

- Open your pack manifest in your editor.

- **Add** the following lines to the config:

    ```yaml
    biomes:
      type: SINGLE
      biome: <Biome ID>
    ```

- **Replace** `<Biome ID>` with the ID you specified in the biome configuration in step 3. Here is an example of what that might look like:

    ```yaml
    id: TUTORIAL
    author: Astrash # Optional
    version: 1.0.0  # Optional

    biomes:
      type: SINGLE
      biome: FIRST_BIOME
    ```

    You will also need to add the following lines in addition to the previous step so Terra will load the pack without errors:

    ```yaml
    noise:
      temporary:       # This line
        type: CONSTANT # and this line
                       # will be removed later
    ```

    In the future, this extra part won't be needed in the step, as this won't be used in a minimal pack. For now, you don't need to worry about its purpose, however we will revisit this later down the line.

You should now have a pack manifest that looks similar to this:

```yaml
id: TUTORIAL
author: Astrash

biomes:
  type: SINGLE
  biome: FIRST_BIOME

noise:
  temporary:
    type: CONSTANT
```

---

</details>

After creating the necessary files above, you should start your server / client and check your console([?](#accessing-console)) to see if your pack has loaded correctly. If everything loaded correctly, you should see this in your console:

```none
[XX:XX:XX INFO]: [Terra] Loading config pack "<PACK NAME>"
[XX:XX:XX INFO]: [Terra] <PACK NAME> <PACK VERSION> by <AUTHOR> loaded in XXXX.XXXXms.
```

# Onwards!

Once you have successfully set up your own Terra config pack, you may continue to the
[Configuring Your Pack](./Configuring-Your-Pack) page, where we will cover pack configuration.
