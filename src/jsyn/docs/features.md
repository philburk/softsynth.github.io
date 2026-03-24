---
layout: base.njk
title: "JSyn Features"
---

# JSyn Features

## What is JSyn?

JSyn is a package that allows Java programs to synthesize audio in real-time.

Jsyn creates sound by connecting together various synthesis modules called unit generators.  Type of modules include oscillators, filters, sample players, delay lines, etc.

**JSyn Engine** - The synthesis occurs in the JSyn Engine which runs in a background thread.

**Applications or Applets -** Java applications can call JSyn using the native method interface.  Java Applets can call JSyn through a PlugIn interface that allows Applets in a browser to use JSyn.  The user source code is the same for both types of interface.

**Sample Support** \- Playback of 16 bit sample data is supported.  The sample player can be connected to other units to allow filtering or other types of processing.  The sample rate and amplitude of the sample player can be controlled by other units as well.  AIFF and WAV format samples can be loaded from a file.

**Sample and Envelope Queuing** \- Portions of a sample or envelope can be queued for playback by a sample or envelope unit generator. This could be used with a sample to queue the attack and sustain loop portions of an instrument.  When it is time to release the sample, the release portion of the sample is simply queued and will be played the next time the loop finishes. One could also do things like queue 7 short gun sounds to get a machine gun sound.  Queing events can be time stamped.

**Event Buffer** \- In order to achieve very accurate timing of musical events, JSyn supports a mechanism for time stamping events such as setting a unit port parameter or queuing a sample.  Thus several events can be time stamped for future execution at precise times.  Even if the application is busy or does not have good real-time response, the sound events will still be synthesized with accurate timing.

**WaveTable Support** \- WaveTables can be accessed randomly by the unit generators that read them unlike samples which can only be accessed sequentially. Also, WaveTables may be stored internally in a floating point format.  WaveTables are useful for synthetic waveform generation, function lookup, and waveshaping.

**Floating Point Precision** \- calculations are done in double precision floating point for maximum sound fidelity.

**Circuits** \- several units can be combined together into a Circuit that behaves like a unit generator.