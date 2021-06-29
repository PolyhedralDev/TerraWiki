```diff
! This section is incomplete !
```

> This guide is intended for the **Bukkit** version of Terra. Guides will be written for other platforms once they
> mature.

###### CONTENTS

- [How Bukkit handles Terra worlds](#how-bukkit-handles-terra-worlds)
  - [The Generator ID Format](#the-generator-id-format)
- [Setting up a Terra World](#setting-up-a-terra-world)
  - [Setting a Generator Through directly through Bukkit](#setting-a-generator-through-directly-through-bukkit)
  - [Setting a Generator Through a World Manager](#setting-a-generator-through-a-world-manager)
    - [Multiverse Core](#multiverse-core)

## How Bukkit handles Terra worlds

In the Bukkit version of Terra, world management is delegated to Bukkit, meaning that generators are configured via Bukkit or a world management plugin, **not** in Terra.

Bukkit uses the concept of *generator ID*s to dictate which worlds will use what generators, which is what this guide
will be centered around configuring.

### The Generator ID Format

For each [Configuration Pack](./Config-Packs), Terra will assign a Bukkit generator ID with the format
`Terra:<PACK ID>`. for example the default pack with the ID `DEFAULT` will have a *generator ID* of `Terra:DEFAULT`.

###### NOTE

>The `<PACK ID>` portion of the generator ID is **case sensitive** meaning that your capitalization within the generator
ID must match that of the pack ID!

## Setting up a Terra World

There are two main ways to manage worlds on a Bukkit server: using a *world
manager* (which is a separate plugin that is designed to well.. manage worlds) - or - directly through Bukkit.
Both methods have their own advantages which we will cover in each section.

###### TIP

>Terra comes pre-packaged with a default pack, which does not require a download/install. **If this is your first time
using Terra** then we suggest using the default, which uses the ID `DEFAULT`.

### Setting a Generator Through directly through Bukkit

If you are not using a world manager, then you will have to manually set up the generator for a world through the
`bukkit.yml` configuration file. This can be found within your server root (the folder that all your server files are
contained in). Something to note is that *without a world manager, you cannot create new worlds!*. The process goes as follows:

1. Stop your server if it is already running.

2. Open the `bukkit.yml` file with any text editor.

3. **Add** the following lines to the end of the file, replacing the placeholders with the relevant information:

    ```yaml
    worlds:
      <WORLD NAME>: # The name of the world folder.
        generator: <GENERATOR ID> # Specifying the generator Bukkit should use for the world.
                                  # For example the default pack would be Terra:DEFAULT
    ```

4. Start your server.

If you have already done this process before and wish to set up another world with a generator, you can simply add it to
the `worlds` key like so:

>```diff
> worlds:
>   already_configured_world_name: 
>     generator: Terra:EXAMPLE_PACK_1
>+  <NEW WORLD NAME>: 
>+    generator: <NEW GENERATOR ID>
>```
>
>Which will look like this once done:
>
>```yaml
>worlds:
>  already_configured_world_name:
>    generator: Terra:EXAMPLE_PACK_1
>  newly_configured_world_name:
>    generator: Terra:EXAMPLE_PACK_2
>```

### Setting a Generator Through a World Manager

Most world managers will have their own methods of setting / changing the generator for a world, however some may not
support the use of custom generators. Please refer to either the documentation or support for your preferred manager if
you're not sure whether custom generators are supported, or how to set up a world with said manager, before consulting
the Terra discord.

Since there are many different plugins with their own process we won't be covering all of them, however we do recommend
using [Multiverse Core](https://github.com/Multiverse/Multiverse-Core/wiki) if you are unsure which manager to use.

###### BACKUP PLAN

> Sometimes world managers will fail to correctly set the generator for a world when loading things up, which can lead
> to potentially damaging issues with your worlds such as broken chunk borders. Because of this we recommend additionally
> configuring a world [directly through Bukkit](#setting-a-generator-through-directly-through-bukkit) once you have set
> it up through a world manager, to serve as a fail-safe in the event that a world manager fails.

#### Multiverse Core

To create a Terra world using Multiverse Core, add the following argument to the end of the
[Multiverse Create Command](https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference#create-command):
`-g Terra:<PACK ID>`.

Here is an example command which will create a world with the name `example_world`, the `NORMAL` world environment, and
a Terra generator using the pack with ID `EXAMPLE`:

`/mv create example_world NORMAL -g Terra:EXAMPLE`
