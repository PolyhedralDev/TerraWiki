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
[Creating a Terra World on Bukkit](./Creating-a-Terra-World-on-Bukkit).

### Download & Installation

1. Download the latest stable Terra Bukkit release from the SpigotMC website
[here](https://www.spigotmc.org/resources/terra.85151/).

2. Once you have downloaded the `.jar` file from Spigot, simply place the file your `plugins` folder located inside your
server root.

3. Once the plugin has been installed, start your server.

    > If your server is already running, **do not under any circumstances use the /reload command, or any third party
    >plugin
    > to reload your server,** simply restart the server instead!
    [\[Why?\]](https://madelinemiller.dev/blog/problem-with-reload/)

4. Once the the server has restarted, check your console log for the following line to ensure everything has been
installed correctly:

```none
[XX:XX:XX INFO]: [Terra] DEFAULT vX.X.X by dfsek loaded in XXXX.XXXXms.
```

This means that the plugin has loaded successfully, and that the *default* **Configuration Pack** has been unpacked and
loaded correctly without issues.

After you have successfully installed Terra on your Bukkit server, refer to
[Creating a Terra World on Bukkit](./Creating-a-Terra-World-on-Bukkit) for
further instructions.

###### [TROUBLESHOOTING INSTALLATION](./Quick-Start-Guide#troubleshooting-installation)

### Where can I go from here?

If you would like to continue learning more about Terra, or would like to see what else you can get out of it, please
continue on to the [Config Packs](./Config-Packs) page!
