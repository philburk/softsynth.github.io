---
layout: base.njk
title: "JSyn Tutorial"
---

The same note will sound different when played on a piano or on a violin . The character of a sound that distinguishes it from other sounds is called "timbre". It is pronounced "tam-ber".  The frequency and amplitude of a sound are not usually considered part of its timbre because a violin still sounds like a violin regardless of what notes it plays or how loudly.  Some of the words used to describe timbre include bright, warm, harsh, wavering, noisy, nasal, pure, gradual, metallic, wooden, breathy and wierd.
If frequency is the number of vibrations per second, then you can think of timbre as the shape of the wiggle, and how the shape changes over time.

The sine wave which we heard in the previous tutorials has a very smooth and pure sound. As you saw in the oscilloscope, it has a very rounded and smooth shape. JSyn provides a number of other oscillator classes that produce different waveforms. These other waveforms generally produce a more complex tone that will sound brighter than the sine wave. All of the oscillators can be created in a manner similar to the way we created the Sineoscillator. Here is how to create a SawtoothOscillator which produces a waveform that looks like the edge of a saw:

```text
// create sawtooth oscillator that looks like /|/|/|/
SawtoothOscillator sawOsc = new SawtoothOscillator();
```

All of the JSyn oscillator classes are derived from the SynthOscillator class and have "frequency" and "amplitude" ports. The oscillator classes are: ImpulseOscillator, PulseOscillator, RedNoise, SawtoothOscillator, SineOscillator, SquareOscillator, TableOscillator and TriangleOscillator. You can see what their waveforms look like and sound like on the next page.