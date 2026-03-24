---
layout: base.njk
title: "JSyn Documentation"
---

# JSyn Release Notes V2-12

## New in V012 (release = 3/29, expiration =  11/15/99)

### Code Breakers in JSyn V12

These changes may require you to make changes to your old JSyn source code to get it to compile and run under JSyn V12.

1.  SynthCircuit now has its own "output" port. Do NOT declare a "SynthOutput  output" port in your circuits.
2.  Moved JSyn AWT related utilities to a package called "com.softsynth.jsyn.view".
3.  Moved generic JSyn utilities to a package called "com.softsynth.jsyn.util".
4.  Moved example JSyn circuits to a package called "com.softsynth.jsyn.circuits".
5.  Moved JSyn example programs to a package called "JSynExamples".

Because of these changes you may need to add some or all of the following lines to the beginning of your program if you use classes from those packages.

> ```text
> import com.softsynth.jsyn.util.*;
> import com.softsynth.jsyn.view.*;
> import com.softsynth.jsyn.circuits.*;
> import JSynExamples.*;
> ```

### New Features and Bug Fixes

1.  Added support for loading AIFF and WAV format samples. See the file "JSynExamples.TJ\_Sample2" for an example. Also see the documentation for classes SynthSampleAIFF and ParseAIFF.
2.  Added PanUnit which pans a mono signal to two outputs based on the value of the "pan" port.
3.  Added CrossFade which cross fades between two input based on the value of the "fade" port.
4.  Added ForWayFade which is similar to CrossFade but fades between four sources.
5.  Added InterpolatingDelayUnit which cross delays a signal by a variable amount based on the value of the "delay" port. Can be used for flangers, tuneable physical models, etc.
6.  Fixed glitches on NT by detecting whether we are running under NT and making the internal audio buffers bigger. See the PC [Installation Notes](/jsyn/docs/old/host_pc/) for information on how to adjust the buffer size.
7.  Added no-argument SynthTable constructor like SynthSample.
8.  Fixed bug that caused the clear() method for EnvelopePlayer queues to make a pop.
9.  Added complex example called "JSynExamples.PerformanceRack".
10.  Added several AWT related classes like com.softsynth.jsyn.view.XYController that are used in PerformanceRack.
11.  Added LabelledFader that makes it easy to add scrollbars that control an application level parameter.
12.  Fixed bug that sometimes caused queue() for SynthChannelData to recurse endlessly.
13.  Added SynthDistributor which is used for fanning out signals inside a circuit. See "com.softsynth.jsyn.circuits.RingModBell" for an example.
14.  Depracated the useTable() method. Please use setTable() instead.
15.  Units that modify a sound like Filter\_1o1z and DelayUnit are now derived  from the SynthFilter class which has an "input" and "output" port.
16.  Oscillators like SineOscillator are now derived  from the SynthOscillator class which has a "frequency", "amplitude", "phase" and "output" port.
17.  Added setSignalType( SynthPort port ) which sets the signal type of one port to match that of another.

## New in V011 (release = 11/4/98, expiration =  1/15/99)

1.  Alpha release for Macintosh. Support MRJ VM as well as Metrowerks VMs.
2.  Added Filter\_1o1p1z, Filter\_2o2p, Filter\_2o2p2z.
3.  Changed "COM.softsynth.jsyn" to "com.softsynth.jsyn" because SUN's package naming convention changed! **You must change your source code to match the new naming convention.** Sorry.
4.  Depracated "setAt( time, value )". You should now use "set( time, value )".
5.  Exported "phase" variable in oscillators. This is handy for starting an LFO at a specific phase angle.
6.  Added "amplitude" port to BusReader unit. This makes it easier to build mixers out of BusReaders and BusWriters.
7.  Fixed bug that caused set() to not clip values between allowable limits. If you were setting a port to an illegal value, you may notice a change in behavior.
8.  Fixed SynthOutput get() method which allows you to read the current value of an output.
9.  Improved error handling in synthesis task.
10.  Use JNI native interface method on both PC and Macintosh. This should be transparent to you.

## New in V010 (release = 9/11/98, expiration =  11/15/98)

1.  Alpha release for Macintosh. (Expires =  10/15/98)
2.  **Connecting to a port that is already connected no longer results in an exception. The old connection is simply broken.**
3.  Calling clear() for envelope or sample queues, followed by queuing new data no longer causes a pop.  The signal now smoothly transitions from the last interpolated value associated with the queue.
4.  Added Schmidt Trigger unit, a comparator with hysteresis.
5.  Added SelectUnit which outputs one of its two inputs.
6.  Made significant changes to the internal communications between foreground and background tasks. All communications are now atomic so that semaphores are no longer required. This was necessitated by the lack of support for multi-tasking on the Macintosh.

## New in V009 (expiration =  9/15/98)

1.  Optimized float to integer conversion which sped up sampler and table oscillator by 30%.
2.  Extended expiration deadline.

## New in V008 (expiration =  6/15/98)

1.  Minor documentation improvements.
2.  Extended expiration deadline.

## New in V007 (expiration 3/15/98)

1.  Added example SoundTester that provides a graphical interface with faders for all of the input ports. See TJ\_Wind.java for an example.
2.  AutoStop is now supported as a flag passed to the queue() method.  This allows a unit generator to be stopped when a certain segment of data is finished playing.
3.  HarmonicTable class support generation of bandpass limited sawtooth and square waves.
4.  Internal API optimized by caching port indices in SynthPort objects.
5.  Low level synthesis optimized by using indexed data instead of pointers.

## New in V006 (V6 was for internal release only.)

1.  Added [ParabolicEnvelope](/jsyn/docs/autodocs/com.softsynth.jsyn.ParabolicEnvelope/) for granular synthesis. See TJ\_Grains.java.
2.  Added [LatchUnit](/jsyn/docs/autodocs/com.softsynth.jsyn.LatchUnit/), [CompareUnit](/jsyn/docs/autodocs/com.softsynth.jsyn.CompareUnit/) unit generators.
3.  Added [get()](/jsyn/docs/autodocs/com.softsynth.jsyn.SynthOutput/)method that returns a port's current value.
4.  Added [setMin(), setMax(), getMin(), getMax()](/jsyn/docs/autodocs/com.softsynth.jsyn.SynthVariable/) to SynthVariable for setting preferred range for a port value.  This can be used by a port browser.  See the example SoundTester class.
5.  Added getNumPorts(),  getPortAt(), and findNamedPort() to [SynthSound](/jsyn/docs/autodocs/com.softsynth.jsyn.SynthSound/) to allow browsing of a unit's or circuit's ports. See the example SoundTester class.
6.  Added example reverberation class called Reverb1.
7.  Added Filter\_1o1p unit generator.

## New in V005

1.  Fixed LowPass, BandPass, HighPass ports in SVFilter.  They were incorrectly declared internally as type INPUT instead of OUTPUT.
2.  Eliminated SynthApplet.  Applets now call Synth.startEngine() directly.
3.  Added SynthAlert class for giving error messages.
4.  Remove annoying BetaWarning window that confused DirectSound.
5.  Created signed JAR file for automatic downloading and installation of JSyn plugin.
6.  Updated plugin expiration to 12/15/97.
7.  Put [examples](/jsyn/examples) and [docs](/jsyn/docs/) on JSyn web site.

## New in V004 (release = 8/8/97)

1.  Add SynthEnvelope class for multi-segment breakpoint style envelopes.
2.  AutoStop for envelopes and samples that stop unit when data runs out.
3.  Added DelayUnit for basic delay needs.
4.  Fixed bug that caused Usage to blow up for ExponentialLag.
5.  Optimised oscillators by approx 40%
6.  Return error string to Java for printing
7.  Object reference tracking and garbage collection.
8.  JSyn can now be called from an Applet under a Netscape browsers using a plugin.
9.  Added SynthCircuit class that contains multiple unit generators.
10.  Eliminate all references to startTogether()
11.  Renamed "Sample.Rate" port to "Rate".
12.  Renamed root "Engine" class to "Synth" class.
13.  Renamed "com.softsynth.jsyn" to "com.softsynth.jsyn" to better conform with suggested naming convention.
14.  Synth.verbosity can be used to print trace information, eg. Synth.verbosity = Synth.TERSE.
15.  Eliminated Strings from API.  Now each unit generator has its own class with port objects.
16.  Change Frequency port for StateVariableFilter to type SIGNAL\_TYPE\_SVF\_FREQ so that it can be specified in Hertz.
17.  Removed Control rate capability because API is in flux.

## New in V003 (release=7/25/97)

1.  New units: Math\_MultiplyAddUnitUnsigned
2.  New SynthUnit methods: delete() and finalize()
3.  Beta warning dialog added.
4.  Fix disconnect bug for deferred deletion.
5.  Added frameRate parameter to Synth.start().

## New in V002

1.  Event buffer that allows you to timestamp start(), stop(), and setPort() calls.
2.  New units: Lag\_Exponential, Bus\_Write, Bus\_Write
3.  Package name changed to "com.softsynth.jsyn".
4.  Samples class changed to SynthSample
5.  Added SynthBus class
6.  Added SynthUnit.setPriority() to control execution order.
7.  Added oscilloscope class called SynthScope