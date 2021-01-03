As we have demonstrated in [Noise Equations](./My-First-Noise-Equation), you can determine how your biome looks like with a function. There is however also the possibility to define multiple functions that are used when certain conditions are met, such as for certain heights.

# A simple condition

There is a simple example in the [[nether delta biome config|https://github.com/PolyhedralDev/TerraDefaultConfig/blob/final-config/packs/nether/biomes/delta.yml#L1]]: 

`noise-equation: "if(y, abs(y-64)/128 + noise3(x*1.5, y*2, z*1.5)*3, 1)"`

This example has a so-called "ternary if". It follow the principle `if A is not 0 then do B, otherwise do C`. It's written in the biome config as `if(A, B, C)`. If we translate the noise equation accordingly, we get this here:

if `y is not 0` then use the function `abs(y-64)/128 + noise3(x*1.5, y*2, z*1.5)*3`, otherwise just output `1`
or reversed:
if `y = 0` output `1`, otherwise `abs(y-64)/128 + noise3(x*1.5, y*2, z*1.5)*3`

As we read before, the only question that this function tries to answer is if we have solid blocks or air. Positive outputs return blocks, (e.g. a 1), negative outputs return air.

So in this case we will have a solid layer of blocks at height zero and something else everywhere above that, depending on that function given.
This is a relatively simple example since it includes only a fixed solid layer (good for bedrock for example) and another function. 

# Going all in

We can get much more complex however by providing multiple functions per height. This is demonstrated in the [[plains-sky biome|https://github.com/PolyhedralDev/Terra/blob/92cdcba9f37154e581225100a3cba283560e666e/src/main/resources/default-config/biomes/plains_sky.yml#L4]]:

`noise-equation: "if(max(y-96, 0), -(if(max(y-150, 0), |y-150|, |y-150|/16)) - 0.25 + (noise2(x*3, z*3)*3), ((-((y / 63)^2)) + 1) + |(noise2(x, z) / 3) + 0.1|)"`

which returns this nice landscape with floating islands above:

![floating islands biome](https://i.imgur.com/OvQ7YoW.png)

This one does not only add 2 functions as output but also a function to check which one of the two to pick. Let's take this one apart:

    if 
      max(y-96, 0) is not 0
    then do
      -(if(max(y-150, 0), |y-150|, |y-150|/16)) - 0.25 + (noise2(x*3, z*3)*3)
    else do
      ((-((y / 63)^2)) + 1) + |(noise2(x, z) / 3) + 0.1|)
That looks complicated. Let's go step by step: 
The condition is `max(y-96, 0)`. Let's put that into a [graphing calculator](https://www.desmos.com/calculator) and see what it gives us back:

![condition graph](https://i.imgur.com/otucGow.jpg)

As we can see, every value is zero at and below 96 and positive above it (97 and more). So the condition will do the second function below 97 height and the first at 97 and above. 

The second function is a function that just makes the land below the islands. Let's focus on the first one since it does not only define a surface at a certain height, but on top of it how the underside of the islands looks like.

This is achieved by even another, nested conditional function inside the second argument: `-(if(max(y-150, 0), |y-150|, |y-150|/16)) - 0.25 + (noise2(x*3, z*3)*3)`. So what this does is:

`-(condition) - 0.25 + (noise2(x*3, z*3)*3)`

and that condition is: 

    if
      max(y-150, 0) is not 0
    then do
      |y-150|
    else do 
      |y-150|/16
once we include that output in the function above, we get the following:

    if
      max(y-150, 0) is not 0
    then do
      -(|y-150|) - 0.25 + (noise2(x*3, z*3)*3)
    else do 
      -(|y-150|/16) - 0.25 + (noise2(x*3, z*3)*3)

What this essentially does is giving the floating islands will have a steep bottom (below 150) and a flat top (at and above 151). 

# To sum up:

It's only up to you how complex you get in defining layers in your world. 