---
layout: base.njk
title: "JSyn Tutorial"
---

Let's take a look for a moment "under the hood" and see how JSyn calculates a sawtooth wave. You won't have to do this in your program. But it will help you understand some important concepts later in this tutorial.

![](/jsyn/tutorial/sawtooth.JPG)

The sawtooth oscillator generates a waveform that rises steadily to +1.0, then snaps down to -1.0, then rises up again. This looks like the edge of a saw hence the name. This waveform turns out to be very easy to create mathematically.

JSyn synthesizes audio by calculating a stereo pair of numbers, called a frame, many times per second. JSyn typically generates frames at a rate of 44100 frames per second like on an audio CD. If we want a sawtooth wave as part of our output then we must calculate a sawtooth wave and mix it by **adding** it to the other audio that we are generating.

The state of the sawtooth waveform is represented by a variable called "phase". For every new frame, we  increment the phase by a value called, appropriately enough, the "phaseIncrement".

```text
phase = phase + phaseIncrement;
```

When the phase goes above +1.0, we have to make it snap back down so we subtract 2.0.

```text
if( phase >= 1.0 ) phase = phase - 2.0;
```

The frequency that we hear is determined by how many times it snaps back per second. The "period" of a waveform is the time it takes for one waveform cycle to occur, which is the inverse of the frequency.

```text
period = 1.0 / frequency;
```

If the phaseIncrement is small it will take a longer time to rise thus the period is inversely proportional to the phaseIncrement. If the frameRate is high, then the calculations occur more often and it will take less time to rise. Thus the period is also inversely proportional to frameRate. The value 2.0 is the amount it has to rise. So:

```text
period = (2.0 / (frameRate * phaseIncrement))
frequency =  (1.0 / period) = ((frameRate * phaseIncrement) / 2.0)
phaseIncrement =  ((frequency * 2.0) / frameRate)
```

When we set the frequency of a SawtoothOscillator to 440.0 Hertz, JSyn converts the 440 Hertz to a phaseIncrement value which it uses for its internal calculations.

```text
phaseIncrement = 0.01995 = ((440.0 * 2.0) / 44100.0)
```

There is often a difference between the internal values that JSyn uses and the more convenient values that the programmers see. We will learn more about this when we start connecting units together.