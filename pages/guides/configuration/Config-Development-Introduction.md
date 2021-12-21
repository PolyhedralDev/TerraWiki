This section goes over some general information, and the basic setup preceding actual config pack development, including setting up a test server / client and an appropriate development workspace. ([Unsure what a Config Pack is?](./Config-Packs))

### Setting Up Your Test Environment

Before beginning development on a new pack, you will need a suitable server or client to test with. We recommend using a [Fabric](https://fabricmc.net/) client to develop config packs on, however this choice is up to you. You can refer to the [Quick Start Guide](./Quick-Start-Guide) to find instructions on how to set up Terra for each platform.

```diff
! Do not follow the the rest of this guide on any live production environment !
```

#### Accessing Console

Once you have Terra running on your platform of choice, you should ensure you have access to your console. This will be dependent on the platform you're running Terra on, as well as the launcher or wrapper you start it from. We won't be covering how to find the console on every platform as that is outside the scope of this guide.

<details>
<summary><u>Mojang Minecraft Launcher</u></summary>

1. Start the launcher and navigate to the settings page by clicking on this button in the bottom left:

    <img src="images/pack-dev/mojang-launcher/settings.png">

2. Enable displaying the output log on game startup here:

    <img src="images/pack-dev/mojang-launcher/open_output_log.png">

3. A window with the console log will now open when you start Minecraft.

</details>

<details>

<summary><u>MultiMC Launcher</u></summary>

1. Open up the MultiMC settings window

2. Enable console log display on launch:

    <img src="images/pack-dev/multimc-launcher/settings_enable_console.png">

3. A window with the console log will now open when you start Minecraft.

</details>

### Picking a Text Editor

When developing config packs, a text editor will be the main tool you'll use, so it's important that you use a suitable one for the job. You're free to use any text editor you're comfortable with, but we *highly* suggest using one with the following features:

<details>

<summary><u>YAML Syntax Highlighting</u></summary><br>

> Having syntax highlighting in a text editor will make understanding and writing configs much easer, as you will be able to tell at a glance how things are structured. To emphasize the point, here is a comparison of a config with and without syntax highlighting:
>
> `Syntax Highlighting | No Syntax Highlighting`
>
> <img src="images/pack-dev/editor/yaml_syntax_highlighting_comparison.png" width="75%">

</details>

<details>

<summary><u>Built In File Explorer</u></summary><br>

> Using a text editor which lets you open entire folders as projects rather than just individual files will make pack development more streamlined and convenient. The ability to quickly swap between configs, view your pack hierarchy at a glance, and manage subdirectories within your text editor is a must if you want to get things done conveniently. This will save you plenty of time not having to manage both an external file explorer on top of text editor tabs and or instances.
>
> <img src="images/pack-dev/editor/file_explorer.png" width="40%">

</details>

#### Recommended Editors

- [**VSCode**](https://code.visualstudio.com/)

- [**IntelliJ IDEA Community Edition**](https://www.jetbrains.com/idea/download/)

### Locating the Terra Directory

You will need to know where the Terra directory is located, as this will be where all the files relevant to config development go. This is dependent on platform:

- Fabric - `/config/Terra/`

- Bukkit - `/plugins/Terra`

Within this directory are two subdirectories:

- `packs` - Contains all your installed config packs. By default, Terra will come pre-installed with a config pack under the file name `default.zip`.

- `addons` - Contains all your installed addons. Similarly to the default pack, Terra will also come pre-installed with a set of *Core Addons*, which are modular components that
  make up the majority of Terra's functionality.

### Beginning Config Development

From this point on, you have the option of either beginning a new pack from scratch, or modifying an existing pack:

#### [Creating a New Pack From Scratch](./Creating-a-Pack)

> Starting from nothing is a great way to understand what every part of the process entails. You will learn how each part of config development connects together to construct a fully fledged world generator. If you want to make something totally unique and personalized to your exact spec or just want to learn how packs work, we recommend following this guide.

<br>

#### [Modifying an Existing Pack](./Modifying-a-Pack)

> Making changes to an existing pack is a more hands off approach where most of the heavy lifting has been done for you, great for if you just want to tweak a couple small details here and there. This guide won't explain as much as the 'from scratch' guide, so if you're having difficulties understanding what things do, we recommend following that in addition to this guide.
