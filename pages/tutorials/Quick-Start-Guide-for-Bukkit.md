> This guide is intended for the **Bukkit** version of Terra. See the [Getting Started Page](./Quick-Start-Guide) for
> guides on other platforms.

### Preface

The Bukkit version of Terra supports server platforms such as [Spigot](https://www.spigotmc.org/),
[Paper](https://papermc.io/), and further forks such as [Tuinity](https://github.com/Spottedleaf/Tuinity) and
[Purpur](https://purpur.pl3x.net/). However we highly recommend using Paper, or one of its *sane* forks
(Tuinity, Purpur, etc.), with Terra, since Paper is the Bukkit platform we develop for and support. 
Terra will **not** be fully functional with CraftBukkit/Spigot.

> Some important features require the use of Paper's extended API, and **will** be missing on platforms such as Spigot!

If you have already installed Terra or already know how to install Bukkit plugins, you can skip to
[Setting up a World](#setting-up-a-world).

### Download & Installation

1. Download the latest stable Terra Bukkit release from the SpigotMC website
[here](https://www.spigotmc.org/resources/terra.85151/).

2. Once you have downloaded the `.jar` file from Spigot, simply place the file your `plugins` folder located inside your
server root.

3. Once the plugin has been installed, start your server.

    > If your server is already running, **do not under any circumstances use the /reload command, or any third party
    >plugin
    > to reload your server,** simply restart the server instead!
    [\[Why?\]](https://matthewmiller.dev/blog/problem-with-reload/)

4. Once the the server has restarted, check your console log for the following line to ensure everything has been
installed correctly:

```none
[XX:XX:XX INFO]: [Terra] DEFAULT vX.X.X by dfsek loaded in XXXX.XXXXms.
```

This means that the plugin has loaded successfully, and that the *default* **Configuration Pack** has been unpacked and
loaded correctly without issues.

###### TROUBLESHOOTING INSTALLATION

>If the plugin, or `DEFAULT` pack failed to load, console will display an error message outlining what went wrong. Be
>sure to read through the error and double check if you have made a mistake anywhere.
>
>If you are unable to install plugin successfully, and have attempted to fix any issues yourself, please feel free to
>shoot us a message on our [Discord server](https://discord.gg/PXUEbbF) and provide any relevant error logs!

### Setting up a World

Here we will be replacing the server's default world with new world configured through the Bukkit config to use Terra as
the new generator. Because we are working with changes to worlds **ensure that you have made the necessary backups before making any destructive
changes**!

We do not recommend changing the generator of an *existing world*, as this will produce broken chunk borders between
old and new terrain.

>If you would like to use a world manager like Multiverse Core to create a world instead of manually setting it as
>outlined here, please refer to [Creating a Terra World](./Creating-a-Terra-World).

#### Procedure

1. Ensure your server is not running.

2. If you missed it above, please make a backup of any relevant world folders in your server directory.

    >*If you're using a fresh server you won't need to worry about this*!

3. Configure your server's world to use the new config as a generator:
    1. Navigate to the `bukkit.yml` file which is also contained within your server directory, and open it with any text
    editor.

    1. Assign your new generator to the default world by **adding the following
    lines to the
    end of the file**:

    ```yaml
    worlds:
      <LEVEL NAME>: # The name of this can be found in the 'server.properties' file under
                    # the 'level-name' key. By default, level-name is set to 'world'.
        generator: Terra:DEFAULT
    ```

4. Either delete the existing world folder (the name of this folder is covered above) in your server directory, or
rename it to something else (for example `world_backup`).

5. Boot your server back up.

    > Your server should re-generate the world folder during startup

6. Join your server and check if your new world is using Terra world generation.

If you followed the steps correctly without any errors, then you have successfully set up a server with Terra!

###### TROUBLESHOOTING WORLD SETUP

>In the case that you run into issues during the world set up process, be sure to check you have followed each step
>correctly. Check for any errors in console and try to interpret what the issue might be.
>
>Again you are unable to set up a world successfully, and have attempted to fix any issues yourself, please feel free to
>shoot us a message on our [Discord server](https://discord.gg/PXUEbbF) and provide any relevant information and or
>full server logs!

### Where can I go from here?

If you would like to continue learning more about Terra, or would like to see what else you can get out of it, please
continue on to the [Config Packs](./Config-Packs) page!
