### Preface

This guide will outline the process of creating a new Terra configuration pack.

If you haven't already, check out [Config Packs](./Config-Packs) for more information on config packs before continuing.

While Terra has a very intuitive config system, this does **not** mean creating a decent config is an easy task!
Procedural world generation contains a lot of moving parts and you will *need to put in effort* towards understanding
Terra's components if you want to create beautiful worlds.

Creating a pack can be a complicated process, so if you get stuck at any stage, or need some clarification, be sure to
**ask for help** if you need it! We'll be happy to help you in our [Discord server](https://discord.gg/PXUEbbF).

### Preparation

This section goes over the basic setup for a Terra configuration pack, including duplicating an existing pack to serve
as a base, and setting up a workspace for working with packs. Before you begin, ensure you have a suitable test server
with Terra installed.

```diff
! Do not follow the following steps on any live production environment !
```

1. If you haven't already, start up your test server and ensure the plugin has been set up correctly, otherwise check
out the [Quick Start Guide](./Quick-Start-Guide) before continuing.

2. Open `plugins/Terra/config.yml` in a text editor, and set debug to true like so:

    ```yaml
    debug: true
    ```

3. Duplicate an existing pack to serve as a template:

    1. Navigate to the packs directory located at `plugins/Terra/packs`

    2. Extract the contents of the `default.zip` directory into a new folder.

        ###### TEMPLATE PACK

        > Alternatively you can use the template configuration pack provided by Astrash, which provides minimal
        configurations and annotated explanations. The GitHub repository can be found
        [here](https://github.com/Astrashh/TerraTemplatePack).

    3. Rename this new folder whatever want, this tutorial will call the new config folder `example`.

4. Open the new pack directory in a text editor of your choice.

    ###### EDITOR TIP

    > We highly recommend using a text editor or IDE such as VSCode or InteliJ, which provides support for YAML syntax
    > highlighting and file browsing support, as it will make things much more streamlined and easy for you, the config
    > editor!

5. Set up an ID for your new pack:

    1. In your text editor, open up `pack.yml`, found in the root directory of the new config pack.

    2. Within `pack.yml`, Change the `id` to the ID you wish to assign your
config, as well as the `author` to your username like so:

    ```yaml
    id: EXAMPLE_ID
    # Replace 'EXAMPLE_ID' with your desired pack ID

    author: dfsek
    # Replace 'dfsek' with your username
    ```

6. Configure your test server's world to use the new config as a generator:
    1. Open `bukkit.yml` (Found in the root of the server).

    2. Assign your new generator to the default world  by **adding the following lines to the
    end of the file**:

    ```yaml
    worlds:
      <LEVEL NAME>: # The name of this can be found in the 'server.properties' under
                    # the 'level-name' key. By default, level-name is set to 'world'.
        generator: Terra:EXAMPLE
        # Replace 'EXAMPLE' with the ID of your config.
    ```

7. Stop your test server, delete the `world` folder, and start your server again. Your test server will now be using
your new config pack!

#### Let's Recap

* You now have a copy of the default / template config, called `EXAMPLE`.

* The pack is running on your test server, and the default world is assigned to the
generate using the pack.

* You have a workspace in a [suitable text-editor](#editor-tip) set up to work on this new config.

### Onwards!

Once you have successfully set up your own Terra config pack, you may continue to the
[Configuring Your Pack](./Configuring-Your-Pack) page, where we will cover pack configuration.
