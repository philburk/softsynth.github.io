---
layout: base.njk
title: "JSyn Tutorial"
---

When you hear music, you typically hear several sounds mixed together. How can we combine the output of multiple oscillators in JSyn so that we hear them together? The answer is simple. We add them together.

There are several unit generators classes in JSyn that perform simple arithmetic like addition and multiplication. One unit, the AddUnit has two input ports named "inputA" and "inputB". Oscillators produce a stream of numbers. If we connect two oscillators to the inputs of an AddUnit then the numbers from each oscillator will be added together. The output of the AddUnit will then be a single stream of numbers that contains the sound of both oscillators. Let's create an AddUnit and two oscillators.

```text
AddUnit mixer = new AddUnit();
SineOscillator sineOsc1 = new SineOscillator();
SineOscillator sineOsc2 = new SineOscillator();
```

Now let's connect the oscillators to the AddUnit's two inputs:

```text
sineOsc1.output.connect( 0, mixer.inputA, 0 );
sineOsc2.output.connect( mixer.inputB );  // the lazy way
```

Note that on the second call to connect() that we did not pass the part numbers. If the part numbers are both zero, then we can leave them out and connect() will use zero as a default.

Now we just connect the output of the adder to a LineOut and start all the units to hear sound.

\[You may wonder why we don't just add the sounds together in Java using the '+' operator. We cannot because the sound is actually generated at a very low level in a "synthesis engine" written in 'C'. The actual sound numbers are not available at the Java level. The engine runs continuously at a very high priority, often using CPU interrupts. The Java portion of JSyn simply sends commands to the synthesis engine telling it to modify its sound output. As of today, 9/20/1999, Java is too slow to do the audio synthesis directly, at least on my machine. But as computers get faster JSyn will soon be able to generate sound in a pure Java environment.\]

There are a number of other ways to mix sounds together in JSyn besides using an AddUnit. These include the SynthMixer class and bus readers and writers which we will study later. Internally they are all based on addition.