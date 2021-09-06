## How Bukkit handles Terra worlds

In the Bukkit version of Terra, world management is delegated to Bukkit, meaning that generators are configured via
Bukkit or a world management plugin, **not** in Terra.

Bukkit uses the concept of *generator ID*s to dictate which worlds will use what generators, which is what this guide
will be centered around configuring.

With bukkit, a singular world does not refer collectively to the Overworld, Nether, and End. Instead, each dimension
is considered a separate world. Because of this each world and by extension each dimension can be assigned different
world generators.

### The Generator ID Format

For each installed [Configuration Pack](./Config-Packs), Terra will assign a Bukkit generator ID with the format
`Terra:<PACK ID>`. for example the default pack with the *pack ID* `DEFAULT` will have a *generator ID* of `Terra:DEFAULT`.

Pack IDs are **case sensitive** meaning that your capitalization within the generator
ID must match that of the pack ID, e.g. `Terra:DEFAULT` and `Terra:default` are considered two distinct IDs.

## Setting up a Terra World

There are two main ways to manage worlds on a Bukkit server: using a **world
manager** (which is a separate plugin that is designed to well.. manage worlds), or **directly through Bukkit**.
Both methods have their own advantages which we will cover in each section.

Because we are working with changes to
worlds **ensure that you have made the necessary backups before making any destructive changes**! We do not recommend
changing the generator of an *existing world*, as this will produce broken chunk borders between old and new terrain.

#### First Time Users

Terra comes pre-packaged with a default pack, which does not require a download/install. **If this is your first time
using Terra** then we suggest using the default pack, which uses the pack ID `DEFAULT`. For a basic world setup, we
recommend simply setting the generator directly through Bukkit.

### Setting a Generator Through directly through Bukkit

If you are not using a world manager, then you will have to manually set up the generator for a world through the
`bukkit.yml` configuration file. This file can be found within your server root (the folder that all your server files are
contained in). Something to note is that *without a world manager, you cannot create new worlds!*

#### Replacing the Default World With a Terra World

Here we will be replacing the server's default world with new world configured through the Bukkit config to use Terra as
the new generator. 

>If you would like to use a world manager like Multiverse Core to create a world instead of manually setting it as
>outlined here, please refer to [Creating a Terra World](./Creating-a-Terra-World).

##### Procedure

1. Ensure your server is not running.

2. If you missed it above, please make a backup of any relevant world folders in your server directory.

   >*If you're using a fresh server you won't need to worry about this*!

3. Configure your server's world to use the new config as a generator:
   
    1. Navigate to the `bukkit.yml` file which is also contained within your server directory, and open it with any text
       editor.

    2. Assign your new generator to the default world by **adding the following lines to the end of the file**:

    ```yaml
    worlds:
      <LEVEL NAME>:
        generator: Terra:DEFAULT
    ```
   
4. Replace `<LEVEL NAME>` with the server's configured `level-name`. This can be found in the `server.properties` file under
   the 'level-name' key. By default, level-name is set to `world`.

5. Either delete the existing world folder (the name of this folder is covered above) in your server directory, or
   rename it to something else (for example `world_backup`).

6. Boot your server back up.

   > Your server should re-generate the world folder during startup.

7. Join your server and check if your new world is using Terra world generation.

If you followed the steps correctly without any errors, then you have successfully set up a server with Terra!

#### Setting up Another World

If you have already done this process before and wish to set up another existing world (such as the Nether or End) with
a new generator, you can simply add the world to the `worlds` key like so:

>```diff
> worlds:
>   already_configured_world_name: 
>     generator: Terra:EXAMPLE_PACK_1
>+  <NEW WORLD NAME>: 
>+    generator: <NEW GENERATOR ID>
>```
>
>Here is an example with two worlds configured:
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
> it up through a world manager, to serve as a fail-safe in the event that a **world manager fails**.

#### Multiverse Core

To create a Terra world using Multiverse Core, add the following argument to the end of the
[Multiverse Create Command](https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference#create-command):
`-g Terra:<PACK ID>`.

Here is an example command which will create a world with the name `example_world`, the `NORMAL` world environment, and
a Terra generator using the pack with ID `EXAMPLE`:

`/mv create example_world NORMAL -g Terra:EXAMPLE`

###### [TROUBLESHOOTING WORLD SETUP](./Creating-a-Terra-World#troubleshooting-world-setup)
