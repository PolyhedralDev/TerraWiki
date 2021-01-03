Config packs define a Terra world generator. They are YAML-based, and define all the necessary components to create a
complete world generator with Terra. Users may install multiple config packs simultaneously, allowing the use of
multiple Terra-based generators on the same server.  
Config packs occupy the directory `plugins/Terra/packs/`. 

## Installing a Config Pack
Installing a config pack is easy! First, download your config pack, and place it in the `plugins/Terra/packs/`
directory. Then, open `bukkit.yml` (found in the root directory of your server), and add the following lines to the
end of the file:
```yaml
worlds:
  world_name:
    generator: Terra:CONFIG_ID
```
where `world_name` is the name of the world you wish to assign the pack to, and `CONFIG_ID` is the ID of the pack.
Finally, Stop your server, delete the world's folder, then restart your server.

Pro Tip: Terra comes pre-packaged with a default config. To use the default config without needing to download/install
any other config packs, set the Generator ID to `Terra:DEFAULT`.

## Creating a Custom Config Pack
To use Terra to its full potential, you will probably want to create a custom config pack. While Terra has a very
intuitive config system, this does **not** mean creating a decent config is an easy task! You will need
to put effort towards understanding all of Terra's components in order to be successful. Be sure to **ask for help** if
you need it! We'll be happy to help you in our [Discord server](https://discord.gg/PXUEbbF).