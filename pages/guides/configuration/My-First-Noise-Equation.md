# Biome Noise Equation
At the heart of Terra's terrain generation is the `noise-equation` key found in all biome configs. Here's an example:
```yaml
noise-equation: "((-(y / 62)^2) + 1) + ((noise2(x, z)+0.5) / 3)"  
```

This page is a tutorial, which will demonstrate how to create an equation to produce your desired type of terrain.  

## Oh no, math! What does it mean?
The principle behind the noise equation is very simple. The equation takes in 3 variables, `x`, `y` and `z`, and converts them into an output. When Terra is generating the chunk base (Base generation is the first phase of terrain generation, where the shape of the terrain is defined), the current coordinates are fed into this equation. If the result is positive, the location is solid. If the result is negative, the location is air.

## Example
Let's start with a very simple noise equation:
```yaml
noise-equation: "(-y/64)+1"
```
This is simply a linear equation, with no noise involved. The result this gives is incredibly boring, a perfectly flat world:
<img src="https://i.imgur.com/d2LmVHh.png" alt="Flat World"/>
Notice that ground level is at Y=64, since when a value lower than 64 is passed into the equation for Y, the result is positive, causing all blocks at Y=63 and lower to be solid. If you graph the equation, you can clearly see the relationship:
<img src="https://i.imgur.com/XSiFiWv.png" alt="Graph"/>
### This is boring. How can we make actual terrain?
With noise, of course!  
Terra contains 2 custom functions you can include in your equations, `noise2(x, z)` and `noise3(x, y, z)`. These functions exist to, as their names suggest, provide noise to use in your terrain. They provide noise from a [Simplex](https://en.wikipedia.org/wiki/Simplex_noise) Octave generator, seeded with the world seed, with octaves and frequencies defined in Terra's world config. 
Below is an example of Simplex Noise. As you can see, the noise creates a gradient.  
<img src="https://i.imgur.com/itEeniM.png" alt="Simplex Noise" width="200"/>  
This is useful in terrain generation, as it allows variation to be added to terrain. Let's start with a simple 2D Simplex height map! 
```yaml
noise-equation: "(-y/64)+1 + noise2(x, z)"
```
This equation adds the 2D Simplex noise fetched from the X and Z coordinates to the linear equation we defined previously. Now, our world looks like this:  
<img src="https://i.imgur.com/PoPslME.png" alt="Noise Terrain"/>
### Hold on, what exactly is happening there?
Basically, since we are adding the result of the Simplex Noise (Which ranges from -1.0 to 1.0 and follows a [Gaussian Distribution](https://en.wikipedia.org/wiki/Normal_distribution)) to the original equation, we are "offsetting" the base height (Y=63) of the terrain by whatever the result of the Simplex operation is. This creates nice hills/mountains in our terrain, and grants us many configuration possibilities!
### Too hilly. How can we get flatter terrain?
Divide the noise result by a number, of course! Here's a new equation, which divides the noise value by 2:
```yaml
noise-equation: "(-y/64)+1 + noise2(x, z)/2"
```
And here's what the terrain looks like now: 
<img src="https://i.imgur.com/NjFOpkP.png" alt="Noise Terrain"/>

## Improving the base equation
I have found that for most cases, a linear base equation is not ideal. For a majority of my biomes, I use a quadratic equation as a base.
Specifically, I use:
```yaml
noise-equation: "-((y / 64)^2) + 1"
```
<img src="https://i.imgur.com/a3W4vHC.png" alt="Noise Terrain"/>  
The above equation gives a similar result to the linear equation, except it "drops off" faster at higher Y-values. Here's the terrain generated from the equation:

```yaml
noise-equation: "-((y / 64)^2) + 1 + noise2(x, z) / 2"
```

<img src="https://i.imgur.com/k9oGa2u.png" alt="Noise Terrain"/>

Add some flora and trees, and we now have a pretty nice Plains biome!
```yaml
noise-equation: "-((y / 64)^2) + 1 + noise2(x, z) / 2"
id: "PLAINS"

palette:
  - GRASSY: 255
vanilla: PLAINS

erodible: true

flora:
  chance: 60
  attempts: 1
  items:
    TALL_GRASS:
      weight: 160
      y:
        min: 62
        max: 84
    GRASS:
      weight: 100
      y:
        min: 62
        max: 84
    POPPY:
      weight: 8
      y:
        min: 62
        max: 84

trees:
  density: 20
  items:
    OAK:
      weight: 1
      y:
        min: 58
        max: 72
```
<img src="https://i.imgur.com/Ml3lxUI.png" alt="Noise Terrain"/>

If you want to go to the next level, please take a look at [[Multi-layered-Noise-Equations]]