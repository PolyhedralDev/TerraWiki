# List o' Noise Equations
This page contains a bunch of cool noise equations you may want to use in your world. These are simply examples to get
started with, to make custom noise equations, see [My First Noise Equation](./My-First-Noise-Equation).

All equations shown here are demonstrated with a minimal biome config, using a simple grassy palette and stone slant
palette, with no flora or trees.

## Standard biomes

### Plains-like equation
This equation generates rolling hills for a plains-style biome;
```yaml
noise-equation: "((-((y / base)^2)) + 1) + |(noise2(x, z) / 3) + 0.1|"
```
<details>
<summary>Image</summary>

<img src="https://i.imgur.com/TfSXhp5.png" alt="Plains"/>
</details>

### Plains-like with islands
The plains equation, but with a second layer on top of it that generates floating islands.
```yaml
noise-equation: "if(max(y-96, 0), -(if(max(y-150, 0), |y-150|, |y-150|/16)) - 0.25 + (noise2(x*3, z*3)*3), ((-((y / base)^2)) + 1) + |(noise2(x, z) / 3) + 0.1|)"
```
<details>
<summary>Image</summary>

<img src="https://i.imgur.com/hw2dJPp.png" alt="Plains with Islands"/>
</details>

### Forest equation
Similar to the plains equation, but with more hilly terrain with some areas going below sea level (in this case, I set
sea level to 62.)
```yaml
noise-equation: "((-((y / base)^2)) + 1) + ((noise2(x, z)+0.5) / 2)"
```
<details>
<summary>Image</summary>

<img src="https://i.imgur.com/hw2dJPp.png" alt="Forest"/>
</details>

### Crag equation
Equation that produces 6 levels of terraces, each level using a different noise function.
```yaml
noise-equation: "((-((y / 76)^2)) + 1) + |(noise2(x/1.5, z/1.5)+0.5)|/2.5"
elevation:
  equation: "min(floor(((max(noise2(x/1.5, z/1.5)+0.5, 0)))*8), 6)*5 + if(max(noise2(x/1.5, z/1.5)+0.375, 0), (noise2(3*x+(min(floor(((max(noise2(x/1.5, z/1.5)+0.5, 0)))*8), 6)+1)*1000,3*z))*7, 0)"
  interpolation: true
```
<details>
<summary>Image</summary>

<img src="https://i.imgur.com/vAPRRLw.png" alt="Crag"/>
</details>
