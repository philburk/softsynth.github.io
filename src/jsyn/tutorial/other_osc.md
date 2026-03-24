---
layout: base.njk
title: "JSyn Tutorial"
---

Let's take another look "under the hood" and see how JSyn generates some of the other waveforms.  It turns out that the sawtooth wave is the starting point for generating all the other waveforms.

Remember, you won't have to use these techniques in your programs. You just create a SquareOscillator, or some other oscillator, and use it. But this page will give you a better understanding of what you are getting.

![](/jsyn/tutorial/square.JPG)Here we can see a square wave in red superimposed over a sawtooth wave. Notice that when the sawtooth wave is above zero that the square is high, and vice versa. So to make a square wave, JSyn first generates a sawtooth then does this:

```text
if( saw > 0.0 ) square = 1.0;
else square = -1.0;
```

![](/jsyn/tutorial/triangle.JPG)Here we can see a triangle wave in red superimposed over a sawtooth wave. Notice that when the sawtooth wave is above zero, that the triangle wave is descending from +1.0 to -1.0. Here is how JSyn generates a triangle wave from a sawtooth wave:

```text
if( saw >= 0.0 ) triangle = 1.0 - ( 2.0 * saw );
else triangle = 1.0 + ( 2.0 * saw );
```

![](/jsyn/tutorial/sine.JPG)For the sine wave, JSyn simply applies the trigonometric function to the sawtooth value:

```text
sineWave = sin( PI * saw );
```