#### What exactly is a config pack?

Config packs are a group of configuration files define a Terra world generator. These configuration files are [YAML](https://en.wikipedia.org/wiki/YAML)
based, and define all the necessary components to create a
complete world generator with Terra. Users may install multiple config packs simultaneously, allowing the use of
multiple Terra-based generators on the same server, with any number of worlds configured to use any of those generators.

#### Where can I find config packs?

You can find a list of community made Terra configuration packs on our [Community Packs](./Community-Packs) page.

#### How do I install a pack?

Config packs can be installed similarly to resource packs, which is a fairly straight forward process. First, download
your config pack, and place it in the
directory `plugins/Terra/packs/`, this is where all Terra config packs will be located, including the `DEFAULT` pack
which is automatically installed with Terra.

> NOTE - A pack can be either contained inside a simple folder, or within an archive such as a .zip file.

Once your pack is installed, you should verify that it has loaded correctly:

* If your server **is not** running, simply start it up, and check the start up message in console, which will let you
know which packs have loaded in.
* If your server **is already** running, then simply enter the command `/terra reload` and check console.

If your pack has loaded correctly, then you should see this message in console:

```none
[XX:XX:XX INFO]: [Terra] Loading config pack "<PACK NAME>"
[XX:XX:XX INFO]: [Terra] <PACK NAME> <PACK VERSION> by <AUTHOR> loaded in XXXX.XXXXms.
```

###### TROUBLESHOOTING PACK INSTALLATION

>If your pack failed to load, console will display an error message outlining why the pack failed to load. Be sure to
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
