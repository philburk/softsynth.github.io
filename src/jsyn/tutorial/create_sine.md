---
layout: base.njk
title: "JSyn Tutorial"
---

JSyn provides several classes of objects that can create and modify sound. These are called "unit generators". The basic sound generating units are called "oscillators". Let's create an oscillator that produces a steady tone based on a sine wave:

```text
SineOscillator sineOsc = new SineOscillator();
```

If you want to hear the sound of a keyboard synthesizer then you must connect it to an amplifier and speakers. Similarly, you must connect to a LineOut unit generator in order to get sound out of JSyn. First we create one:

```text
LineOut  lineOut = new LineOut();
```

Then we connect the output of the sine wave oscillator to the inputs of the LineOut. The LineOut is stereo so its input has two "parts", or channels, for left and right, numbered "0" and "1". The SineOscillator output only has one part numbered "0". Let's connect the SineOscillator to **both** input channels of the LineOut.

```text
sineOsc.output.connect( 0, lineOut.input, 0 );   // connect to left channel
sineOsc.output.connect( 0, lineOut.input, 1 );   // connect to right channel
```

The oscillator's output is called a "port" and is a subclass of UnitPort. Ports allow sound or data to flow in or out of a unit. We will learn more about ports later.

In order to hear the LineOut you must "start" it by calling its start() method. The LineOut will pull audio data from anything connected to its inputs. So you do not have to start() the SineOscillator.

```text
lineOut.start();
```

When you want the units to stop, simply call their stop() method.

For more details, see: [SineOscillator](/jsyn/docs/javadocs/com/jsyn/unitgen/SineOscillator/) and [UnitOscillator](/jsyn/docs/javadocs/com/jsyn/unitgen/UnitOscillator/)