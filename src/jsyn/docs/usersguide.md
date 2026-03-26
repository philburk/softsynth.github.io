---
layout: base.njk
title: "JSyn Programmers Guide"
eleventyNavigation:
  key: "/jsyn/docs/usersguide.md"
  title: "ProgrammersGuide"
  order: 4
  parent: "/jsyn/docs/index.md"
---

# JSyn Programmers Guide for new Pure Java API

If you have questions or want to report a bug, please visit our [technical support page.](/jsyn/support_old/)

Please read the [Documentation Home Page](/jsyn/docs/)  first before reading this document!  It contains disclaimers, release info, known bugs and links to all relevant documents.

You may wish to read the document that describes [how to compile and run JSyn programs](/jsyn/docs/compiling/) on your type of computer.

##

* * *

Table of Contents

[Importing JSyn Package](#JSynPackage)s
[Starting the Synthesis Engine](#StartingEngine)
[Creating Unit Generators](#CreatingUnitGenerators)
[Connecting Unit Generators](#ConnectingUnitGenerators)
[Setting Parameters](#Setting%20Parameters)
[Starting and Stopping Units](#StartingUnits)
[Applet Template](#AppletTemplate)
[Time and Sleeping](#TimeSleeping)
[Using the Event Scheduler](#UsingEventScheduler)
[Loading a Sample from a File](#LoadingSample)
[Creating a Sample](#CreatingSample)
[Playing a Sample](#PlayingSample)
[Defining an Arbitrary Function](#ArbitraryFunction)
[Creating a Lookup Table for Functions](#CreatingTable)
[Using a Table for Wave Table Synthesis](#WaveTableSynthesis)
[Loading a Table from a File](#LoadingTable)
[Creating Envelopes](#CreatingEnvelopes)
[Using Envelopes to Control Other Units](#UsingEnvelopes)
[Grouping Units together into a Circuit](#GroupingUnits)
[Using a PassThrough in a Circuit](#UsingPassThrough)
[Receiving Notification of Sample Playback Completion](#ReceivingNotification)
[Writing Custom Unit Generators](#Custom)
[Capturing Output to a WAV File](#CapturingOutput)
[Using Audio Input from a Microphone](#AudioIput)
[See Sound Using the AudioScope](#AudioScope)
[Using a JSyn Applet in a Web Page](#WebPage)
[Class Overview](#OverviewClasses)

* * *



When you connect up a stereo system, you connect the various components so that sound can flow between them. Sound may flow, for example, from a CD player, to a graphic equalizer, to an amplifier, and then to a pair of speakers. In a similar manner, sound generating, and sound processing units are connected together in JSyn to create new sounds. These sound components are traditionally called "unit generators". The library of unit generators includes oscillators, filters, ramps and other functions that you would find on a modular analog synthesiser, or a software synthesis package like CSound.

## <a name="JSynPackage"></a>Importing JSyn Packages

JSyn defines a number of Java packages. You should import these packages at the start of your program. The most useful packages are:

```text
import com.jsyn.*;          // JSyn and Synthesizer classes
  import com.jsyn.swing.*;    // Swing tools like knobs and JAppletFrame
  import com.jsyn.unitgen.*;  // Unit generators like SineOscillator
```

Here is a more complete list of JSyn packages.

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

WARNING - there are some old JSyn classes from the old API in the same JAR file as the new classes. An example is SineOscillator.class. They are in com.softsynth.jsyn package or in sub-packages. Do not mix any of the old JSyn classes with the new JSyn classes.

```text
import com.jsyn.unitgen.SineOscillator; // GOOD - uses new API

import com.softsynth.jsyn.SineOscillator; // BAD - using old API
```

## <a name="StartingEngine"></a>Starting the Synthesis Engine

Before making any other calls to JSyn, you **must** create a Synthesizer.

```text
Synthesizer synth = JSyn.createSynthesizer();
```

You can then start the synthesizer using the default outputs at 44100 Hz.

```text
synth.start();
```

If you wish to use audio input, or use a different sample rate, or select specific devices then you will need to do something like this instead:

```text
int numInputChannels = 2;
int numOutputChannels = 2;
synth.start( 44100, AudioDeviceManager.USE_DEFAULT_DEVICE, numInputChannels, AudioDeviceManager.USE_DEFAULT_DEVICE,
        numOutputChannels );
```

When your program finishes, you must stop JSyn by calling:

```text
synth.stop();
```

### <a name="CreatingUnitGenerators"></a>Creating Unit Generators

The next step is to create the various unit generators needed to create the desired sounds. The unit generator classes are all subclasses of the UnitGenerator class.  An overview of the various unit generators available is available in the [JSyn Unit Generator Overview.](/jsyn/docs/unitlist/)

One of the most important unit generators is the LineOut. It is used to send audio output to the speakers. So you probably want one of those. The unit generators also need to be added to the synthesizer. Create some unit generators as follows:

```text
synth.add( myOut = new LineOut() );
synth.add( myNoise = new WhiteNoise() );
synth.add( myFilter = new FilterStateVariable() );
```

### <a name="ConnectingUnitGenerators"></a>Connecting Unit Generators

Unit generators have input and output ports that can be connected together.  This allows units such as filters to process the output of units like oscillators.   To connect units together, use their ports connect() method as follows:

```text
myNoise.output.connect( myFilter.input );
```

The above code will connect the output of the noise unit to the input of the filter.  Input and Output are called "Ports".

Each UnitOutputPort can be connected to **multiple** UnitInputPorts.  Each UnitInputPort can have multiple UnitOutputPorts connected to it_._ Everything connected to a UnitInputPort will be summed together.

Some units have multi part ports.  An example is the LineOut unit which has a stereo input.  To connect to a specific part of a port use part indices:

```text
myFilter.output.connect( 0, myOut.input, 0 ); /* Left side */
myFilter.output.connect( 0, myOut.input, 1 ); /* Right side */
```

See the reference manual for more information on making connections to a  [UnitOutputPort.](/jsyn/docs/javadocs/com/jsyn/ports/UnitOutputPort/)

### <a name="SettingParameters"></a>Setting Parameters

Most units have ports that control their operation.  These include "Frequency", "Amplitude", etc.  To set a port, call set() with the new Value.  Frequency ports are set in Hertz.  Amplitude ports are set as a fractional Amplitude between -1.0 and +1.0.  For example:

```text
myOsc.frequency.set( 440.0 );  // 440 Hz
myOsc.amplitude.set( 0.5 );  // Half amplitude.
```

The set() method is supported by the [UnitInputPort](/jsyn/docs/javadocs/com/jsyn/ports/UnitInputPort/) class.

You can connect units to the parameter ports of another unit instead of setting them to a constant value. Thus you can do FM by connecting to the Frequency port of a SineOscillator unit. Note that JSyn has a [SineOscillatorPhaseModulated](/jsyn/docs/javadocs/com/jsyn/unitgen/SineOscillatorPhaseModulated/) unit, which provides a better way to do FM.

Some units have a [UnitVariablePort](/jsyn/docs/javadocs/com/jsyn/ports/UnitVariablePort/) which is similar to a UnitInputPort except that it cannot be connected to other ports.

You may wish to explore the [reference material that describes the various Port types](/jsyn/docs/javadocs/com/jsyn/ports/package-summary/).

### <a name="StartingUnits"></a>Starting and Stopping Units

The audio is synthesized in a background Thread.The Synthesizer calls any units that have been started. Fox example, to start a LineOut unit:

```text
myOut.start();
```

Note that not every unit needs to be started. When a running unit is executed, it pulls data from every unit that is connected to its inputs. Each of those units pull from their inputs as well. So you only need to start the final unit in a graph and everything conncted to it will also run. Feedback loops are detected and handled properly so that the Synthesizer will not blow up.

When a unit is started, its function is executed by the Synthesizer for every sample frame.  This places a burden on the CPU or DSP.  When you are finished making the sound you should stop any unit generators that you started. To stop them:

```text
myOut.stop();
```

## <a name="AppletTemplate"></a>Applet Template

You will note that most of the examples extend the class JApplet.  All of the examples also have a main() method so that they can be run as either an application or an applet.   When a Java Applet is run by a browser, it calls the JApplet's init() and start() when the Applet is started. When the user leaves the web page containing the Applet, the Applet's stop() method is called. Override the start() method with code that sets up your own application. Also override the stop() method for your cleanup code.

Warning: Some browsers will call stop() then start() when you resize a browser window containing the Applet. This can cause a glitch in the sound when your application is terminated and restarted.

Here is a skeleton JSyn program that can be used to used to create your own programs.  The main() method is used only when the program is run as an application using the "java" command.  It is not used in a browser applet.  This is a standard Java technique. Source code [here](/jsyn/docs/SawFaders.java.txt).

### <a name="TimeSleeping"></a>Time and Sleeping

JSyn maintains an internal timer that increments as the audio signals are calculated. To find out the current time in seconds call **synth.getCurrentTime().**

To sleep until a certain time call **synth.sleepUntil(wakeupTime)**.
To sleep for a certain number of ticks from now use **synth.sleepFor(duration)**.

If you want to maintain synchronized timing over the long run then you should use sleepUntil() because sleepFor() will incorporate small delays that accumulate over time.  Here is an example of code that will do something every 2 seconds.  If the initial time is 100.0, then doSomething will occur at 102.0, 104.0, 106.0, etc.

```text
double time = synth.getCurrentTime();
for( int i=0; i&lt;200; i++ )
{
    doSomething();
    time += 2.0;
    Synth.sleepUntil( time );
}
```

If we had used sleepForTicks() then if doSomething had taken a short while to execute, then doSomething might occur at 102, 104.01, 106.07,  etc.

### <a name="UsingEventScheduler"></a>Schedule Events in the Future using Timestamps

When a Java program is busy doing many things, including garbage collection, it may not be available to perform some audio event at exactly the right time.  This can result in some undesirable variations in the time that audio events occur.  For example, if you are playing a melody, the note timing may be off.  To address this problem, JSyn has a feature that allows you to schedule events in the future to be performed by the Synthesizer with very precise timing accuracy.

The events that can be scheduled include starting and stopping of units, setting of port values, and queueing of sample and envelope data.  To use the "event buffer", create a [TimeStamp](/jsyn/docs/javadocs/com/softsynth/shared/time/TimeStamp/) object and pass it to the synth.

```text
TimeStamp timeStamp = synth.createTimeStamp();
TimeStamp futureTime = timeStamp.makeRelative(5.0);
myOsc.start( futureTime ); /* Start 5 seconds in the future. */
```

### <a name="LoadingSample"></a>Loading a Sample

An [AudioSample](/jsyn/docs/javadocs/com/jsyn/data/AudioSample/) is a container for digital audio data.  It typically contains a recording of a natural sound event such as a piano note, dog bark, or explosion.  An AudioSample can also contain audio data that has been generated by a program. Using a sample is the easiest way to make a sound that is exactly like a natural event.  Unfortunately, once the sound is recorded, it cannot be manipulated easily and will therefore tend to sound the same each time it is played.

We have two types of samples. A [FloatSample](/jsyn/docs/javadocs/com/jsyn/data/FloatSample/) contains 32-bit floating point data. A [ShortSample](/jsyn/docs/javadocs/com/jsyn/data/ShortSample/) contains 16-bit short integers.

Samples are typically loaded from an AIFF or WAV file on disk. But they can also be loaded from any Java InputStream coming across a network, or a byte array or other stream source.The [SampleLoader](/jsyn/docs/javadocs/com/jsyn/util/SampleLoader/) class provides several static methods for loading samples. To load a FloatSample from a file on disk, call:

```text
file = new File("clarinet.wav");
clarinetSample = SampleLoader.loadFloatSample(file);
```

These methods do File I/O so you will need to catch or throw IOExceptions.

### <a name="CreatingSample"></a>Creating a Sample

You can also create a sample algorithmically by loading it with data from a program. To create a monophonic FloatSample of a certain size call:

```text
myMonoSample = new FloatSample( numFrames );
```

A frame is one or more sample values that will play simultaneously. A monophonic sample has one sample value, or channel, per frame. A stereo sample has two sample values per frame. To create a FloatSample with 2 samples per frame call:

```text
myStereoSample = new FloatSample( numFrames, 2 );
```

To load a sample with data, prepare an array containing the desired data, then write it to the sample. The data will be copied into the sample so the array can then be modified without affecting the sample.

```text
// Create a float array to contain audio data.
float[] data = new float[NUM_FRAMES];
// Fill it with sawtooth data. */
float value = 0.0;
for( int i=0; i<data.length; i++ )
{
    data[i] = value;
    value += 0.01;
    if( value &gt;= 1.0 )
    {
        value -= 2.0;
    }
}
// Generate sample directly from the data.
mySample= new FloatSample(data);
```

### <a name="PlayingSample"></a>Playing a Sample

There are a number of units that can play samples.  The unit [VariableRateMonoReader](/jsyn/docs/javadocs/com/jsyn/unitgen/VariableRateMonoReader/) will read sample data at a variable rate and interpolate between adjacent values.  The following example creates a sample playing unit.

```text
samplePlayer = new VariableRateMonoReader();
```

Sample players have a special port that you can "queue" samples to.  You can queue up multiple portions of various samples on a sample queue and they will be played in order, one after the other.  You can optionally specify that a portion of a sample be looped if it is the last thing in the queue.  When a loop finishes, it checks to see if something else is in the queue.  If so it advances to the next portion.  If not then it loops once more. Here is an example of queuing an entire sample starting at frame zero to be looped.

```text
samplePlayer.dataQueue.queueLoop( mySample, 0, mySample.getNumFrames() );
```

Imagine a violin sample that has an attack portion, a loop in the middle, and a release portion. To play such a sample, one would first call queue() for the attack portion. Then call queueLoop() for the loop portion.

```text
samplePlayer.dataQueue.queue( mySample, 0, attackSize );
samplePlayer.dataQueue.queueLoop( mySample, loopStart, loopSize );
```

When the sample is started, it will play through the attack and begin looping.  When you want to release the note, simply call queue() for the release portion.

```text
samplePlayer.dataQueue.queue( mySamp, releaseStart, releaseSize );
```

When the sample player finishes playing the loop it will play the release portion and then stop because the queue will be empty. Samples can be added to an empty queue while a sample reader is playing and it will start immediately.

When a portion of a sample is queued using queueLoop then it will loop forever or until something else is put in the queue after it. If you want something to loop a maximum number of times then pass then pass the count to queueLoop. For example, to loop 5 times call:

```text
samplePlayer.dataQueue.queueLoop( mySample, loopStart, loopSize, 5 );
```

If you wish to schedule the placing of sample portions in the queue at a future time, pass the time as the first parameter.  The [event scheduler](#Using%20the%20Event%20Scheduler) will place this in the queue at the desired time.

```text
samplePlayer.dataQueue.queue( releaseTime, mySamp, RELEASE_START, RELEASE_SIZE );
```

The rate at which samples are played is controlled using the rate port.

```text
samplePlayer.rate.set( mySample.getFrameRate() );
```

### <a name="ArbitraryFunction"></a>Defining an Arbitrary Function

If you need to calculate an arbitrary function, y=f(x), in JSyn, you could construct it out of arithmetic units. But it may be easier to define a [Function](/jsyn/docs/javadocs/com/jsyn/data/Function/) object. You can then use the [FunctionEvaluator](/jsyn/docs/javadocs/com/jsyn/unitgen/FunctionEvaluator/) unit generator in a patch.

```text
Function cubeFunction = new Function()
{
    public double evaluate( double x )
    {
        return x * x * x;
    }
};
synth.add( cubeUnit = new FunctionEvaluator() );
cubeUnit.function.set(cubeFunction);
```

You can now use the cubeUnit as a unit generator that will output the cube of its input.

### <a name="CreatingTable"></a>Creating a Lookup Table for Functions

If the Function is very complex then it might be faster to precalculate the values and then just look them up at runtime. You can use a [DoubleTable](/jsyn/docs/javadocs/com/jsyn/unitgen/DoubleTable/) to contain the precalculated values. DoubleTable extends Function so it can be used in place of a Function. Note, however, that the **input** values for a DoubleTable must be between -1.0 and +1.0. If the input exceeds that range then it will be clipped. The values in the table can be anything you want.

```text
final static int CUBE_LENGTH = 1024;
	final static int TABLE_LENGTH = CUBE_LENGTH+1;
	double [] data = new double[TABLE_LENGTH];
	for( int i=0; i&lt;TABLE_LENGTH; i++ )
	{
		double x = (i - (CUBE_LENGTH/2.0)) * 2.0 / CUBE_LENGTH;
		data[i] =  x * x * x;
	}
	cubeTable = new DoubleTable( data );
	fastCuber = new FunctionEvaluator ();
	fastCuber.function.set( cubeTable );
```

A DoubleTable is similar in some ways to a FloatSample. Table data is accessed using  read() and write() methods. The main difference between a table and a sample is that table data may be randomly accessed while sample data is accessed sequentially.

If you wish to have more accurate table lookup and reduce the effects of the linear interpolation, then use a larger table.

### <a name="WaveTableSynthesis"></a>Using a Table for Wave Table Synthesis

A unit called [FunctionOscillator](/jsyn/docs/javadocs/com/jsyn/unitgen/FunctionOscillator/) will generate repeating waveforms using a Function or DoubleTable.  It is controlled using a frequency port.  The FunctionOscillator unit has an internal phase between -1.0 and +1.0 that is used to as an input to the Function .

The FunctionOscillator will go from the value of the first sample to the value of the last sample, then snap back to the value of the first sample.  If you want the waveform to be continuous then you should set the last value in the table equal to the first value.  This is called a **"guard point"**. Here is an example of creating a waveform table with 1024 unique points and a guard point.

```text
// Create table and table oscillator.
	final static int WAVE_LENGTH = 1024;
// Create waveform consisting of two sinewave partials.
// Add 1 for the guard point.
	double [] data = new double[WAVE_LENGTH+1];
	for( int i=0; i<data.length; i++ )
	{
		data[i] = (0.5*Math.sin(i*2.0*Math.PI/WAVE_LENGTH))
        	+ (0.5*Math.sin(3.0*i*2.0*Math.PI/WAVE_LENGTH));
	}

	myTable = new DoubleTable( data );
	myWaveOsc = new FunctionOscillator ();
	myWaveOsc.function.set( myTable );
```

### <a name="LoadingTable"></a>Loading a Table from an AIFF or WAV File

Sometimes it is useful to load a table from an AIFF or WAV file.   First, load a ShortSample then use it to create a DoubleTable.  (See the section on [loading a sample from a file](#Loading_Sample) for more information.)

```text
ShortSample clarinetSample = SampleLoader.loadShortSample(file);
myTable = new DoubleTable( clarinetSample );
```

### <a name="CreatingEnvelopes"></a>Creating Envelopes

An envelope is a common synthesis tool.  It describes a shape or contour for a parameter.  Consider the amplitude curve for a piano note when it is struck.  It goes from silence to full volume and then slowly decays as long as the key is held down.  When the key is lifted, it quickly drops back to silence.  This amplitude profile can be described using an envelope. Envelopes can be used to control any parameter including frequency but amplitude is probably the most common.

Creating an envelope is very similar to creating a sample.  In fact envelopes and samples share many properties as we shall see.  Envelope data is stored internally in a [SegmentedEnvelope](/jsyn/docs/javadocs/com/jsyn/unitgen/SegmentedEnvelope/) object.   The difference is that the contents of an envelope are quite different from a sample.  A sample frame typically consists of single value.  Envelope frames, or segments, consist of a pair of double numbers that describe a duration and a value.  The duration number describes how long it should take the envelope to reach the value number starting from the value of the previous frame.  Consider the following code which creates an envelope with several frames.

```text
// Create an envelope and fill it with recognizable data.
    double[] data =
    {
        0.02, 1.0,  // duration,value pair for frame[0]
        0.30, 0.1,  // duration,value pair for frame[1]
        0.50, 0.7,  // duration,value pair for frame[2]
        0.50, 0.9,  // duration,value pair for frame[3]
        0.80, 0.0   // duration,value pair for frame[4]
    };
    myEnvData = new SegmentedEnvelope( data );
```


The first frame has a duration of 0.02 and a value of 1.0.  This means that when this envelope is started that it will take 0.02 seconds to go from its current value to a value of 1.0.  If you want to force an envelope to start immediately at a particular value then use a duration of 0.0.  When the envelope reaches 1.0 then it will take 0.30 seconds to reach a value of 0.1.  The final frame typically has a value of zero for envelopes that control amplitude.

The envelope can be modified using write() just like with a sample.

### <a name="UsingEnvelopes"></a>Using Envelopes to Control Other Units

Envelopes can be used to control the parameters of various unit generators.  Envelopes cannot, however, be used directly because they require an envelope player unit called a [VariableRateMonoReader](/jsyn/docs/javadocs/com/jsyn/unitgen/VariableRateMonoReader/)[](/jsyn/docs/javadocs/com/jsyn/unitgen/EnvelopePlayer/). You may recall that the same unit generator was used to play a sample! Envelopes are queued on an envelope just like samples are queued on a sample player.  Consider this example:


```text
envPlayer = new VariableRateMonoReader();
envPlayer.dataQueue.clear( );
envPlayer.dataQueue.queue( myEnvData, 0, myEnvData.getNumFrames() );
envPlayer.start();
```

To simulate the attack and release characteristics of some instruments you could queue up the beginning portion of an envelope when the note is started, then queue the release portion when the note is released.

```text
// Queue up all segments except last segment.
	if( attack )
	{
		envPlayer.dataQueue.clear( );
		envPlayer.dataQueue.queue( myEnvData, 0, 3 );
		envPlayer.dataQueue.queueLoop( myEnvData, 1, 2 );
	}
// Queue final segment. */
	else if( release )
	{
		envPlayer.dataQueue.queue( myEnvData, 3, 2 );
	}
```

 To control another unit's parameters using an envelope, simply connect the output of the envelope player to a port on the other unit.

```text
/* Connect envelope to oscillator amplitude. */
    envPlayer.output.connect( myOsc.amplitude );
```

You can adjust the rate of envelope playback using the rate port on the [VariableRateMonoReader](/jsyn/docs/javadocs/com/jsyn/unitgen/VariableRateMonoReader/)[.](/jsyn/docs/javadocs/com/jsyn/unitgen/EnvelopePlayer/) Amplitude envelopes of acoustic instruments tend to get shorter as they go higher in pitch.  This rate parameter can be used to simulate that effect. If you use a very high rate, for example 44100.0, then the envelope can be used as an audible waveform. In fact you can queue samples and envelopes to the same unit. If you use a low rate, for example 1.0, then a sample can be used as a slowly varying control signal.

```text
envPlayer.rate.set( 0.7 );
```

### <a name="GroupingUnits"></a>Grouping Units together into a Circuit

You will often want to connect multiple units together to make a single complex sound effect.  It would be nice to be able to treat these groups in a manner similar to the way that individual units are treated.  This can all be done using the [Circuit](/jsyn/docs/javadocs/com/jsyn/unitgen/Circuit/) class.

To make a JSyn circuit, define a subclass of the Circuit class:

```text
public class WindSound extends Circuit
```

You  must declare the units that will be part of of your circuit. You will also need ports so you can control your circuit using connect() and set() just like you control unit generators.

```text
private TriangleOscillator    triOsc;
public UnitInputPort     frequency;
```

In the constructor for the new circuit, instantiate the new units then add them to the circuit. This is similar to creating a subclass of Panel and adding components to it.  Here is an example of adding a TriangleOscillator to a circuit:

```text
add( triOsc = new TriangleOscillator() );
```

In the constructor you should also connect any units internally, and set default values for the ports.

You can make the circuit's ports control the internal units by setting them equal to the unit's ports.  Then use the addPort() method to make the ports visible when one calls getNumPorts() on the circuit.

```text
addPort( frequency = triOsc.frequency );
```

 What you end up with is an object that can be used just like a unit generator but is more complex.  You can include Circuits inside of other Circuits to make hierarchies of sound effects.  Here is an example of how the above WindSound is used.

```text
/* Create circuits and unit generators. */
    wind = new WindSound();
    myOut = new LineOut();
```

```text
/* Set Amplitude of LFO to 1.0 */
    wind.amplitude.set(1.0);
```

```text
/* Connect wind to output. */
    wind.output.connect( 0, myOut.input, 0 );
    wind.output.connect( 0, myOut.input, 1 );
```

You may wish to view an example of a circuit that creates a [wind sound](/jsyn/docs/WindSound.txt) by filtering white noise.

### <a name="UsingPassThrough"></a>Using a PassThrough in a Circuit

Sometimes you will want to have a single port on a circuit that connects internally to multiple ports. For example, suppose you have two oscillators in a circuit and you want to control them both using a single amplitude port. The following will not work:

```text
addPort( amplitude = squareOsc.amplitude );    // WRONG!
addPort( amplitude = triOsc.amplitude );       // WRONG! Overrides previous line.
```

So what do you do? Use a PassThrough unit that distributes the incoming signal to multiple places in the circuit.  Declare a PassThrough unit:

```text
public PassThrough   passThrough;
```

In the circuit constructor, instantantiate a new PassThrough. Use its input port as the amplitude port for the circuit.

```text
add( passThrough = new PassThrough() );
addPort( amplitude = passThrough.input );
```

Then, inside the circuit constructor, connect the PassThrough output to as many internal ports as you wish.

```text
passThrough.output.connect( squareOsc.amplitude );
passThrough.output.connect( triOsc.amplitude );
```

### <a name="ReceivingNotification"></a>Receiving Notification of Sample Playback Completion

When you queue envelope or sample data to a queue, it will sit in the queue for a while and then be processed later. It is sometimes handy to know when it finishes processing. We can pass a [UnitDataQueueCallback](/jsyn/docs/javadocs/com/jsyn/ports/UnitDataQueueCallback/) object that will be used to signal us when the queued data has started or finished, or looped.

Here is an example of queuing data with a callback using a [QueueDataCommand](/jsyn/docs/javadocs/com/jsyn/ports/QueueDataCommand/).

```text
// Queue an envelope with a completion callback.
// Create a command using a factory method.
	QueueDataCommand command = envelopePlayer.dataQueue.createQueueDataCommand( envelope, 0,
			envelope.getNumFrames() );
// Create an object to be called when the queued data is done.
	TestQueueCallback callback = new TestQueueCallback();
	command.setCallback( callback );
	command.setNumLoops( 2 );
	envelopePlayer.rate.set( 0.2 );
	synth.queueCommand( command );
```

The callback will be passed [QueueDataEvents](/jsyn/docs/javadocs/com/jsyn/ports/QueueDataEvent/).

```text
class TestQueueCallback implements UnitDataQueueCallback
{
    public void started( QueueDataEvent event )
    {
        System.out.println("CALLBACK: Envelope started.");
    }

    public void looped( QueueDataEvent event )
    {
        System.out.println("CALLBACK: Envelope looped.");
    }

    public void finished( QueueDataEvent event )
    {
        System.out.println("CALLBACK: Envelope finished.");
    }
}
```

### Writing Custom Unit Generators<a name="Custom"></a>

The JSyn synthesis engine is written in Java. You can use Java to write your own custom unit generators. Here is a simple example that cubes an incoming signal. We extend UnitFilter because UnitFilter has an input and an output port.

```text
package com.jsyn.examples;

import com.jsyn.engine.ports.UnitInputPort;
import com.jsyn.engine.ports.UnitOutputPort;
import com.jsyn.engine.units.UnitGenerator;

/**
 * Custom unit generator that can be used with other JSyn units.
 * Cube the input value and write it to output port.
 *
 * @author Phil Burk (C) 2010 Mobileer Inc
 *
 */
public class CustomCubeUnit extends UnitFilter
{

    /** This is where the synthesis occurs.
     * It is called in a high priority background thread so do not do
     * anything crazy here like reading a file or doing network I/O.
     * The start and limit allow us to do either block or single sample processing.
     */
    @Override
    public void generate( int start, int limit )
    {
        // Get signal arrays from ports.
        double[] inputs = input.getValues();
        double[] outputs = output.getValues();

        for( int i = start; i < limit; i++ )
        {
            double x = inputs[i];
            outputs[i] = x * x * x;  // x cubed
        }
    }
}
```

### <a name="CapturingOutput"></a>Capturing Output to a WAV File

You can capture your JSyn sounds in all their glory in a WAV file. Then you can put them on a CD or convert them to MP3s. First create a WaveRecorder to capture the audio:

```text
File waveFile = new File( "temp_recording.wav" );
// Default is stereo, 16 bits.recorder = new WaveRecorder( synth, waveFile );
```

Then connect the final output mix to the WaveRecorder and start it running. The WaveRecorder will pull data from the connected units

```text
finalMix.output.connect( 0, recorder.getInput(), 0 ); // left
finalMix.output.connect( 1, recorder.getInput(), 1 ); // right
recorder.start();
```

When you are all done, stop the WaveRecorder and close it. The file outputstream will also be closed.

```text
recorder.stop();
recorder.close();
```

### Using <a name="AudioInput"></a>Audio Input from a Microphone

If you wish to use audio input then you will need to specify the number of input channels when you start the synthesizer:

```text
int numInputChannels = 2;
int numOutputChannels = 2;
synth.start( 44100, AudioDeviceManager.USE_DEFAULT_DEVICE, numInputChannels, AudioDeviceManager.USE_DEFAULT_DEVICE,
        numOutputChannels );
```

The get the audio input data you can use a LineIn for stereo data. If you just want mono data or you want specific channels of audio input then use a [ChannelIn](/jsyn/docs/javadocs/com/jsyn/unitgen/ChannelIn/) unit. You can specify the channel index in the constructor.

```text
synth.add( channel0 = new ChannelIn(0));
synth.add( channel1 = new ChannelIn(1));
```

### See Sound Using the <a name="AudioScope"></a>AudioScope

A simple oscilloscope is provided that lets you look at several signals together. Create an AudioScope then add a probe for each signal that you want to see. The y-scale will be set automatically by analysing the signal amplitude. You can disable the auto scaling by clearing a checkbox and set the scale manually.

```text
scope = new AudioScope(synth);
scope.addProbe( osc1.output ); // display multiple signals
scope.addProbe( osc2.output );
// Trigger on a threshold level vs AUTO trigger.
scope.setTriggerMode( AudioScope.TriggerMode.NORMAL );
scope.start();
```

You can turn on gain and trigger controls if desired. The default is to display a plain waveform display.

```text
scope.getView().setShowControls(true);
panel.add( BorderLayout.CENTER, scope.getView() );
```

When you are done, stop the scope's background process by calling:

```text
scope.stop();
```

### Using a JSyn Applet in a <a name="WebPage"></a>Web Page

You can use a JSyn based Applet in a web page. Use the CODEBASE attribute to point to your classes folder containing your Applet. It can have any name and be any folder on the website. In that same folder you should also place the JSyn jar file.

Here is an example using an Applet called "BeepBeep" that is in a Java package called "com.mystuff".

```text
<APPLET
	CODE="com.mystuff.BeepBeep.class"
	NAME="BeepBeepApplet"
	CODEBASE="../../classes"
	ARCHIVE="jsyn-beta-16.4.4.jar"
	WIDTH="200" HEIGHT="100"&gt;
&lt;/APPLET&gt;
```

* * *

## <a name="OverviewClasses"></a>Overview of Important Classes

#### UnitGenerator

A class of object that represents a calculation that occurs in the synthesis engine.

#### FloatSample

A class of objects that contains digital audio data. This is generally read sequentially.

#### DoubleTable

A class of objects that contains digital audio data. This can be read via random access.

#### SegmentedEnvelope

A class of object that contains an array of time,value pairs. It is used for generating a contour for controlling instruments.

#### Circuit

A class of object that contains multiple Units connected together to make a complex sound.

#### UnitVariablePort

UnitVariablePorts can be set to a particular value using the set() method. They cannot be connected.

#### UnitInputPort

UnitOutputPorts can be connected to multiple UnitInputPorts.

#### UnitOutputPort

UnitOutputPorts can be connected to multiple UnitInputPorts.

#### UnitDataQueuePort

Portions of a sample or an envelope can be queued to this port for playback.

#### UnitFunctionPort

A DoubleTable or a Function can be associated with this port using the set() method.