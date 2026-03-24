---
layout: base.njk
title: "JSyn Release Notes V13"
---

# JSyn Release Notes V13

## V13.6 for PC testing (released on 5/24/2000, expires on 9/16/00 )

### New Features

#### Separate Initialize() and Start()

As an alternative to Synth.StartEngine() and Synth.stopEngine(), you can now call Synth.initialize(), Synth.start(), stop() and teminate() separately. This allows you to stop and restart the engine without losing all of your allocated Synth objects. When you call terminate() all your Synth objects will be deleted.

#### Audio Input

You can now record sound for modification or playback. Note that some cards (SoundBlaster) do not support simultaneous record and playback in hardware at 44100 Hz. For those cards you must stop the engine and restart it with different flags to switch between record and playback modes. Use the LineIn unit to get audio input. See JSynExamples.TJ\_Recorder.java and TJ\_FullDuplex.java for examples.

#### PeakFollower

A new unit generator that tracks the peaks of an input signal has been added. It is useful for implementing VU meters or for triggering sound when an input rises above a certain level.

#### Quiet Mode

JSyn no longer spews as much text into the Console window. If you want to see that information, call:

> ```text
> Synth.setTrace( Synth.TERSE );
> ```

or

> ```text
> Synth.setTrace( Synth.VERBOSE );
> ```

#### Miscellaneous

*   You can now call disconnect() for busInput ports and busOutput ports.
*   SampleWriter\_16F1 and SampleWriter\_16F2 are now subclasses of SampleWriter which has a samplePort and an input.
*   BussedVoiceAllocator now has a public "output" member that can be used instead of getOutput().

### Bug Fixes

CustomFaders and PortFaders will now resize properly when the window that contains them is resized.

Loading formatted AIFF or WAV audio samples could give "short data chunk" errors when loading from a URL off the web. This was because read() from an InputStream can return after only reading part of the data, which I didn't realize. I now issue multiple reads until I get the full data chunk. The fix is in the "read( byte bar\[\] )" method of ParseIFF.java.

## V13.5 for NT users only (released on 3/2/00, expires on 9/16/00 )

### Bug Fixes

#### Prevent Access Violation under Windows NT

Worked around an apparent bug in DirectSound on NT. You only need this release if you are using Windows NT. Other folks can use JSyn V13.4. The fix involved NOT passing a NULL as the last parameter to IDirectSoundBuffer\_GetCurrentPosition(). The Microsoft documentation says it is legal but it causes an "access violation" under NT. Much thanks to Max Rheiner for finding and fixing this bug.

## V13.4 (release = 2/18/00, expiration =  7/16/00)

### New Features

By default, when the Java garbage collector deletes a SynthObject (eg. a unit generator or sample) the underlying native component is also deleted. This can cause unexpected silence however, if the native component is generating sound. One can now disable this feature be calling:

> ```text
> SynthObject.enableDeletionByGarbageCollector( false );
> ```

### Bug Fixes

#### Start/Stop Tracking

Switching between JSyn Applets quickly could cause a SynthException "engine not started" and cause the new Applet to make no sound.

Sometimes a browser will start the next Applet before stopping theprevious one. Thus the order of calls was:

     Start A, Start B, Stop A, Stop B

instead of:

        Start A, Stop A, Start B, Stop B

This would cause B to have its engine stopped when the Applet A got stopped. I now track the starts & stops better. This bug only affected JSyn Applets in a browser.

#### Workaround for Netscape Plugin Loader Bug

There is an apparent bug in the loader for Netscape plugins. When switching between pages that EMBED the Netscape plugin, the native library is temporarily unavailable. But if it is called because of a Java garbage collection causing a SynthObject deletion, or because of Applet threads that have not yet shut down, then Netscape will hang. The workaround was to use a Java script called "smart\_embed\_jsyn.js" to load a page containing the EMBED tag once, and only once. See the HTML files in the examples directory which use this script.

#### Token Generations

Switching between JSyn Applets quickly could cause a SynthException "invalid token".

I was reusing internal token IDs between successive Applets in JSyn. So if the garbage collector deleted the previous Applets objects when the second Applet was running, then it could accidentally delete some of the the second Applets objects. This would cause the "invalid token" exception when the second Applet tried to use its objects. All JSyn objects are now uniquely identified across multiple Applets.

#### Reading Sample or Envelope Data

Sample.read() did not work when using InternetExplorer or Java 2. This caused the scope to always show a zero level signal. The fix may also eliminate some memory leaks.

The JNI interface between Java and 'C' requires that ReleaseShortArrayElements() be called after using an array passed down from Java. If Java has passed a copy of the array, then it copies the modified data back to the original array. The JVM wasn't copying the arrays before Java2 so everything seeemed to work. But in Java2 tha JVM was passing a copy of the original. So SynthSample.read() would just read zeros because the data wasn't getting copied back. It is also possible that the copy wasn't getting freed when using Java 2 so this could have caused a memory leak. This bug only affected users of Java 2 Virtual Machine and Internet Explorer. It manifested most commonly as no signal displayed in the scope.

#### Stopped Using Depracated Thread Methods

Hitting "Auto" button on scope caused Netscape to complain about possible deadlocks.

The Thread methods stop(), suspend(), resume() are depracated because they can cause resource deadlocks, particularly in Netscape. So I followed the guidelines given by Sun on how to pause a thread. See [http://web2.java.sun.com/docs/books/tutorial/post1.0/preview/threads.html.](http://web2.java.sun.com/docs/books/tutorial/post1.0/preview/threads.html)

#### Reduced Jitter in Usage Calculation

The getUsage() calculation has been modified so it is less jumpy. This will eliminate some clicking and allow more voices to be played.

I moved the timing measurements up into a higher level of code so that I am now measuring larger blocks of code. I also changed the filter coefficients that lowpass filter that smooths the results of the measurement. JSyn will temporarily shut down the synthesis engine if the CPU utilization gets too close to 100% to prevent user lockout. So the spikes in usage could have caused gaps in the sound.

#### Trap Overindexing of Stereo Samples

Reading stereo sample data could cause a crash if the destination array was too small. I wasn't accounting for the extra memory required for stereo samples. So if you called SynthSample read() with too small an array for a stereo sample, it could overwrite the array and cause dents in the side of your computer. ;-)

#### DirectSound Interface

Low level direct sound interface will not complain about too many devices if you have a multi-channel sound card. I increased the number of allowable devices to 32 which should cover most multi-channel situations. This bug caused a benign warning on PCs.

Some DirectSound calls are not supported in NT. These have been removed and should allow JSyn to run under NT.

## New in V013 (release = 10/12/99, expiration =  6/15/00)

### Code Breakers in JSyn V13

These changes may require you to make changes to your old JSyn source code to get it to compile and run under JSyn V13.

1.  The package "com.softsynth.jsyn.view" has been removed. Please decide whether you want to use the obsolete AWT 1.0.2, or the new AWT 1.1 in your program. Then import either "com.softsynth.jsyn.view102" or "com.softsynth.jsyn.view11x". The only advantage to using the old 1.0.2 is to be compatible with some very old browsers like Netscape Navigator V3.

### New Features

1.  Added CustomFader that avoids buggy awt.Scrollbar behavior on PC, and ugly unusable Scrollbar syndrome on the Macintosh. The new CustomFaders also will snap to the mouse if clicked when the shift key is held down. You can also drag across multiple faders. See JSyn example [WaveMaker](/jsyn/examples/). The CustomFader is based on code contributed by Nick Didkovsky. Thanks Nick!
2.  [VoiceAllocator](/jsyn/docs/autodocs/com/softsynth/jsyn/util/VoiceAllocator/) and [BussedVoiceAllocator](/jsyn/docs/autodocs/com/softsynth/jsyn/util/BussedVoiceAllocator/) are new classes that provide voice allocation. This is handy if you want to have multiple voices overlapping in time. See "TJ\_PlayKeys1.java" for an example of how to use them.
3.  [SampleWrite\_16F2](/jsyn/docs/autodocs/com/softsynth/jsyn/SampleWriter_16F2/) \- new unit that writes to a stereo sample. Can be used for capturing a stereo performance.
4.  [SynthObject](/jsyn/docs/autodocs/com/softsynth/jsyn/SynthObject/) will not optionally track Synth objects that are created. This can be used to prevent the garbage collector from deleting them while in use. It canalso be used to automatically delete all Synth objects easily at the end of a program. See SynthObject docs for more info.
5.  [SynthTable](/jsyn/docs/autodocs/com/softsynth/jsyn/SynthTable/#write\(int,%20int,%20double[],%20int,%20int\)).write() can now be called using a double array as well as a short array. Values are stored as doubles internally so this makes more sense.
6.  Synth.getUsage() now works on the MacOS as well as under Windows. So now you can tell how much of the CPU time is being used.
7.  Improved reporting in SynthException
8.  SynthException is now a subclass of RuntimeException so we don't have to say "throws SynthException" or catch them.
9.  Added a SynthException constructor that just takes a string and defaults the errorCode to JS\_ERR\_USER.
10.  Native 'C' code on PC now uses EnterCriticalSection() thread synchronization.
11.  Native synthesis engine uses 20 msec period for MultiMedia timer callback instead of 12 msec
12.  Native implementation of WhiteNoise now uses unsigned arithmetic to extend the sequence length to 2\*\*32.
13.  Default rate for Sample\_Read16V1 was zero, now set to 44100.0
14.  Prevent CPU lockout when Usage gets above 95% by stopping synthesis.
15.  [JSyn API reference docs](/jsyn/docs/autodocs/) generated using JDK 1.3 javadoc. Very cool!

### Bug Fixes

1.  Attempts to queue() sample or envelope data with 0 frames is now trapped and throw an exception. They used to cause the queue to hang.
2.  Fixed bug in Usage calculation that sometimes caused incorrectly high values to reported..
3.  Fixed SynthMixer.connectInput() for partNum > 0
4.  Fixed MultiTapDelay for when longest delay is delay\[1\]
5.  Made numerous internal fixes that will improve stability and prevent memory leaks.
6.  Trap any attempt to create units before Synth.startEngine() is called.
7.  Fixed bugs in SynthScope including an over-indexed array when panning right, and a race condition. Added finish() method which prevents race. See TJ\_Grains for an example.