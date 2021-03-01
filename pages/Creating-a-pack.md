# Preface

This guide will outline the process of starting a new Terra configuration pack.  
This guide assumes that you have an understanding of how to set up and configure minecraft servers.

If you haven't already, check out [Config Packs](./Config-Packs) for more information on config packs before continuing.

> This guide is a work in progress. It is likely to be out of date.

# Preparation

This section goes over the basic setup for a Terra configuration pack, including duplicating an existing pack to serve as a base, and setting up a workspace for working with packs. Before you begin, ensure you have a suitable test server with Terra installed.

> Do not follow the following steps on any production server!

1. If you haven't already, start up your test server and ensure the plugin loads correctly.

2. Open `plugins/Terra/config.yml` in a text editor, and set debug to true like so:
    ```yaml
    debug: true
    ```

3. Duplicate an existing pack to server as a template:

    1. Navigate to the packs directory located at `plugins/Terra/packs`

    2. Extract the contents of the `default.zip` directory into a new folder. 

        > Alternatively you can use the template configuration pack provided by Astrash, which provides minimal configurations and annnotated explanations. The GitHub repository can be found [here](https://github.com/Astrashh/TerraTemplatePack).

    3. Rename this new folder whatever want, this tutorial will call the new config folder `example`.

4. Open the new pack directory in a text editor of your choice.

    > We highly recommend using a text editor like VSCode that provides support for YAML syntax highlighting and file browsing support!

5. Set up a new ID for your new pack:

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

    2. Assign your new generator to the default world (known simply as *world*) by **adding the following lines to the end of the file**:
    ```yaml
    worlds:
      world:
        generator: Terra:EXAMPLE
        # Replace 'EXAMPLE' with the ID of your config.
    ```
7. Stop your test server, delete the `world` folder, and start your server again. Your test server will now be using
your new config pack!

### Let's Recap
You now have a copy of the default or template config , called `EXAMPLE`. It's running on your test server, and is assigned to the
overworld. You have a workspace in VS Code set up to work on this new config.