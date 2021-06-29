#### What exactly is a config pack?

Config packs are a group of configuration files that define a Terra world generator. These configuration files are [YAML](https://en.wikipedia.org/wiki/YAML)
based, and define all the necessary components to create a
complete world generator with Terra. Users may install multiple config packs simultaneously, allowing the use of
multiple Terra-based generators on the same server, with any number of worlds configured to use any of those generators.

#### Where can I find config packs?

You can find a list of community made Terra configuration packs on the [Community Packs](./Community-Packs) page.

#### How do I install a pack?

Config packs are installed similarly to resource packs, which is a fairly straight forward process:

1. Download your config pack, and place it in the directory `plugins/Terra/packs/`, this is where all Terra config packs
will be located, including the `DEFAULT` pack which is automatically installed with Terra.

    ###### NOTE

    >A pack can be contained inside either a folder, or a .zip / .terra archive.

2. Once your pack is installed, load the pack on to the server by reloading Terra:

* If your server is **not running**, simply startup the server.

* If your server is **already running**:

  * If you are installing the pack on a **production environment**, restart the server.

    > **Do not under any circumstances use the /reload command, or any third party
    >plugin
    > to reload your server,** simply restart the server instead!
        [\[Why?\]](https://madelinemiller.dev/blog/problem-with-reload/)

  * If you are installing the pack on a **test environment** and *debug mode* is enabled (covered in
    [Creating a Pack](./Creating-a-Pack)), you can run the command `/terra reload` to reload Terra.

    > Debug mode should only be enabled in a test environment!

3. If your pack has loaded correctly, then you should see this message in console after reloading Terra:

    ```none
    [XX:XX:XX INFO]: [Terra] Loading config pack "<PACK NAME>"
    [XX:XX:XX INFO]: [Terra] <PACK NAME> <PACK VERSION> by <AUTHOR> loaded in XXXX.XXXXms.
    ```

###### TROUBLESHOOTING PACK INSTALLATION

>If your pack failed to load, the console will display an error message outlining why the pack failed to load. Be sure to
>read through the error and double check if you have made a mistake anywhere.
>
> If you're unzipping a pack into a folder, ensure that pack.yml is contained within that folder, and not nested inside
>another folder like so:
>
> ```diff
> + CORRECT
> <PACK NAME>/pack.yml
> 
> - INCORRECT
> <FOLDER>/<PACK NAME>/pack.yml
> ```
>
>If you are unable to install the pack, and have attempted to fix any issues, please feel free to shoot us a message on
>our [Discord server](https://discord.gg/PXUEbbF) and provide any relevant error logs!

#### How can I make my own pack?

If you wish to work on making your own config pack, take a look at our [Creating a Pack](./Creating-a-Pack) guide which
outlines everything you need to know to get started creating your own customized Terra worlds.

[//]: # (#### What if I just want to tweak a pack?)
