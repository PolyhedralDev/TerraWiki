> This guide is intended for the **Fabric** version of Terra. See the [Getting Started Page](./Quick-Start-Guide) for
> guides on other platforms.

If you have already installed Terra or already know how to install Fabric mods, you can skip to
[Setting up a World on a Fabric client](#setting-up-a-world-on-a-fabric-client) or 
[Setting up a World on a Fabric server](#setting-up-a-world-on-a-fabric-server).

### Download & Installation for a Fabric client

1. Download the latest Terra Fabric release from the Modrinth website
[here](https://modrinth.com/mod/terra).

2. Once you have downloaded the `.jar` file from Modrinth, simply place the file into your `mods` folder located inside your Minecraft directory.

    > Make sure you grab the correct version! Don't get the file named forge, or the file listed for a different minecraft version

3. Once the mod has been installed, start your client.

4. Once minecraft has loaded, check your logs for the following line to ensure everything has been
installed correctly:

```none
[XX:XX:XX] [main/INFO]: Loaded config pack "DEFAULT" vX.X.X by dfsek in XXXX.XXms.
```

This means that the mod has loaded successfully, and that the *default* **Configuration Pack** has been unpacked and
loaded correctly without issues.

###### TROUBLESHOOTING INSTALLATION

>If the mod, or `DEFAULT` pack failed to load, console/logs will display an error message outlining what went wrong. Be
>sure to read through the error and double check if you have made a mistake anywhere.
>
>If you are unable to install the mod successfully, and have attempted to fix any issues yourself, please feel free to
>shoot us a message on our [Discord server](https://discord.gg/PXUEbbF) and provide any relevant error logs!

### Setting up a World on a Fabric client

Here we will be creating a new world with Terra generation.

#### Procedure

1. Create a new world just like normal, change the settings to your liking. But don't click "Create New World" yet
2. "Go to More World Options"
3. Press the "World Type" button untill you see "World Type Terra:<CONFIG_ID>", to use the default pack select "Terra:DEFAULT"
4. Press "Create New World" and check if your new world is using Terra world generation.

If you followed the steps correctly without any errors, then you have successfully set up a server with Terra!

###### TROUBLESHOOTING WORLD SETUP

>In the case that you run into issues during the world set up process, be sure to check you have followed each step
>correctly. Check for any errors in console and try to interpret what the issue might be.
>
>Again you are unable to set up a world successfully, and have attempted to fix any issues yourself, please feel free to
>shoot us a message on our [Discord server](https://discord.gg/PXUEbbF) and provide any relevant information and or
>full server logs!



### Download & Installation for a Fabric server

1. Download the latest Terra Fabric release from the Modrinth website
[here](https://modrinth.com/mod/terra).

2. Once you have downloaded the `.jar` file from Modrinth, simply place the file into your `mods` folder located inside your
server root.

    > Make sure you grab the correct version! Don't get the file named forge, or the file listed for a different minecraft version

3. Once the mod has been installed, start your server.

4. Once the the server has restarted, check your console log for the following line to ensure everything has been
installed correctly:

```none
[XX:XX:XX] [main/INFO]: Loaded config pack "DEFAULT" vX.X.X by dfsek in XXXX.XXms.
```

This means that the mod has loaded successfully, and that the *default* **Configuration Pack** has been unpacked and
loaded correctly without issues.

###### TROUBLESHOOTING INSTALLATION

>If the mod, or `DEFAULT` pack failed to load, the logs will display an error message outlining what went wrong. Be
>sure to read through the error and double check if you have made a mistake anywhere.
>
>If you are unable to install the mod successfully, and have attempted to fix any issues yourself, please feel free to
>shoot us a message on our [Discord server](https://discord.gg/PXUEbbF) and provide any relevant error logs!


### Setting up a World on a Fabric server

Here we will be replacing the server's default world with a new Terra world.
Because we are working with changes to worlds **ensure that you have made the necessary backups before making any destructive
changes**!

It is not possible to easily change the generator of an *existing world*, this is a good thing, 
as this will produce broken chunk borders between old and new terrain.

#### Procedure

1. Ensure your server is not running.

2. If you missed it above, please make a backup of any relevant world folders in your server directory.

    >*If you're using a fresh server you won't need to worry about this*!

3. Configure your server's world to use the new config as a generator:
    1. Navigate to the `server.properties` file which is also contained within your server directory, and open it with any text
    editor.

    1. Assign your new generator to the default world by setting level-type to "Terra:<CONFIG_ID>"
      (for the default pack this would be "Terra:DEFAULT") **note that the config ID is case sensitive!**
      >If the "level-type" key doesn't exist, simply add it yourself.

4. Either delete the existing world folder in your server directory or rename it to something else (for example `world_backup`).  
The name of your world can be found under the 'level-name' key, also in server.properties. The default world name is 'world'.

5. Boot your server back up.

    > Your server should re-generate the world folder during startup

6. Join your server and check if your new world is using Terra world generation.

If you followed the steps correctly without any errors, then you have successfully set up a server with Terra!

### Where can I go from here?

If you would like to continue learning more about Terra, or would like to see what else you can get out of it, please
continue on to the [Config Packs](./Config-Packs) page!
