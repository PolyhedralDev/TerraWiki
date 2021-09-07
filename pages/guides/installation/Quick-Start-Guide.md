### Preface

Terra's platform-agnostic API allows us to seamlessly support many Minecraft modding platforms.
The currently supported platfoms include [Fabric](https://fabricmc.net) and the [Bukkit](https://dev.bukkit.org) ecosystem. In regards to Bukkit, we offically support [Paper](https://papermc.io)+ implementations only, including but not limited to [Airplane](https://airplane.gg) and [Purpur](https://purpur.pl3x.net). 


If you have already decided on which platform you wish to use, simply choose the quick
start guide for your platform:

* [Fabric](./Quick-Start-Guide-for-Fabric)

* [Bukkit](./Quick-Start-Guide-for-Bukkit)

---

### Choosing a Platform

If you have not yet decided on a platform, read this section to choose one.

#### Fabric
If you want to run Terra in a singleplayer environment, or on a small server with friends, we recommend using
Fabric. Our Fabric implementation is the most feature-complete, since Fabric gives us freedom to directly
interface with the game in ways impossible on other platforms. Fabric also has *many* optimization mods which we
make sure to support entirely, which allow your game to run extremely well.

#### Bukkit (Paper and friends)
If you're running a large server for lots of people, you'll probably want to use Bukkit, simply because of all
the plugins available for large servers. We do not recommend using Bukkit for a small server, for that, use
[Fabric](#Fabric).

> #### A Note on Bukkit/Spigot/Paper    
> Lots of people get confused about what the difference is between Bukkit, Spigot, and Paper.    
>     
> #### TL;DR: 
> **Bukkit** is an API, a way for developers to interface with and write plugins for the Minecraft server.     
>     
> **Spigot** is an *implementation* of the Bukkit API, it's a platform that allows the Minecraft server to load and run
> Bukkit plugins. Bukkit itself is no longer maintained by the Bukkit team, so now SpigotMC maintains both
> Bukkit (the API) and Spigot (the implementation).     
>     
> ***Paper*** is a *fork* of Spigot, a project based on Spigot that extends its functionality.
> Paper adds many performance optimizations to the Minecraft server, and also extends the Bukkit API.
> 
> #### What does this have to do with Terra?
> We refer to the entire Bukkit ecosystem (Bukkit API, Spigot, Paper and friends...) as *Bukkit*, simply because
> Bukkit is the name of the API.    
> **However:**   
> Terra develops against and tests on Paper. We do this because Bukkit and Spigot simply do not expose the
> required API for Terra to be fully functional. Paper's extended API does. This means that, while Terra will
> still *work* on Spigot, there will be (important) features missing.    
> 
> #### TL;DR: Use Paper, or a fork of Paper.
