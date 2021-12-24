The majority of config development involves creating and manipulating [configuration files](https://en.wikipedia.org/wiki/Configuration_file). *In the context of config development*, configuration files (or simply *configs*) are files contained within a [config pack](./Config-Packs) that define data that Terra uses to determine how worlds generate.

This page will cover how Terra's config system works, including what defines a config file, how data is structured within config files, how Terra interprets that data, and how you can write your own config files.

This page will not cover how to configure specific things, and serves as more of a general guide on configuration.

## Config Files 

### File Formats

Typically, configuration file formats in applications are based on [data-serialization languages](https://en.wikipedia.org/wiki/Serialization) such as JSON, XML, and YAML.

In Terra the file formats used in config packs are flexible, as the functionality for reading and parsing different formats is provided via addons - this allows flexibility for developers to use whatever format they're most comfortable in. Files contained inside a [config pack](./Config-Packs) will only attempt to load as configuration files if a **language addon** is installed that supports the file type. 

### YAML

The standard file format / language supported in Terra configurations is [YAML](https://en.wikipedia.org/wiki/YAML), as support for it comes pre-installed as a language addon with standard Terra releases. Because of this, YAML will be the primary language used in examples and guides on this wiki.

> The YAML language addon attempts to load all text files with the extension `.yml` contained inside config packs, which are required to abide by the [YAML spec](https://yaml.org/spec/) in order to load correctly. 

### Creating a Config File

If you have not installed any other language addons, the assumed process of creating a standard config file simply involves creating a new text file with the extension `.yml`.

Otherwise, when prompted to create a new config file, it is implied that you should create a new file using a format supported by your installed *language addon(s)*.

#### Config File Organization

As a general rule of thumb, a config file's file name and subdirectory within the config pack is mostly ignored by Terra. Because of this you're free to name your config files however you want and organize them in whatever directory structure you'd like. The pack manifest is the one exception, and is required to be defined directly in the pack directory, using the name `pack` (excluding the file extension). 

## Data in Configs 

In this section, we will cover the basic ways data is stored and written inside config files. Because Terra configs are able to be written in multiple languages, we use our own standardized set of terms to reference things that may be named differently between languages.

> If you are already familiar with data structures and data-serialization languages, feel free to skim over this section and skip forward to [the next section](#Terra's-Config-System).

### Types

The main concept to understand is that of **data types** or simply **types**. Types tell us:

- How data should be defined

- What is expected of that data to contain

- How that data will be used

Typically when writing configs the data type will be inferred, but in many cases you need to explicitly tell Terra what type you want to use.

A piece of data that defined in a config is something we will call an **object**. All objects can be categorized by having a type, which is determined by how it is defined in the config. Config files always define a single object, which is what we will call the **top level object**.

To put this information to use, let's create create a new config file in YAML and define our top level object. For our type let's use something called an `Integer`. Integers represent whole numbers and as such, are written as whole numbers like so:

```yaml
42
```

We have now created a config that defines an `Integer` as the top level object, which represents the number `42`, simple right?

Another numerical type that is slightly different from integers is a `Float`. The difference between integers and floats is that floats can represent numbers that contain decimals:

```yaml
3.14159
```

In many cases, we need to distinguish between integers and floats, as it may not be logical to have numbers with decimals for whatever we're configuring, so having two separate types allows for preventing these situations. Typically config parameters that require integers will not accept a float, but parameters that require a float will accept integers.

We can also represent data like text using a type called a `String`:

```yaml
This is a config of type string.
```

Strings are useful for specifying the names of things, and are used everywhere - for example we would need need to use strings to specify what block IDs we want to use for the blocks in a biome.

> Sometimes you may want a `String` that happens to be a sequence of numbers, but don't want it to be interpreted as an `Integer`. To specify that it is of type `String` and not a number line `Integer`, you can *wrap* it in quotes like so:
>
> ```yaml
> "42"
> ```
>

### Maps

By themselves, integers, floats, and strings aren't too useful, until we start assigning labels to them. We can do that using a type called a `Map`.

A map is a *collection of objects*, referred to individually as **values**, where each **value** in the collection is identified by another unique object called a **key**. A key and a value together are called a **key-value pair**.

In YAML, a map is typically defined by writing the key object (almost always a string), proceeded immediately by a colon and a space `: ` which is finally proceeded by the value object. Here we will make a new config where the *top level object* is of type `Map`, and both the *key* and *value* are of type `String`:

```yaml
this is a key: this is a value
```

Since maps are *collections* of objects, we can list multiple key value pairs within the map like so:

```yaml
string: Here is some text.
pi: 3.14159
meaning-of-life: 42
```

This is useful because as explained above, configs only contain *one* top level object. By using maps, we are capable of defining more than one object within a config, as well as being able to identify what each of those objects are using keys.

### Lists

In addition to maps, we can also use a type called a `List` to indicate a collection of data. Lists differ from maps in that each object (called an **item**) in a list is not assigned a unique key, but is instead identified by It's position in the list. Because of this, *the order in which you define each object is significant*, unlike maps.

Another thing to note is generally, every item contained within a list will be of the same type.

In YAML, lists are denoted by prefixing objects with a dash and space `- ` of the same indentation. Here is a config where the *top level object* is a `List`, which contains multiple `String`s:

```yaml
- A string
- Another string
- The final string
```

### Nesting Objects

Because values in maps and items in lists can be of any type, It's possible to nest maps in maps, lists in lists, lists in maps, and so on. 

For simple data types like integers and strings it is clear which key corresponds to which value, as they are typically contained on the same line, but maps and lists may span multiple lines, so we need a way of defining which objects are defined under which keys and items. In YAML, we can specify this kind of relationship via *indentation* - which is simply how many spaces come before the key one a line. We conventionally use two spaces to indicate 'one level' of indentation in YAML configs.

Here is an example of a `Map` contained within the value of another `Map` (which is the top level object):

```yaml
parent-key:
  child-key: value
  sibling-key: another value
```

You can see that the map containing `child-key` and `sibling-key` is indented by two spaces, and is defined under the `parent-key` key, signifying that it belongs to that key.

And here is a `Map` (the top level object) containing a `List` of `String`s:

```yaml
list of strings:
  - item 1
  - item 2
  - item 3
```

### Combining Everything

We can combine these different types to represent complex data structures, here is an example representing a shopping list, and some appointments using everything we have covered thus far:

```yaml
shopping-list:
  - item: 1L Milk
    amount: 2
    cost-per-item: 2.0
  - item: Carton of Eggs
    amount: 1
    cost-per-item: 4.5

appointments:
  - name: Haircut Appointment
    date: 24.04.22
    start-time: 9:45
    end-time: 10:15
  - name: Doctor Appointment
    date: 13.05.22
    start-time: 3:15
    end-time: 4:15
```

In this example, our top level object is of type `Map`, which contains two keys `shopping-list` and `appointments`. The value of both keys are of type `List`, where each *item* in each list contains a `Map`. 

## Terra's Config System

In this section we will cover:

- How Terra defines how configs must be structured.

- How these structured configs are interpreted and utilized by Terra.

- How we can write configs that abide by these prescribed structures.

### Templates

Most configurations follow what we will call a **template**. Templates can be thought of as *special versions of maps* which specify rules on how the contained key-value pairs must be structured. Many different templates are defined by Terra and can each be regarded as their own types, just like strings and integers.

#### Parameters

One of the main components of any given template is It's specification of **parameters**. Parameters are what makes our data useful, as just about all world generation behavior in Terra is determined by parameters.

The specification of a parameter inside a template involves:

- What the name of the parameter is (which is also how it is referenced inside a template).

- Whether the parameter is optional or required.

- What the types can the parameter be set to. 

To set parameters within a template, we use the *key* to denote **which parameter** we want to set, and the *value* to **what the parameter should be set to**. For example, here are a couple parameters specified within a Terra config pack manifest that provides some basic information about the pack: 

```yaml
id: COOL_CONFIG_PACK
version: 1.0.0
author: Anon Y. Mous
```

Parameters may also be nested under multiple maps within a template. For example in the below config, the top level object may abide by a template and specify a parameter that is nested, which we can see has the value `a parameter value`.

```yaml
a:
  nested:
    parameter: a parameter value
```

When referring to parameters within templates, we use a combination of the parent key(s) separated by dots `.` to identify the desired parameter. Using the above config, we would refer to the specified parameter as `a.nested.parameter`.

Some parameter conventions to keep in mind:

- The parent key object(s) of a parameter will always be of type string, where all characters are lowercase, and dashes `-` are used in place of spaces.

- The *type* of the *value object* is considered the *parameter's type*.

### Working With Templates

For the sake of explanation, let's invent a new template to work with called `AnimalTemplate`. The `AnimalTemplate` type specifies:

- A required parameter called `color` that must be of type `string`

- A required parameter called `legs` that must be of type `integer`.

We can then write a new config using our new type assuming our top level object is of type `AnimalTemplate`: 

```yaml
color: grey
legs: 4
```

Because `AnimalTemplate` contains these parameter specifications, if we write a config that does not abide by them, then Terra will fail to load the config. For example, the following config would not load because 1. `color` has not been specified and is a required parameter, and 2. `legs` is not of the required type integer: 

```yaml
legs: two
```

If we were to *document* `AnimalTemplate`, it may look like this:

> ---
>
> ### `AnimalTemplate`
> 
> Defines the attributes of an animal.
> 
> ###### REQUIRED KEYS
> 
> `color`: String
>
> - The color of the animal.
>
>`legs`: Integer
>
> - How many legs the animal has.
>
> --- 

Great, now that we have a template to describe an animal, let's create a new template that describes a zoo of animals:

> ---
>
> ### `ZooTemplate`
>
> Defines a zoo of animals.
> 
> ###### REQUIRED KEYS
>
> `animals`: Map of Strings to [AnimalTemplate](#AnimalTemplate)s
> 
> - A collection of animals.
> 
> ###### OPTIONAL KEYS
> 
> `description`: String
> 
> - A description of the zoo and It's animals.
>
> ---

The interesting thing to note here with `ZooTemplate` is we have now treated `AnimalTemplate` as the required value type of the `animals` parameter. This ability to utilize templates like any other type allows for highly complex config specs, and is one of the key features of Terra's config system.

We can now use `AnimalTemplate`s within our new `ZooTemplate` and create a config able to be read and interpreted by the config loader like so:

```yaml
description: A zoo of Australian animals.
animals:
  koala:
    color: grey
    legs: 4
  kangaroo:
    color: brown
    legs: 2
```

### Config Types

Now that we have covered what templates are, what they do, and how we write configs according to them, we have run into an issue: how does Terra know which template the config should use in the first place? For top level objects, there isn't a template It's contained in to specify the type, so what tells Terra to use `ZooTemplate` instead of any other template?

#### Choosing Templates

This is where the `type` parameter comes in handy. The `type` parameter is a standardized way of specifying the template a `Map` will follow, and is available for use in places where multiple templates may be applicable.

#### Registries

In order to tell Terra we want our config to use `ZooTemplate`, we must set the `type` to something called a **registry key**. Registry keys allow us to use things in a **registry**.

A registry can be thought of as an internal `Map` that Terra uses to store similar things. Because of this, we can also think of registry keys as working the same way as `Map` keys. Many registries exist in Terra and all have different purposes; **registry entries** can be created both by Terra (typically using addons), and by configuration files, depending on use.

In this instance, we will be working with the **config registry**. The config registry contains a bunch of templates like our `ZooTemplate`, which are *registered* internally by Terra. The purpose of the config registry is to allow us to specify a config's template using the `type` key.

Let's assume that `ZooTemplate` has been registered under the name / registry key `ZOO` by Terra. Now what we can do is simply set the `type` parameter to `ZOO` in our config from above, signifying to Terra that our config top level object will be of type `ZooTemplate`:

```yaml
type: ZOO
description: A zoo of Australian animals.
animals:
  koala:
    color: grey
    legs: 4
  kangaroo:
    color: brown
    legs: 2
```

And with that, we have now *designed a new **config type*** that Terra is capable of interpreting.

#### Registering Configs

Great! Now we are able to easily create new zoos just by making new config files for each one, but we have run into another issue: how would each zoo be kept track of? How would we be able to reference specific zoos in other configs? Perhaps we could put all of our zoo configs inside a single `Map` and keep everything inside one config file, and use the key name to refer to each individual zoo - but that could get cumbersome. What if we wanted to make hundreds of zoos, how would we keep them all organized?

To solve this issue, we can make use of registries. Let's introduce a new registry called the **zoo registry**. As a config developer, you won't need to worry about creating registries, as they are provided by addons and the API, so we can assume the zoo registry is created by one of our installed addons. New registry entries inside our new zoo registry can be made by simply creating `ZOO` configs, and we can let Terra handle the registration of each config automatically.

To do this we will also need a way of choosing a *registry key* for each zoo we want to make. We want control over the registry key, so what we can do is introduce a new parameter in `ZooTemplate` called `id`. What `id` does is simply sets the *registry key* of configs when they are automatically registered by Terra, allowing us to access all of our `ZOO` configs from anywhere via the *zoo registry*.

And with this, here is what our final config looks like:

```yaml
id: AUSTRALIAN_ZOO
type: ZOO
description: A zoo of Australian animals.
animals:
  koala:
    color: grey
    legs: 4
  kangaroo:
    color: brown
    legs: 2
```

Now in any other config that requires a zoo, we can specify our `AUSTRALIAN_ZOO` and it will automatically be grabbed from the zoo registry for use!
