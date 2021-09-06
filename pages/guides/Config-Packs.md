#### What exactly is a config pack?

Config packs are a group of configuration files that define a Terra world generator. These configuration files are [YAML](https://en.wikipedia.org/wiki/YAML)
based, and define all the necessary components to create a
complete world generator with Terra. Users may install multiple config packs simultaneously, allowing the use of
multiple Terra-based generators on the same server, with any number of worlds configured to use any of those generators.

#### Where can I find config packs?

You can find a list of community made Terra configuration packs on the [Community Packs](./Community-Packs) page.

#### How do I install a pack?

Config packs are installed similarly to resource packs, which is a fairly straight forward process:

1. Download your config pack, and place it in the *packs directory*. This will differ slightly between platforms:

  - Fabric - `/config/Terra/packs`

  - Bukkit - `/plugins/Terra/packs`

2. Ensure the correct directory structure:

* A pack can be contained inside either a folder, or a .zip / .terra archive within the packs directory.

* The pack manifest or `pack.yml` must be contained directly inside the folder / archive like so:

  ```diff
  + CORRECT
  /packs/<PACK NAME>/pack.yml

  - INCORRECT
  /packs/<FOLDER>/<PACK NAME>/pack.yml
  ```

* If this is not the case, reorganize the files such that the folder / archive containing the pack manifest is directly inside the packs directory, rather than being nested inside another directory.

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
>If you are unable to install the pack, and have attempted to fix any issues, please feel free to shoot us a message on
>our [Discord server](https://discord.gg/PXUEbbF) and provide any relevant error logs!

#### How can I make my own pack?

If you wish to work on making your own config pack, take a look at our [Config Development Introduction](./Config-Development-Introduction) which
outlines everything you need to know to get started creating your own customized Terra worlds.
