This guide will outline the process of duplicating an existing Terra configuration pack for use in personal modification. This guide will not cover how to modify specific features of world generation, only the initial set up required to make edits. If you haven't already, please read the [Config Development Introduction](./Config-Development-Introduction) for more information before continuing.

> If you want to **create a new pack from scratch** rather than modifying an existing one, please refer to **[this](./Creating-a-Pack)** guide instead.

## Procedure

The following steps will walk you through how to duplicate an existing config pack, and set it up for your own use. Click each step to expand for instructions.

<details>

<summary><b>1.</b> <i><b>Navigate to the packs directory.</b></i>

</summary>

---

This will be dependent on what platform you're using:

   - Forge & Fabric - `/config/Terra/packs`

   - Bukkit - `/plugins/Terra/packs`

---

</details>

<details>

<summary><b>2.</b> <i><b>Create a new pack directory</b> for your new modified pack.</i></summary>

---

This involves simply creating a new folder inside the `packs` folder. The name of this folder doesn't matter, so you're free to name it whatever you feel is suitable. This folder will henceforth be referred to as a **pack directory**.

---

</details>

<details>

<summary><b>3.</b> <i><b>Extract the contents of the specified pack</b> into your new pack directory.</i></summary>

---

If you just wish to modify the `DEFAULT` config pack, extract the contents of `default.zip` which will already be contained inside the pack directory. Otherwise, you can make a copy of whatever other pack you wish to modify.

###### TEMPLATE PACK

Alternatively you can use the template config pack if you want a simple baseline configuration to experiment with. In addition to being very simple, the template pack also contains annotated explanations for what many options do. The GitHub repository can be found
[here](https://github.com/Astrashh/TerraTemplatePack).

---

</details>

<details>

<summary><b>4.</b> <i>Ensure you have the <b>correct directory structure</b>.</i></summary>

---

Terra requires a file called the **pack manifest** to be contained directly inside your pack directory to load correctly. The pack manifest specifies global pack wide configuration options, and will always have the file name `pack.yml`.

You should verify that the pack manifest is correctly nested like so:

```diff
+ CORRECT
/packs/<PACK DIRECTORY>/pack.yml

- INCORRECT
/packs/<FOLDER>/<PACK DIRECTORY>/pack.yml   
```

---

</details>

<details>

<summary><b>5.</b> <i><b>Edit the pack manifest</b> to fill out your information.</i></summary>

1. Set up an ID for your new pack:

    1. In your [text editor of choice](./Config-Development-Introduction#Picking-a-Text-Editor), open up `pack.yml`, found in the root directory of the new config pack.

    2. Within `pack.yml`, Change the `id` to the ID you wish to assign your
config, as well as the `author` to your username like so:

    ```yaml
    id: EXAMPLE_ID
    # Replace 'EXAMPLE_ID' with your desired pack ID

    author: dfsek
    # Replace 'dfsek' with your username
    ```
---

</details>

<details>

<summary><b>6. </b> <i><b>Create a new world</b> using your new pack.</i></summary>

---

The process of creating a new world will differ between platforms, refer to [Creating a Terra World](./Creating-a-Terra-World) for instructions for your config development platform of choice. This world will be used for previewing any changes made to your pack and should be considered disposable.

You should now have a setup with a new pack duplicated from an existing one, in which you're able to make your own modifications and preview them in the world you just made.

Once you're finished making your changes, you're free to treat this new pack as any other and use it for your own needs!

---

</details>
