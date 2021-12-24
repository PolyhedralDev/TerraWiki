#### What exactly is a config pack?

Config packs are a group of [configuration files](./Config-System#Config-Files) that tell Terra how to generate a world.

Users may install multiple config packs simultaneously, allowing the use of multiple world generators on the same client / sever, with any number of worlds configured to use any of those generators.

Config packs **do not automatically stack**, meaning it is not possible to combine features from multiple packs together without editing and merging them manually. The process of manually editing and merging can be quite complicated as the internal format of config packs is quite flexible - so we do not recommend attempting this unless you know what you're doing!

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

3. Once your pack is installed, load the pack on to the client or server by reloading Terra:

* If your client or server is **not running**, simply start it up.

* If your client or server is **already running**:

  * If you are installing the pack on a **client** or **production server**, restart the client / server.

    > **Do not under any circumstances use the /reload command, or any third party
    >plugin
    > to reload a server,** simply restart the server instead!
        [\[Why?\]](https://madelinemiller.dev/blog/problem-with-reload/)

  * If you are installing the pack on a **test environment** and *debug commands* is enabled (covered in
    [Creating a Pack](./Creating-a-Pack)), you can run the command `/packs reload` to reload Terra.

    > Debug commands should only be enabled on a test environment!

4. Verify the pack has been loaded by Terra. You can check this multiple ways:

  * Run the `/packs` command, the pack ID should be listed if it has loaded correctly.

  * Check your console for the following message:
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
