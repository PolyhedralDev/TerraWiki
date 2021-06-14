
1. Duplicate an existing pack to serve as a template:

    1. Navigate to the packs directory located at `plugins/Terra/packs`

    2. Extract the contents of the `default.zip` directory into a new folder.

        ###### TEMPLATE PACK

        > Alternatively you can use the template configuration pack provided by Astrash, which provides minimal
        configurations and annotated explanations. The GitHub repository can be found
        [here](https://github.com/Astrashh/TerraTemplatePack).

    3. Rename this new folder whatever want, this tutorial will call the new config folder `example`.

2. Open the new pack directory in a text editor of your choice.

3. Set up an ID for your new pack:

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
