---
layout: base.njk
title: "JSyn Documentation"
---

# JSyn Overview

JSyn is a real-time audio software synthesis package for Java.  JSyn provides a synthesis API based on the traditional model of unit generators.  Complex sounds can be created by connecting together units such as oscillators, filters, sample players, delay units, etc.  The actual synthesis is performed in 'C' using native method calls.  A Netscape Communicator plugin has been created that provides access to these native methods from Java Applets on a web site.

JSyn could be used to add complex sound effects to Java based games or audio rich web sites.  It could also be used for research in audio synthesis and composition, or to create abstract music.

Several examples of using JSyn are available including:

*   a plucked string physical model,
*   an experimental composition using FM and dynamic intonation,
*   bird-like sound effects,
*   echo and delay effects,
*   various sound effects, including "wind", that could be used in network game environments.

Here is an example of some very simple Java code that creates a Sawtooth wave oscillator that is frequency modulated by a Triangle wave oscillator.

```text
// Create two unit generators.
    SawtoothOscillator sawtooth = new SawtoothOscillator();
    TriangleOscillator triangle = new TriangleOscillator();

// Connect output of triangle wave to frequency of sawtoooth.
    triangle.output.connect( sawtooth.frequency );

// Set Triangle oscillator frequency to 2 Hz.
    triangle.frequency.set( 2.0 );

// Start both units executing in real time.
    sawtooth.start();
    triangle.start();
```

In order to achieve very accurate timing of musical events, JSyn supports a mechanism for **time stamping** events such as starting a unit generator, or setting a unit port parameter.  Thus several events can be time stamped for future execution at precise times.  Even if the application is busy or does not have good real-time response, the sound events will still be synthesized with accurate timing.

JSyn supports 16 bit sample playback and multi-segmented envelopes. Portions of a sample or envelope can be queued for playback by a sample or envelope unit generator. This could be used with a sample to queue the attack and sustain loop portions of an instrument.  When it is time to release the sample, the release portion of the sample is simply queued and will be played the next time the loop finishes.  One could also do things like queue 7 short gun sounds to get a machine gun sound.  Queing events can be time stamped.