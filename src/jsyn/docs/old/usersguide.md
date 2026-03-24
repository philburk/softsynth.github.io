---
layout: base.njk
title: "JSyn Programmers Guide"
---

&lt;!-- .bigred { color: #F00; } --&gt;

# This old API is deprecated. Please use [the new API instead](/jsyn/docs/)!

# JSyn Programmers Guide for old Native API

If you have questions or want to report a bug, please visit our [technical support page.](/jsyn/support_old/)

Please read the [Documentation Home Page](/jsyn/docs/old/)  first before reading this document!  It contains disclaimers, release info, known bugs and links to all relevant documents.

You may wish to read the document that describes [how to compile and run JSyn programs](/jsyn/docs/old/old/installation/) on your type of computer.

This document is gradually being replaced by the JSyn [Tutorial](/jsyn/docs/tutorial).

##

* * *

Table of Contents

[JSyn Package](#JSynPackage)
[Starting the Synthesis Engine](#StartingEngine)
[Creating Unit Generators](#CreatingUnitGenerators)
[Connecting Unit Generators](#ConnectingUnitGenerators)
[Setting Parameters](#Setting%20Parameters)
[Starting and Stopping  Units](#StartingUnits)
[Catching SynthException](#CatchingSynthException)
[Applet Template](#AppletTemplate)
[Time and Sleeping](#TimeSleeping)
[Using the Event Scheduler](#UsingEventScheduler)
[Loading a Sample from a File](#LoadingSample)
[Creating a Sample](#CreatingSample)
[Playing a Sample](#PlayingSample)
[Creating a Table](#CreatingTable)
[Using a Table for Wave Table Synthesis](#WaveTableSynthesis)
[Using a Table for Wave Shaping or Function Lookup](#WaveShaping)
[Loading a Table from a File](#LoadingTable)
[Using a SynthBus to Combine Signals.](#UsingSynthBus)
[Using Priority to Control the Order of Execution](#UsingPriority)
[Creating Envelopes](#CreatingEnvelopes)
[Using Envelopes to Control Other Units](#UsingEnvelopes)
[Grouping Units together into a Circuit](#GroupingUnits)
[Using a SynthDistributor in a SynthCircuit](#UsingSynthDistributor)
[Using AutoStop with Samples or Envelopes](#UsingAutoStop)
[Receiving Notification of Sample Playback Completion](#ReceivingNotification)
[Using a JSyn Applet in a Web Page](#WebPage)
[Class Overview](#OverviewClasses)

* * *


Before reading this discussion, you may wish to look at the source code for example "[TJ\_SawFader.java](/jsyn/docs/old/TJ_SawFader.txt)".

When you connect up a stereo system, you connect the various components so that sound can flow between them. Sound may flow, for example, from a CD player, to a graphic equalizer, to an amplifier, and then to a pair of speakers. In a similar manner, sound generating, and sound processing units are connected together in JSyn to create new sounds. These sound components are traditionally called unit generators. The library of unit generators includes oscillators, filters, ramps and other functions that you would find on a modular analog synthesiser, or a software synthesis package like CSound.

## <a name="JSynPackage"></a>JSyn Package

The primary synthesis classes are in a package called "com.softsynth.jsyn" so near the beginning of each program you must have this line:

```text
import com.softsynth.jsyn.*;
```

JSyn also has a number of sub packages. If you wish to use classes from them, you must import them as well.

```text
import com.softsynth.jsyn.util.*;    // for general JSyn utilities
import com.softsynth.jsyn.view102.*;    // for graphical AWT1.0.2 related utilities
import com.softsynth.jsyn.view11x.*;    // for graphical AWT1.1.x related utilities
import com.softsynth.jsyn.circuits.*;  // for example SynthCircuits that combine units
```

## <a name="StartingEngine"></a>Starting the Synthesis Engine

Before making any other calls to JSyn, you **must** initialize it by calling:

```text
Synth.startEngine(0);
```

The method startEngine() is static so you do not have to create a Synth object.

You can specify an optional frame rate as a second parameter.  By specifying a low sample rate, ideally 1/2 or 1/4 of the default rate, you can reduce the number of samples that must be calculated per second. This will reduce the amount of computation that the CPU must perform. For example:

```text
Synth.startEngine( 0, Synth.DEFAULT_FRAME_RATE / 2.0 );
```

When your program finishes, you must terminate JSyn by calling:

```text
Synth.stopEngine();
```

### <a name="CreatingUnitGenerators"></a>Creating Unit Generators

The next step is to create the various unit generators needed to create the desired sounds. The unit generator classes are all subclasses of the SynthUnit class.  An overview of the various unit generators available is available in the [JSyn Unit Generator Overview.](/jsyn/docs/old/unitlist/)
Create two unit generators as follows:

```text
myNoise = new WhiteNoise();
myFilter = new StateVariableFilter();
```

### <a name="ConnectingUnitGenerators"></a>Connecting Unit Generators

Unit generators have inputs and outputs that can be connected together.  This allows units such as filters to process the output of units like oscillators.   To connect units together, use their ports connect() method as follows:

    myNoise.output.connect( myFilter.input );

The above code will connect the output of the noise unit to the input of the filter.  Input and Output are called "Ports".

Each SynthOutput can be connected to **multiple** SynthInputs.  Each SynthInput can only have **one** SynthOutput connected to it. This is called _"multiple fan-out"._

Some units have multi part ports.  An example is the Line\_Out unit which has a stereo input.  To connect to a specific part of a port, do the following:

```text
myFilter.output.connect( 0, myOut.input, 0 ); /* Left side */
myFilter.output.connect( 0, myOut.input, 1 ); /* Right side */
```

See the reference manual for more information on making connections to a  [SynthOutput.](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthOutput/)

### <a name="SettingParameters"></a>Setting Parameters

Most units have ports that control their operation.  These include "Frequency", "Amplitude", etc.  To set a port, call set() with the new Value.  Frequency ports are set in Hertz.  Amplitude ports are set as a fractional Amplitude between -1.0 and +1.0.  For example:

```text
myOsc.frequency.set( 440.0 );  /* 440 Hz */
myOsc.amplitude.set( 0.5 );  /* Half amplitude.*/
```

You can connect units to the parameter ports of another unit instead of setting them to a constant value. Thus you can do FM by connecting to the Frequency port of a Osc\_Sine unit.

If you connect units together and use the result to control another unit, you may wish to coerce the signal type to use the same dimension as the target.

```text
myLFO.output.connect( myAdd.inputA );  /* Mix result of LFO with constant control value. */
myAdd.output.connect( myOsc.frequency );

myAdd.inputB.setSignalType( Synth.SIGNAL_TYPE_OSC_FREQ ); /* Control center frequency using Hz */
myAdd.inputB.set(440.0); /* Set oscillators center frequency to 440 Hz via adder */
```

The set() method is supported by the [SynthInput](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthInput/)class which a subclass of [SynthVariable](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthVariable/).

You may wish to explore the reference material that describes the various Port types.

*   class com.softsynth.jsyn.[SynthPort](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthPort/#_top_)

*   class com.softsynth.jsyn.[SynthBusInput](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthBusInput/#_top_)
*   class com.softsynth.jsyn.[SynthBusOutput](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthBusOutput/#_top_)
*   class com.softsynth.jsyn.[SynthDataQueue](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthDataQueue/#_top_)

*   class com.softsynth.jsyn.[SynthEnvelopeQueue](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthEnvelopeQueue/#_top_)
*   class com.softsynth.jsyn.[SynthSampleQueue](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthSampleQueue/#_top_)

*   class com.softsynth.jsyn.[SynthOutput](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthOutput/#_top_)
*   class com.softsynth.jsyn.[SynthTablePort](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthTablePort/#_top_)
*   class com.softsynth.jsyn.[SynthVariable](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthVariable/#_top_)

*   class com.softsynth.jsyn.[SynthInput](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthInput/#_top_)

### <a name="StartingUnits"></a>Starting and Stopping  Units

In order for a unit to make sound, it must be started so that it executes its function. For example:

```text
myOut.start();
myOsc.start();
```

When a unit is started, its function is executed by the synthesis engine for every sample frame.  This places a burden on the CPU or DSP.  When you are finished making the sound you should stop the unit generators. To stop them:

```text
myOut.stop();
myOsc.stop();
```

## <a name="CatchingSynthException"></a>Catching SynthException

If a JSyn class detects an error, it throws a SynthException which tells you what error occured. If you want to catch the SynthException then you should bracket your calls you  JSyn methods with **try** and **catch**. You will probably want to catch the SynthExceptions at the highest level of your program. For example:

```text
try
{
/* Make various calls to JSyn between these brackets. */
} catch (SynthException e) {
    SynthAlert.showError(this,e);
}
```

To learn more about catch and throw, please refer to a Java Language reference such as [Thinking in Java](http://www.bruceeckel.com/javabook.html).

## <a name="AppletTemplate"></a>Applet Template

You will note that the examples are all based on extending the class Applet.  All of the examples also have a main() method so that they can be run as either an application or an applet.   When a Java Applet is run by a browser, it calls the Applet's init() and start() when the Applet is started. When the user leaves the web page containing the Applet, the Applet's stop() method is called. Override the start() method with code that sets up your own application. Also override the stop() method for your cleanup code.

Warning: Netscape will call stop() then start() when you resize a browser window containing the Applet. This can cause a glitch in the sound when your application is terminated and restarted.

Here is a skeleton JSyn program that can be used to used to create your own programs.  The main() method is used only when the program is run as an application using the "java" command.  It is not used in a browser applet.  This is a standard Java technique.

```text
import java.util.*;
import java.awt.*;
import java.applet.Applet;
import com.softsynth.jsyn.*;
```

```text
public class MyJSynProgram extends Applet
{
/* Declare Synthesis Objects here */
```

```text
/* Can be run as either an application or as an applet. */
   public static void main(String args[])
   {
      MyJSynProgram  applet = new MyJSynProgram();
      AppletFrame frame = new AppletFrame("Test JSyn", applet);
      frame.resize(600,400);
      frame.show();
      frame.test();
   }
```

```text
/*
 * Setup synthesis by overriding start() method.
 */
   public void start()
   {
      try
      {
         Synth.startEngine(0);
/* Your setup code goes here. */
      } catch(SynthException e) {
         SynthAlert.showError(this,e);
      }
   }
```

```text
/*
  * Clean up synthesis by overriding stop() method.
  */
   public void stop()
   {
      try
      {
/* Your cleanup code goes here. */
         Synth.stopEngine();
      } catch(SynthException e) {
         SynthAlert.showError(this,e);
      }
  }
}
```

### <a name="TimeSleeping"></a>Time and Sleeping

JSyn maintains an internal timer that increments as the audio signals are calculated.  The timer units are "Ticks" and correspond to a block of  audio data.

To find out the current time in ticks by calling **[Synth](/jsyn/docs/old/autodocs/com/softsynth/jsyn/Synth/).getTickCount().**
To find out how many audio frames are in a Tick by calling **Synth.getFramesPerTick()**.
To determine the rate of Ticks per Second by calling **Synth.getTickRate()**.

To sleep until a certain time then call **Synth.sleepUntilTick( wakeupTimeInTicks )**.
To sleep for a certain number of ticks from now use **Synth.sleepForTicks( ticksToSleepFor )**.

If you want to maintain synchronized timing over the long run then you should use sleepUntilTick() because sleepForTicks() will incorporate small delays that accumulate over time.  Here is an example of code that will do something every 100 ticks.  If the initial time is 1000, then doSomething will occur at 1000, 1100, 1200, 1300, 1400, etc.

```text
int time = Synth.getTickCount();
for( int i=0; i&lt;200; i++ )
{
    doSomething();
    time += 100;
    Synth.sleepUntilTick( time );
}
```

If we had used sleepForTicks() then if doSomething had taken a few ticks to execute, then doSomething might occur at 1000, 1102, 1205, 1307, 1411,  etc.

### <a name="UsingEventScheduler"></a>Using the Event Scheduler

When a Java program is busy doing many things, including garbage collection, it may not be available to perform some audio event at exactly the right time.  This can result in some undesirable variations in the time that audio events occur.  For example, if you are playing a melody, the note timing may be off.  To address this problem, JSyn has a feature that allows you to schedule events in the future that will be performed by the Synthesis Engine with very precise timing accuracy.

The events that can be scheduled include starting and stopping of SynthUnits, setting of Port values, and queueing of Sample and Envelope data.  To use the event buffer, simply put the time in ticks as the first parameter. For example:

```text
myOsc.start();  /* Start oscillator now. */
myOsc.start( 2000 ); /* Start oscillator at time 2000. */
myOsc.start( Synth.getTickCount() + 300 ); /* Start 300 ticks in the future. */
```

```text
myOsc.frequency.set( 3000, 220.0 ); /* Set frequency at time 3000. */
```

The 'C' Synthesis Engine will defer the deletion of units until all outstanding events have occured.  So you can create a SynthUnit, schedule future start(), setPort() and stop() events, and then lose the SynthUnit object reference and it will still play to completion in the background without being deleted.

### <a name="LoadingSample"></a>Loading a Sample

A [SynthSample](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthSample/) is a container for digital audio data.  It typically contains a recording of a natural sound event such as a piano note, dog bark, or explosion.  A SynthSample can also contain audio data that has been generated by a program. Using a sample is the easiest way to make a sound that is exactly like a natural event.  Unfortunately, once the sound is recorded, it cannot be manipulated easily and will therefore tend to sound the same each time it is played.

Samples are typically loaded from an AIFF or WAV file on disk. But they can also be loaded from any Java InputStream coming across a network, or a byte array or other streram source. To create a stream from a file on disk, call:

```text
FileInputStream stream = new FileInputStream(fileName);
```

Once you have a stream, you can load a SynthSample from that stream. For an AIFF format file which is common on the Apple Macintosh, call:

```text
SynthSampleAIFF  sample = new SynthSampleAIFF( stream );
```

For a WAV format file which is common on the PC, call:

```text
SynthSampleWAV  sample = new SynthSampleWAV( stream );
```

You can generally tell whether a file is an AIFF or WAV file because the fileName will end with ".aiff" or ".aif" or ".wav". A handy way to determine this is to call:

```text
int  fileType = SynthSample.getFileType( fileName );
```

This method will return SynthSample.WAV or SynthSample.AIFF, or possible other formats in the future.

A number of these can go wrong when you try to do this. The file might be missing, or it could be corrupted. Or they may not be enough memory to load the sample. Only your application can know what to do when these exceptions occur so you will have to catch them. Here is an example that ties all these calls together with exception catching.

```text
/* Load sample from a file. */
    SynthSample   sample;
    try
    {
        FileInputStream stream = new FileInputStream(fileName);
        try
        {
            switch( SynthSample.getFileType( fileName ) )
            {
            case SynthSample.AIFF:
                sample = new SynthSampleAIFF( stream );
                break;
            case SynthSample.WAV:
                sample = new SynthSampleWAV( stream );
                break;
            default:
                SynthAlert.showError(this, "Unrecognized sample file suffix on " + fileName );
                break;
            }
        } catch( IOException e )
        {
            SynthAlert.showError(this,e);
        }
    } catch( FileNotFoundException e )
    {
        SynthAlert.showError(this,e);
    } catch( SecurityException e )
    {
        SynthAlert.showError(this,e);
    }
```

 Take a look at "JSynExamples/TJ\_Sample2.java" for a full example of loading and playing a sample.  If you would like more control over the parsing of the file, look at the documentation for [SynthSampleAIFF](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthSampleAIFF/) and ParseIFF, or the equivalent WAV classes.

### <a name="CreatingSample"></a>Creating a Sample

You can also create a sample algorithmically by loading it with data from a program. To create a monophonic SynthSample of a certain size call:

```text
myMonoSample = new SynthSample( numFrames );
```

A frame is one or more sample values that will play simultaneously. A monophonic sample has one sample value, or channel, per frame. A stereo sample has two sample values per frame. To create a SynthSample with 2 samples per frame call:

```text
myStereoSample = new SynthSample( numFrames, 2 );
```

When a SynthSample is created, memory large enough to hold all the data is allocated. The allocated memory will be of a type that can be played by the synthesis engine.  If this Synthesis Engine is running on a DSP on a sound card then the sample data will probably reside on the sound card. Becasue of this, the sample data is not directly accessable to an application.  The data can only be accessed via the read() and write() methods.  To load a sample with data, prepare an array of shorts with the desired data, then write it to the SynthSample. The data will be copied into the sample so the short array can then be freed.  Here is an example of filling a sample.

```text
/* Create a short array to build sample image. */
    short[] data = new short[NUM_FRAMES];
/* Create a sample and fill it with recognizable data. */
    mySample= new SynthSample( NUM_FRAMES );
    for( int i=0; i<NUM_FRAMES; i++ )
    {
        data[i] = (short) (i*0x100);  /* Ascending data. */
    }
/* Write all of data to sample memory. */
    mySample.write( data );
/* Optionally get rid of array, or reuse it, because it is no
** longer needed. */
    data = null;
```

### <a name="PlayingSample"></a>Playing a Sample

There are a number of units that will operate on SynthSamples.  The unit Sample\_Read16V1 will read 16 bit sample data at a variable rate.  The following example creates a sample playing unit.

```text
gSampler = new SampleReader_16V1();
```

Sample players have a special port that you can "connect" samples to.  It has a built in queue that portions of samples can be placed in.  You can queue up multiple portions of various samples on a sample queue and they will be played in order one after the other.  You can optionally specify that a portion of a sample be looped if it is the last thing in the queue.  When a loop finishes, it checks to see if something else is in the queue.  If so it advances to the next portion.  If not then it loops once more. Here is an example of queuing an entire sample starting at frame zero to be looped.

```text
mySampler.samplePort.queueLoop( mySamp, 0, mySamp.getNumFrames() );
```

Imagine a violin sample that has an attack portion, a loop in the middle, and a release portion. To play such a sample, one would first call queue() for the attack portion. Then call queueLoop() for the loop portion.

```text
mySampler.samplePort.queue( mySamp, 0, attackSize );
mySampler.samplePort.queueLoop( mySamp, loopStart, loopSize );
```

When the sample is started, it will play through the attack and begin looping.  When you want to release the note, simply call queue() for the release portion.

```text
mySampler.samplePort.queue( mySamp, releaseStart, releaseSize );
```

When the sample player finishes playing the loop it will play the release portion and then stop because the queue will be empty. Samples can be added to an empty queue while a sample reader is playing and it will start immediately.

If you wish to schedule the placing of sample portions in the queue at a future time, pass the time as the first parameter.  The [event scheduler](#Using%20the%20Event%20Scheduler) will place this in the queue at the desired time.

```text
mySampler.samplePort.queue( releaseTime, mySamp, RELEASE_START, RELEASE_SIZE );
```

The rate at which the sample is played is controlled using the rate port.

```text
mySampler.rate.set( 22050.0 );
```

### <a name="CreatingTable"></a>Creating a Table

A [SynthTable](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthTable/) is another container of data.  The main difference between a table and a sample is that table data may be randomly accessed while sample data is accessed sequentially.  Depending on the hardware running the engine, sample and table data may reside in separate memory spaces.  Table data may also be stored with higher precision than sample data so that physical models built with tables for delay lines may have less quantization error. Here is an example of creating a table with 100 values.

```text
myTable = new SynthTable( 100 );
```

Tables are only monophonic.  Table data is accessed using  read() and write() methods similar to SynthSamples.

### <a name="WaveTableSynthesis"></a>Using a Table for Wave Table Synthesis

A unit called TableOscillator will generate repeating waveforms using the values in the table.  It is controlled using a frequency port.  The TableOscillator unit has an internal phase that is used to lookup values in the table. It will linearly interpolate between values when the phase points between values.  If you wish to have more accurate table lookup and reduce the effects of the linear interpolation, then use a larger table.  The TableOscillator will go from the value of the first sample to the value of the last sample, then snap back to the value of the first sample.  If you want the waveform to be continuous then you should set the last value in the table equal to the first value.  This is called a **"guard point"**. Here is an example of creating a waveform table with 256 unique points and a guard point.

```text
/* Create table and table oscillator. */
    final static int WAVE_LENGTH = 256;
    myWaveOsc = new TableOscillator ();
    myTable = new SynthTable( WAVE_LENGTH + 1 );  /* Include
  guard point. */
  /* Create waveform consisting of two sinewave partials. */
    short [] data = new short[WAVE_LENGTH+1];
    for( int i=0; i<WAVE_LENGTH; i++ )
    {
           data[i] = (short)
  (32767.0 * (0.5*Math.sin(i*2.0*Math.PI/WAVE_LENGTH)

  + 0.5*Math.sin(3.0*i*2.0*Math.PI/WAVE_LENGTH)));
  }
  /* Set guard point. */
    data.[WAVE_LENGTH] = data[0];
    myTable.write( data );
    myWaveOsc.tablePort.setTable( myTable );
```

### <a name="WaveShaping"></a>Using a Table for Wave Shaping or Function Lookup

If you need to calculate a complex function in JSyn, you could either construct it out of Math units, or you could precalculate the function in your application and then do a table lookup.  Use the [WaveShaper](/jsyn/docs/old/autodocs/com/softsynth/jsyn/WaveShaper/) unit to perform the lookup.  The input of WaveShaper  ranges from -1.0 to +1.0.  When Input is -1.0 then the Output is the first value in the table.  When Input is +1.0 then the Output is the last value in the table.  Intermediate values are interpolated.

An interesting synthesis effect can be achieved by connecting a simple waveform to the Input of a WaveShaper.  The shape, and thus the timbre, of the Output waveform is now a function of the Amplitude of the input waveform.  This technique is called "Wave Shaping". Even though this unit is used most often for Table Lookup, we call it a "WaveShaper" because that sounds better than "TableLookerUpper".

The table can be filled and associated with the WaveShaper in the same way we did for the TableOscillator example above.

### <a name="LoadingTable"></a>Loading a Table from an AIFF or WAV File

Sometimes it is useful to load a table from an AIFF or WAV file. You can use a SynthSample to do the file parsing and loading of the data. Then write the data into a table.  First, create a SynthSampleAIFF or SynthSampleWAV that will do the parsing.  (See the section on [loading a sample from a file](#Loading_Sample) for more information.)

```text
SynthSampleAIFF myAIFF = new SynthSampleAIFF();
```

The parse the file and return the data in an array of shorts:

```text
short shrtData[] = myAIFF.loadShorts( stream, true );
```

Then write the short array into the SynthTable:

```text
if( shrtData != null )
{
    allocate( shrtData.length );
    write( shrtData );
}
```

### <a name="UsingSynthBus"></a>Using a SynthBus to Combine Signals.

We already learned that each SynthOutput can be connected to **multiple** SynthInputs, and each SynthInput can only have **one** SynthOutput connected to it.   There is another kind of Port called a "bus" that has the opposite rule. Each SynthBusOutput can be connected to only **one** SynthBusInput.  Each SynthBusInput can have **multiple** SynthBusOutputs connected to it. This is called _"multiple fan-**in**"._

All of the SynthBusOutputs connected to a SynthBusInput are added together before being used.  This makes them handy for mixing signals.  You can convert a normal signal to a bus signal using a BusWriter unit.  It has a SynthInput and a SynthBusOutput.  Multiple BusWriter units can be connected to a single BusReader unit which has a SynthBusInput and a normal SynthOutput.
This technique is handy if you want to combine an arbitrary number of signals to be processed together.  If you only need to combine two signals then you could just use a AddUnit unit.

Here is an example that show how to mix an array of oscillators to a single bus.  The output of this bus could then be processed by a filter or passed to a reverberation effect, etc.

```text
/* Create a single reader which can connect to as many other units as desired. */
myBusReader = new BusReader();
```

```text
for( int i=0; i<NUM_OSC; i++)
{
    myBusWriter[i]   = new BusWriter(); /* Create bus writers. */
    myOsc[i].output.connect( myBusWriter[i].input );  /* Connect oscillator. */
    myBusWriter[i].busOutput.connect( myBusReader.busInput );
}
```

```text
myBusReader.output.connect( myFilter.input );
```

### <a name="UsingPriority"></a>Using Priority to Control the Order of Execution

Before a unit is started, its priority can be set using setPriority().  There are currently 3 levels of priority, Synth.PRIORITY\_LOW, Synth.PRIORITY\_MEDIUM, and Synth.PRIORITY\_HIGH.  The default is MEDIUM. High priority units are executed before medium or low priority units.  Within a given priority level, units are executed in the order they are started.

### <a name="CreatingEnvelopes"></a>Creating Envelopes

An envelope is a common synthesis tool.  It describes a shape or contour for a parameter.  Consider the amplitude curve for a piano note when it is struck.  It goes from silence to full volume and then slowly decays as long as the key is held down.  When the key is lifted, it quickly drops back to silence.  This amplitude profile can be described using an envelope. Envelopes can be used to control any parameter including frequency but amplitude is probably the most common.

Creating an envelope is very similar to creating a sample.  In fact envelopes and samples share many properties as we shall see.  Envelope data is stored internally in a [SynthEnvelope](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthEnvelope/) object.  The data is loaded using write() just like with a sample.  The difference is, however, that the contents of an envelope are quite different from a sample.  A sample frame typically consists of a 16 bit integer or _short_.  Envelope frames, or segments, consist of a pair of double numbers that describe a duration and a value.  The duration number describes how long it should take the envelope to reach the value number starting from the value of the previous frame.  Consider the following code which creates an envelope with several frames.

```text
/* Create an envelope and fill it with recognizable data. */
    double[] data =
    {
        0.02, 1.0,  /* duration,value pair for frame[0] */
        0.30, 0.1,  /* duration,value pair for frame[1] */
        0.50, 0.7,  /* duration,value pair for frame[2] */
        0.50, 0.9,  /* duration,value pair for frame[3] */
        0.80, 0.0   /* duration,value pair for frame[4] */
    };
    numFrames = data.length/2;
    myEnvData = new SynthEnvelope( numFrames );
    myEnvData.write( 0, data, 0, numFrames );
```

The first frame has a duration of 0.02 and a value of 1.0.  This means that when this envelope is started that it will take 0.02 seconds to get from its current value to a value of 1.0.  If you want to force an envelope to start immediately at a particular value then use a duration of 0.0.  When the envelope reaches 1.0 then it will take 0.30 seconds to reach a value of 0.1.  The final frame typically has a value of zero for envelopes that control amplitude.

As a convenient alternative you can construct the envelope in one step using a constructor that accepts a double array directly.

```text
/* Create an envelope and fill it with recognizable data. */
    myEnvData = new SynthEnvelope( double[] data =
        {
            0.02, 1.0,  /* duration,value pair for frame[0] */
            0.30, 0.1,  /* duration,value pair for frame[1] */
            0.50, 0.7,  /* duration,value pair for frame[2] */
            0.50, 0.9,  /* duration,value pair for frame[3] */
            0.80, 0.0   /* duration,value pair for frame[4] */
        } );
```

### <a name="UsingEnvelopes"></a>Using Envelopes to Control Other Units

Envelopes can be used to control the parameters of various unit generators.  Envelopes cannot, however, be used directly they require an envelope player unit called a [EnvelopePlayer](/jsyn/docs/old/autodocs/com/softsynth/jsyn/EnvelopePlayer/). Envelopes are queued on an envelope just like samples are queued on a sample player.  Consider this example:


```text
myEnv = new EnvelopePlayer();
myEnv.envelopePort.clear( );
myEnv.envelopePort.queue( myEnvData, 0, myEnvData.getNumFrames() );
myEnv.start();
```

To simulate the attack and release characteristics of some instruments you could queue up the beginning portion of an envelope when the note is started, then queue the release portion when the note is released.

```text
/* Queue up all segments except last segment. */
    if( evt.target == attackButton )
    {
        myEnv.envelopePort.clear( );
        myEnv.envelopePort.queue( myEnvData, 0, 3 );
        myEnv.envelopePort.queueLoop( myEnvData, 1, 2 );
        myEnv.start();
    }
/* Queue final segment. */
   else if( evt.target == releaseButton )
   {
        myEnv.envelopePort.queue( myEnvData, 3, 2 );
   }
```

 To control another unit's parameters using an envelope, simply connect the output of the envelope player to the port on the other unit.

```text
/* Connect envelope to oscillator amplitude. */
    myEnv.output.connect( 0, myOsc.amplitude, 0 );
```

You can adjust the rate of envelope playback using the rate port on the [EnvelopePlayer.](/jsyn/docs/old/autodocs/com/softsynth/jsyn/EnvelopePlayer/) This rate is an unsigned value that can range from 0.0 to 2.0.  Amplitude envelopes of acoustic instruments tend to get shorter as they go higher in pitch.  This rate parameter can be used to simulate that effect.

```text
myEnv.rate.set( 0.7 );
```

### <a name="GroupingUnits"></a>Grouping Units together into a Circuit

You will often want to connect multiple units together to make a single complex sound effect.  It would be nice to be able to start these units together at a single instant so that the phase of the various units stays in sync.  It would also be nice to treat these groups in a manner similar to the way that individual units are treated.  This can all be done using the [SynthCircuit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SynthCircuit/) class.

To make a JSyn circuit, define a subclass of the SynthCircuit class:

```text
public class WindSound extends SynthCircuit
```

You  must declare the units that will be part of of your circuit. You will also need ports so you can control your circuit using connect() and set() just like you control unit generators.

```text
TriangleOscillator    triOsc;   // declare an oscillator
public SynthInput     frequency;  // declare a frequency port
```

In the constructor for the new circuit, instantiate the new units, and then add them to the circuit. This is similar to creating a subclass of Panel and adding components to it.  Here is an example of adding a TriangleOscillator to a circuit:

```text
add( triOsc = new TriangleOscillator() );
```

You can make the circuit's ports control the internal units by setting them equal to the unit's ports.  Then use the addPort() method to make the ports visible when one calls getNumPorts() on the circuit.

```text
addPort( frequency = triOsc.frequency );
```

 What you end up with is an object that can be used just like a unit generator but is more complex.  You can include SynthCircuits inside of other SynthCircuits to make hierarchies of sound effects.  Here is an example of how the above WindSound is used.

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

You may wish to view an example of a circuit that creates a [wind sound](/jsyn/docs/old/WindSound.txt) by filtering white noise.

### <a name="UsingSynthDistributor"></a>Using a SynthDistributor in a SynthCircuit

Sometimes you will want to have a single port on a circuit that connects internally to multiple ports. For example, suppose you have two oscillators in a circuit and you want to control them both using a single amplitude port. You **cannot** do this:

```text
addPort( amplitude = squareOsc.amplitude );    // WRONG!
addPort( amplitude = triOsc.amplitude );       // WRONG! Overrides previous line.
```

So what do you do? Create a special kind of port called a SynthDistributor that distributes the incoming signal to multiple places in the circuit.  Declare a SynthDistributor port:

```text
public SynthDistributor   amplitude;
```

In the circuit constructor, instantantiate a new SynthDistributor. Pass it the circuit using the "this" keyword, and give it a name.

```text
amplitude = new SynthDistributor( this, "amplitude" );
```

Then, inside the circuit constructor, connect the SynthDistributor to as many internal ports as you wish.

```text
amplitude.connect( squareOsc.amplitude );
amplitude.connect( triOsc.amplitude );
```

When you use this circuit, if you connect an external output port to the SynthDistributor, it will automatically be connected to everything that the distributor is connected to.  Likewise, if you set() a distributor, every connected port will be set. Since the same value will be passed to each internally connected port, they must all have the same signal type. By default, a SynthDistributor will have the signal type Synth.SIGNAL\_RAW\_SIGNED which works for amplitudes and other basic signals. You can specify a signal type when you create the SynthDistributor.

```text
frequency = new SynthDistributor( this, "frequency", Synth.SIGNAL_TYPE_OSC_FREQ );
```

If you want to match the signal type of one of the internal ports, but you're not sure what the signal type is, then the safest thing to do is to query the signal type.

```text
frequency = new SynthDistributor( this, "frequency",  svFilter.frequency.getSignalType() );
```

For an example of using a SynthDistributor, see the circuit "[RingModBell.java](/jsyn/docs/old/RingModBell.txt)".

### <a name="UsingAutoStop"></a>Using AutoStop with Samples or Envelopes

When you queuing sample or envelope data, you can request that the unit generator be stopped if that segment finishes and the queue is empty.    Stopping the unit generator automatically can conserve CPU resources.  To request an autostop pass an extra flag when queuing data.

```text
mySampler.samplePort.queue( mySamp, 0,
        mySamp.getNumFrames(), Synth.FLAG_AUTO_STOP );
```

### <a name="ReceivingNotification"></a>Receiving Notification of Sample Playback Completion - UNIMPLEMENTED

### Using a JSyn Applet in a <a name="WebPage"></a>Web Page

You can use a JSyn based Applet in a web page. Firefox, Safari and Internet Explorer are supported for both Macintosh and PC. Here is an example using an Applet called "TJ\_Beep" that is in a Java package called "mystuff".

```text
<APPLET   CODE="mystuff.TJ_Beep.class"
          NAME="TJ_Beep"
          CODEBASE="../../classes"
          WIDTH="200" HEIGHT="100"&gt;
&lt;/APPLET&gt;
```

Look in the "usercode" directory for an example JSyn program called "TJ\_Beep.java", and an HTML file called "TJ\_Beep.html". The [installation notes](/jsyn/docs/old/old/installation/) for your machine will explain how to compile and run this example. Look in the examples directory for many HTML examples.

Note that you must have the JSyn plugin installed correctly before JSyn can be used in an Applet.  See the [JSyn Installation Guide](/jsyn/docs/old/old/installation/) for details.

* * *

## <a name="OverviewClasses"></a>Overview of Classes

#### SynthUnit

A class of object that represents a calculation that occurs in the synthesis engine.

#### SynthSample

A class of objects that contains digital audio data. This is generally read sequentially.

#### SynthTable

A class of objects that contains digital audio data. This can be read via random access.

#### SynthEnvelope

A class of object that contains an array of time,value pairs. It is used for generating a contour for controlling instruments.

#### SynthCircuit

A class of object that contains multiple Units connected together to make a complex sound.

#### SynthPort

A feature of an Instrument or Patch through which signals flow.  A Port can have multiple indexed Parts.

#### SynthVariable

A subclass of SynthPort.  SynthVariables can be set to a particular value using the set() method.

#### SynthInput

A subclass of SynthVariable.  SynthOutputs can be connected to multiple SynthInputs.

#### SynthOutput

A subclass of SynthPort.  SynthOutputs can be connected to multiple SynthInputs.

#### SynthBusInput

A subclass of SynthPort.  Multiple SynthBusOutputs can be connected to a SynthBusInput.  Their values will added together.

#### SynthBusOutput

A subclass of SynthPort.  Multiple SynthBusOutputs can be connected to a SynthBusInput.  Their values will added together.

#### SynthSampleQueue

A subclass of SynthPort.  Portions of a sample can be queued on this port for playback.

#### SynthEnvelopeQueue

A subclass of SynthPort.  Portions of an envelope can be queued on this port for playback.

#### SynthTablePort

A subclass of SynthPort.  A table can be associated with this port using the useTable() method.