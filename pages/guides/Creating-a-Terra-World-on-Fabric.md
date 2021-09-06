### Setting up a World on a Fabric Client

These instructions are intended for setting up a Terra world for Fabric singleplayer.

#### Procedure

1. From the Minecraft main menu, navigate to the world creation screen via `Singleplayer -> Create New World`.
   
2. Select `More World Options...`.
   
3. Cycle through the `World Type: ...` button until you see `World Type: Terra:<CONFIG_ID>`. To use the default pack select `Terra:DEFAULT`.
   
4. Configure any other world settings you wish to change.
   
5. Press `Create New World` and check if your new world is using Terra world generation.

If you followed the steps correctly without any errors, then you have successfully set up a server with Terra!

###### TROUBLESHOOTING WORLD SETUP

>In the case that you run into issues during the world set up process, be sure to check you have followed each step
>correctly. Check for any errors in console and try to interpret what the issue might be.
>
>Again you are unable to set up a world successfully, and have attempted to fix any issues yourself, please feel free to
>shoot us a message on our [Discord server](https://discord.gg/PXUEbbF) and provide any relevant information and or
>full server logs!

---

### Setting up a World on a Fabric Server

Here we will be replacing the server's default world with a new Terra world.
Because we are working with changes to worlds **ensure that you have made the necessary backups before making any destructive
changes**!

It is not possible to easily change the generator of an *existing world*. This is a good thing,
as this will produce broken chunk borders between old and new terrain!

#### Procedure

1. Ensure your server is not running.

2. If you missed it above, please make a backup of any relevant world folders in your server directory.

   >*If you're using a fresh server you won't need to worry about this*!

3. Configure your server's world to use the new config as a generator:
   
    1. Navigate to the `server.properties` file which is also contained within your server directory, and open it with any text
       editor.

    2. Assign your new generator to the default world by setting the `level-type` key to `Terra:<CONFIG_ID>`
       (for the default pack this would be `Terra:DEFAULT`). The config ID is **case sensitive**, e.g. `Terra:DEFAULT`
       and `Terra:default` are considered two distinct IDs.

   > If the "level-type" key doesn't exist, simply add it yourself.

4. Either delete the existing world folder in your server directory or rename it to something else (for example `world_backup`).  
   The name of your world can be found under the 'level-name' key, also in server.properties. The default world name is 'world'.

5. Boot your server back up.

   > Your server should re-generate the world folder during startup.

6. Join your server and check if your new world is using Terra world generation.

If you followed the steps correctly without any errors, then you have successfully set up a server with Terra!

###### TROUBLESHOOTING WORLD SETUP

>In the case that you run into issues during the world set up process, be sure to check you have followed each step
>correctly. Check for any errors in console and try to interpret what the issue might be.
>
>Again you are unable to set up a world successfully, and have attempted to fix any issues yourself, please feel free to
>shoot us a message on our [Discord server](https://discord.gg/PXUEbbF) and provide any relevant information and or
>full server logs!