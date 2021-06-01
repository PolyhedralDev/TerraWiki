###  Modelling Terrain Generation

For every block generated in the world the following process is ran:
```none
┌──────────────────┐   ┌────────────┐   ┌───────────────────┐
│ Input parameters │ → > Terrain    > → │ Generated Terrain │
├──────────────────┤   │ Generation │   └───────────────────┘
│ - World Seed     │   │ Algorithm  │
| - X Coordinates  |   └────────────┘
| - Y Coordinates  |
| - Z Coordinates  |
└──────────────────┘
```

This guide is aimed at explaining how the generation algorithm works, and how you
can manipulate it to shape terrain how you see fit.

Something to keep in mind is manipulating terrain generation in Terra is quite math heavy, however if you passed highschool math you should be able to follow.

lets expand upon the basic model:

```none
┌──────────────────┐
│ Input parameters │
├──────────────────┤
│ - World Seed     │
| - X Coordinate   |
| - Y Coordinate   |
| - Z Coordinate   |
└──────────────────┘
      ↓
┌─────────────────────┐
| Generation Equation |
└─────────────────────┘
      ↓
┌──────────────────────────────────┐
│ If output is greater than 0,     │
│ place land, otherwise, place air │
└──────────────────────────────────┘
```

So what is this 'generation equation'?

At its simplest, the generation equation is a set of user defined mathematical equations that accepts a set of world coordinates as an input, and converts that into
a final value, which determines whether terrain exists there or not.

##### Interpolation

When passing coordinates through a generation equation, the hardware Terra is running on will spend a very small fraction of time making the relevant calculations defined by the user. This might be fine for low cost equations *(Cost in this context refers to the time it takes to make a calculation!)*, however for more involved equations, the cost adds up. To lower the overall cost of terrain generation, and therefore speed up world generation, we can use a method called *interpolation*.

What interpolation allows us to do is approximate terrain calculations by sampling a smaller set of coordinates. The approximation comes from filling in the gaps of information by blending between the sampled coordinates.


What if we could lower the overall cost by sampling a smaller set of coordinates, then just fill in the gaps with estimated values?

