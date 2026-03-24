---
layout: base.njk
title: "JSyn, Migrating from Old Native JSyn to New Pure-Java JSyn"
---

# Migrating from Old Native JSyn to New Pure-Java JSyn

This document is intended for JSyn developers who are familiar with JSyn V14.4 and want to use the new JSyn API.

Note that the new JSyn API has not been finalized. There is still a lot of refactoring going on. So please give us feedback on what is in this document. It is easy to change the API now but very difficult later.

### Building JSyn Applications

All you need to do is place the [new JSyn JAR](/jsyn/beta/) file in your Java classpath. If you have the old JSyn plugin installed in your Java classpath then you should remove it. Otherwise your application might use the old JSyn instead of the new JSyn. Here is a tool for removing the [old JSyn](/jsyn/plugins/uninstall_plugin/).

### What's Different?

The new JSyn is written in 100% pure Java. There is no native code library and thus no plugin is required for browsers.

The other major differences are:

*   It uses JavaSound for audio I/O. It was designed so that other audio device interfaces can be plugged in. We plan to add a Java wrapper for PortAudio that will give you better support for multi-channel devices.
*   [You can write your own custom unit generators in Java.](/jsyn/docs/usersguide/#Custom)
*   [New cleaned up package hierarchy under "com.jsyn".](#packages)
*   [Initialization and termination are different.](#init)
*   [Some unit generator names have changed to match Java conventions.](#names)
*   [Support for 32-bit floating point samples in addition to the old 16-bit short samples](#samples).
*   Units do not have to be explicitly started by calling start(). Audio data is pulled from units that they are connected to.
*   [TimeStamps are now double precision time in seconds.](#timestamps)
*   [Swing based GUI tools, for example knobs and an oscilloscope.](#swing)
*   [Simple audio streaming classes that can be used, for example, to read or write audio files.](#streaming)
*   [The table player now accepts arbitrary functions.](#function)
*   The sample players can play float or short sample data or envelope data interchangeably. You can even use breakpoint envelopes as a waveform.
*   You can request a completion callback when you queue data.
*   New DAHDSR envelope unit has "delay-attack-hold-decay-sustain-release" stages.
*   The LinearLag input port now supports connections.

A few of these new features are shown in an [example program](#example) at the bottom of this page.

## New Package Names<a name="packages"></a>

Most of the old JSyn code was in the "com.softsynth.jsyn" package. We now use a set of "com.jsyn" packages.

| Package Name | Contents |
|---|---|
| com.jsyn | Top level JSyn package. |
| com.jsyn.data | Samples, tables and envelopes. |
| com.jsyn.devices | Interfaces for audio and MIDI device access. |
| com.jsyn.devices.javasound | Implementations using JavaSound. |
| com.jsyn.engine | Synthesis engine and core data classes. Mostly internal. |
| com.jsyn.exceptions | Various exceptions specific to synthesis. |
| com.jsyn.instruments | Some handy instruments to get started with. |
| com.jsyn.io | Support for streaming audio signals. |
| com.jsyn.midi | Basic MIDI parsing tools. |
| com.jsyn.ports | Ports that provide signal flow into and out of the units. |
| com.jsyn.unitgen | All the stock unit generators. |
| com.jsyn.scope | An audio oscilloscope. |
| com.jsyn.swing | Some general purpose audio GUI components using Swing. |
| com.jsyn.util | Various utilities like PseudoRandom and VoiceAllocator |

## Unit Generator Name Changes

| Old Name | New Name | Comment |
|---|---|---|
| AddUnit | [Add](/jsyn/docs/javadocs/com/jsyn/unitgen/Add/) | "Unit" is redundant. They are all in the unitgen package. |
| BusReader/BusWriter |  | They are no longer needed. InputPorts will automatically mix all the OutputPorts that are connected. |
| CompareUnit | Compare | They are all in the unitgen package. |
| DelayUnit | Delay | They are all in the unitgen package. |
| DivideUnit | Divide | They are all in the unitgen package. |
| DelayUnit | Delay | They are all in the unitgen package. |
| EnvelopePlayer | [VariableRateMonoReader](/jsyn/docs/javadocs/com/jsyn/unitgen/VariableRateMonoReader/) | Very different. Same unit can play envelopes or samples! |
| ExponentialLag | AsymptoticRamp | Name is now more accurate because output never reaches input. We also added an ExponentialRamp that reaches a new level in a specified number of seconds. |
| Filter\_1o1p | FilterOnePoleOneZero | Underscores are frowned upon in Java names. |
| Filter\_\* | Filter\* | All the Filter\_ names changed. |
| MultiplyUnit | Multiply | They are all in the unitgen package. |
| MultiplyAddUnit | MultiplyAdd | They are all in the unitgen package. |
| PanUnit | Pan | They are all in the unitgen package. |
| SampleReader\_16F1 | [FixedRateMonoReader](/jsyn/docs/javadocs/com/jsyn/unitgen/FixedRateMonoReader/) | Very different. Same unit can play 16 or 32 bit sample data. |
| SampleReader\_16F2 | FixedRateStereoReader | Very different. Same unit can play 16 or 32 bit sample data. |
| SampleReader\_16V1 | VariableRateMonoReader | Very different. Same unit can play envelopes or samples! |
| SampleReader\_16V2 | VariableRateStereoReader | Very different. Same unit can play 16 or 32 bit sample data. |
| SampleWriter\_16F1 | [FixedRateMonoWriter](/jsyn/docs/javadocs/com/jsyn/unitgen/FixedRateMonoWriter/) | Very different. Same unit can write 16 or 32 bit sample data. |
| SampleWriter\_16F2 | FixedRateStereoWriter | Very different. Same unit can write 16 or 32 bit sample data. |
| SelectUnit | Select | They are all in the unitgen package. |
| SubtractUnit | Subtract | They are all in the unitgen package. |

## Initialization and Termination<a name="init"></a>

The initialization of JSyn has changed. There is no longer one global SynthContext hidden inside the Synth class.

Old JSyn

```text
Synth.startEngine( 0 );
  -- OR --
SynthContext synthContext = new SynthContext();
synthContext.startEngine( 0 );
```

New JSyn

```text
Synthesizer synth = JSyn.createSynthesizer();
synth.start();
```

The termination is also slightly different.

Old JSyn

```text
synthContext.stopEngine();
```

New JSyn

```text
synth.stop();
```

## Creating Unit Generators

We want to be able to create unit generators using a zero-argument constructor. This allows us to instantiate them dynamically. But we also want to associate them with a SynthesisEngine. So we add the unit to the engine the same way that we add GUI Components to a JPanel.

Old JSyn

```text
osc = new SineOscillator( synthContext )
```

New JSyn

```text
synth.add( osc = new SineOscillator() );
```

## Double Precision Timestamps<a name="timestamps"></a>

The old JSyn used integer ticks that corresponded to 64 frames. The new JSyn use double precision time in seconds.

For comparison, let's look at how we would schedule the setting of a frequency port 1.5 seconds in the future.

Old JSyn

```text
// Calculate how may ticks are equivalent to 1.5 seconds.
int tickDelay = (int) (synthContext.getTickRate() * 1.5);
// Add that to current time.
int futureTick = synthContext.getCurrentTicks() + tickDelay;
osc.frequency.set( futureTick, 440.0 );
```

New JSyn

```text
// Add 1.5 to current time.
double futureTime = synth.getCurrentTime() + 1.5;
osc.frequency.set( 440.0, futureTime );
```

Note that the timestamp parameter is now passed after the port value. That is because optional parameters should generally come after required parameters.

## 32-bit Audio Samples<a name="samples"></a>

The new JSyn supports 32-bit floating-point samples. These have better performance and resolution than the old 16 bit samples.

Old JSyn

```text
short[] data = makeSomeData();
sample = new SynthSample( synthContext, data.length );
sample.write( data );
```

New JSyn

```text
float[] data = makeSomeFloatData();
sample = new FloatSample( data );
```

If you really want a 16 bit sample then you can construct a ShortSample the same way. The only reason to use ShortSample is because they use half the memory.

## Swing Based GUI Tools<a name="swing"></a>

As a convenience, JSyn comes with some GUI tools for making knobs and faders that control JSyn ports. The old JSyn used a combination of AWT 1.0.2 and AWT 1.1 methods. The new JSyn takes advantage of the BoundedRangeModel in Swing. We define an implementation of BoundedRangeModel that controls a JSyn port. This model can then be used with many of the existing Swing controls like [JSlider](http://download.oracle.com/javase/1.4.2/docs/api/javax/swing/JSlider.html#JSlider%28javax.swing.BoundedRangeModel%29). Separating out the model from the controller gives us much more flexibility. We also use a PortControllerFactory class to simplify the creation of complex controls.

Old JSyn

```text
// Use custom faders designed for JSyn
add( new PortFader( myPanner.pan,  defaultPan, minPan, maxPan ) );

// Create a fader with an exponential taper.add( new ExponentialPortFader( osc.frequency,  defaultFreq, minFreq, maxFreq ) );

// Use a rotary knob for a more compact GUI.
add( new PortKnob( lfo.frequency, "ModRate (Hz)", 0.2, 0.1, 20.0, 8 ) );
```

New JSyn

```text
// Create model that can be used with Swing's JSlider and other controllers.
ExponentialRangeModel amplitudeModel = PortModelFactory.createExponentialModel( osc.amplitude );
add( new JSlider( amplitudeModel ) );

// Create a slider directly.
osc.frequency.setup( minFreq, defaultFreq, maxFreq );
add( PortControllerFactory.createExponentialPortSlider( osc.frequency ) );

// Use a linear model in a rotary knob with a text field.
LinearRangeModel lfoFreqModel = PortModelFactory.createLinearModel( lfo.frequency );
add( new RotaryTextController( lfoFreqModel, numDigits ) );
```

## Streaming Audio Signals<a name="streaming"></a>

The old JSyn had a rather complicated WAV file recorder that used a random access file. The new JSyn has a much simpler streaming interface. You can also stream from a file into JSyn.

Old JSyn

```text
// Start Recording
rfile = new RandomAccessFile( "recorded.wav", "rw" );
wavWriter = new WAVFileWriter( rfile );
outStream = new BufferedOutputStream( wavWriter );
wavWriter.writeHeader( numChannels, frameRate );
// Create a recorder that will continuously record its input.
recorder = new StreamRecorder( outStream, FRAMES_PER_BUFFER, 4, numChannels );
myOsc.output.connect( recorder.input );
recorder.start( time );

/**** Make some music. ****/

// Finish Recording
recorder.stop( time );
// Go back to the beginning of the random access file and
// update the WAV file chunk sizes based on final recorded size.
outStream.flush();
wavWriter.fixSizes();
outStream.close();
rfile.close();
```

New JSyn

```text
// Start Recording
recorder = new WaveRecorder( synth, new File( "recorded.wav" ), numChannels );
myOsc.output.connect( recorder.getInput() );
recorder.start();

/**** Make some music. ****/

// Finish Recording
recorder.stop();
recorder.close();
```

The new streaming classes include an AudioFIFO that can be used to move signals between foreground and background processes. Here is an example of capturing audio inside the engine and making it available for reading in a foreground process.

```text
// Create a unit generator that takes an audio signal and writes it to an AudioOutputStream.
streamWriter = new MonoStreamWriter();

// Create a FIFO that implements both AudioOutputStream and AudioInputStream.
fifo = new AudioFifo();
fifo.setReadWaitEnabled( true );// Read will sleep if empty.
fifo.allocate( 32 * 1024 );
streamWriter.setOutputStream( fifo );

// Read audio from the FIFO.
double sample = fifo.read();
```

## Table Lookup and Functions<a name="function"></a>

<a name="function"></a>In the old JSyn you could define a lookup table using the SynthTable class.

```text
waveShaper   = new WaveShaper());
double[] data = { -1.0, 0.5, -0.5, 1.0 };
SynthTable table = new SynthTable( synthContext, data );
waveShaper.tablePort.setTable( table );
```

I realized that table lookup is just one way of doing a function evaluation. In the new JSyn we use a more general purpose unit called a FunctionEvaluator.

```text
FunctionEvaluator waveShaper = new FunctionEvaluator();
double[] data = { -1.0, 0.5, -0.5, 1.0 };
DoubleTable table = new DoubleTable(data);
waveShaper.function.set( table );
```

In place of the lookup table we could use a mathematical function.

```text
Function cuber = new Function()
{
  public double evaluate( double x )
  {
    return x * x * x;
  }
}
waveShaper.function.set( cuber );
```

## <a name="function"></a>Example Program<a name="example"></a>

&lt;?php include("PlayTone.java.txt") ?&gt;