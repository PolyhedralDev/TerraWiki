Noise in Terra generally means either Simplex or Simplex Fractal noise. Simplex noise is a form of Gradient noise.   

## Gradient Noise
A gradient noise function is a mathematical formula to produce consistent pseudorandom values based on input
coordinates, with gradients between points. Identical noise functions with the same seed will always produce the same
values for a pair of coordinates.

## Simplex Noise
Simplex is a gradient noise function created by Ken Perlin to address the limitations in his older noise function,
Perlin noise. Simplex is more performant than Perlin noise, especially in higher dimensions, and has fewer artifacts.
Terra uses redistributed, normalized Simplex noise for [biome selection](./Biome-Selection).   
Here's an example of Simplex noise:   
<img src="https://i.imgur.com/VyJmIfL.png" alt="Simplex Noise" width="200"/>   
Each point on the image has a grayscale value equal to the value of the noise function at the image coordinates.
As you can see, the values are pseudorandom, yet gradients exist between them.

### Frequency
Frequency is the amount that changes in coordinates affect changes in noise levels. Essentially, frequency can be
thought of as "zooming" th noise in or out. Here are some examples:    

* Frequency: 0.005:   
<img src="https://i.imgur.com/VyJmIfL.png" alt="Simplex Noise" width="200"/>   

* Frequency: 0.01:   
<img src="https://i.imgur.com/yJQc3y2.png" alt="Simplex Noise" width="200"/>  

* Frequency: 0.02:   
<img src="https://i.imgur.com/ZAhpq4y.png" alt="Simplex Noise" width="200"/>   



As the frequency increases, the noise "zooms out," resulting in faster changes.
## Simplex Fractal Noise
In some applications, Simplex noise is too smooth to produce "realistic" results. Looking at the images above, you may
notice that they are quite "blobby." In some cases, more randomness is desirable. This is where Simplex Fractal noise
is useful. Simplex Fractal noise stacks a number of Simplex noise functions at different frequencies on top of each
other, to produce a noisier result.

* 1 Octave:   
<img src="https://i.imgur.com/VyJmIfL.png" alt="Simplex Noise" width="200"/>   

* 2 Octaves:   
<img src="https://i.imgur.com/3rL2vs9.png" alt="Simplex Noise" width="200"/>   

* 3 Octaves:   
<img src="https://i.imgur.com/3rL2vs9.png" alt="Simplex Noise" width="200"/>   

* 4 Octaves:   
<img src="https://i.imgur.com/JDkFc8l.png" alt="Simplex Noise" width="200"/>   



Remember that the number of octaves is the number of noise functions stacked on top of each other, and each additional
function has a lower frequency, and is weighted lower.   
Terra uses Simplex Fractal noise for erosion and terrain generation.