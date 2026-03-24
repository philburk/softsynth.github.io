---
layout: base.njk
title: "JSyn Release Notes V14"
---

# JSyn Release Notes V14

## V14.4 12/26/07

*   Reduced latency to lowest default value suggested by PortAudio.
*   Added support for querying default latency using, for example, AudioDevice.getDefaultLowOutputLatency( deviceID ).
*   Added support for control over latency using synthContext.setSuggestedOutputLatency( latency ).
*   Added support fer querying actual latency once engine started using synthContext.getOutputLatency().

## V14.4 11/29/07 (Beta1)

*   Major improvements to Plugin installer for browsers.
*   Added SampleReader\_16V2, a variable rate stereo sample player.
*   Increase max number of JSyn tokens from 2048 to 4096. Each unit generator, SynthEnvelope, SynthSample, and SynthTable uses a token.
*   Moved JSynExamples package to com.softsynth.jsyn.examples
*   Fixed BUG where Filter\_LowPass used to blow up and hang the sound engine if you tried to use a cutoff frequency of 0.0.
*   Terminate PA in DLL function in case Applet does not call Synth.stopEngine(). Exiting ASIO based apps without terminating leaves audio driver in hung state.
*   Dropped support for obsolete platforms including Mac OS9, Microsoft Java, and old Netscape browsers.

## V14.3 Internal release.

*   Fixed BUG0005 - SynthTable double values were clipped between -1.0 to +1.0. Now full range doubles allowed.
*   Fixed BUG0006 - Streaming to disk can click periodically. Fixed bug in csu\_swr16f1.c and csu\_swr16f2.c that caused first loop to get skipped so we only wrote 63 samples on first tick. This caused clicks in TJ\_NonRealTime.
*   Fixed BUG0007 - Stereo WAV samples do not load correctly.
*   Fixed BUG0008 - getNumFramesMoved() fails after recording for several hours.
*   Added port merging Adapt\_TwoInDualOut unit.
*   Added port splitting Adapt\_DualInTwoOut unit.
*   Added band-limited SawtoothOscillatorDPW unit.
*   Support 8 bit WAV files.
*   Added checkAndClearFlowError() to SampleQueueStream.java so that overflow/underflow flag can be cleared.
*   ChannelIn, ChannelOut, LineIn, LineOut can now support more than 17 channels. (build 30)
*   Add SawtoothOscillatorDPW to TJ\_SeeOsc
*   Make dryGain public in circuits.Reberb1
*   Fixed BUG - getRightIndex() in view102.WaveDisplay used to return leftIndex by mistake.
*   Fixed BUG - ParseIFF.skip() now loops until entire amount has been skipped. Affected sample.load ( stream, false );
*   Made SynthSound constructors public.
*   SampleQueueStream.available() now tracks actual frames played instead of estimating by time. Better flush().
*   SynthMixer need constructors that take SynthContext
*   Added missing constructor BussedVoiceAllocator( SynthContext synthContext, int maxVoices )
*   Check native return value and throw SynthException in SynthContext.getDeviceName() if overindexed.
*   Check for zero devices and throw SynthException in SynthContext.getNumDevices() if not initialized.

## V14.2 (special Mac release, 4/16/01 )

Special Macintosh release with an updated JSynNative file in the SDK and IE plugin, and a new npJSyn file in the Netscape plugin. This fixes a bug that caused JSyn to not run on some Macintoshes (eg. a dual G4). If you had trouble running the 4/9/01 release of V14.2, try this one.

## V14.2 (final released 4/9/01)

Please also see the V14.2d beta release note below.

### Bug Fixes

*   Fixed PitchDetector unit. Did not instantiate correctly.
*   Eliminated SynthGenerator superclass for SynthOscillators because it caused newly compiled Applets to not run with the old V14.1 plugins.
*   Removed repaint() calls from setMaxWorldX(), setMinWorldX() in XYController to prevent endless redraws in the EnvelopeEditor.

### Other Changes since V14.2d

*   Updated and fixed compilation instructions for usercode on PC and Macintosh.
*   The Windows SDK is now released with a JAR file. This simplifies development because one does not have to drag around a whole class folder hierarchy. Add the "JSynClasses.jar" file to the CLASSPATH if you want to use JSyn classes.
*   Put com.softsynth.tools package on SoftSynthTools.JAR file. Add that JAR file to the CLASSPATH if you want to use RotaryKnob or PortKnob classes.
*   Expanded token table to a maximum of 2048 tokens. Each unit, sample, table, and envelope requires one token.
*   Use file access SecurityException to determine whether JSyn is running in a browser. If under a browser, then JSyn will ask permission from the user before enabling audio input.
*   Moved  audio device queries from SynthContext to the new AudioDevice class.

## V14.2d (beta posted 3/9/01)

This release fixes a number of bugs in V14.1 and improves usability. It also add new features like RotaryKnobs, multi-channel device support, and several new units including time-varying filters, PinkNoise and a PitchDetector.

### Bug Fixes

*   Fixed bug in MessageDialog, accidentally used second text for third button text.
*   CustomFader now looks dim when disabled.
*   Fixed BUG0003, SynthScope hung when all boxes unchecked
*   Fixed non-real-time sleep problem with threads getting passed by faster threads
*   QueueOff now stops sustain loop even if no data after loop.
*   Clip value to min and max in constructor for LabelledFader to prevent fader crash
*   Fixed bug in Synth.SleepUntilTick that was causing rare "Internal B2F FIFO" errors.
*   Fixed some bugs in queueOn() and queueOff(). Quick queueOn/queueOff for loop that covers sample ran twice!
*   Fixed potential arithmetic underflow in the IIR filters, which are the ones with 'p'oles like Filter\_2o2p2z and Filter\_1o1p. The underflow would cause an increase in CPU usage when the filter was left with zero input for a while.
*   The disconnect() method of SynthDistributor used to not actually disconnect anything but it does now.
*   Fixed bug in Synth.sleepForTicks() that caused it to wake early. This sometimes resulted in an incomplete capture in the Scope.
*   Moved all native calls to CSyn class and synchronized them in SynthContext class. This allows native methods to be synchronized even with JDirect. This could prevent some random crashes particularly when stopping an Applet.

### Knobs and Faders

Added com.softsynth.tools.view.RotaryKnob and EditableRotaryKnob components.

Added com.softsynth.jsyn.view11x.PortKnob which works like PortFader but with a rotary knob.  See "JSynExamples.TJ\_SawKnob".

Added com.softsynth.jsyn.view11x.DecibelPortFader and DecibelPortKnob for convenient control of amplitude ports using decibels. See "JSynExamples.TJ\_SawFader2".

### VoiceAllocator

Added clear() to VoiceAllocator which removes allocated voices. The delete() method calls clear(). The delete() method for BussedVoiceAllocator now also deletes the busReader.

Added getNumVoices() and getNthVoice() to VoiceAllocator which allows you to iterate through the allocated voices.

Added stop() to VoiceAllocator which will stop() all voices.

### Audio Hardware Device Interface

Added audio capture capability for on the Macintosh.

Now using Windows Multi Media  (WMME) on PCs which is more widely available than DirectSound. This allows the use of multi-channel hardware such as the terratec EWS88MT which has 8 inputs and 8 outputs.

Added support for querying the available audio devices and their properties, and for selecting the device to be used with JSyn.  Support is via static methods of SynthContext. See getNumDevices(), getDefaultInputDeviceID(), getDefaultOuputDeviceID(), getMaxInputChannels(id), getMaxOutputChannels(id), and getDeviceName(). For an example, and an interactive way to test your devices, see "JSynExamples.TJ\_Devices".

LineIn, LineOut, and the new ChannelIn and ChannelOut now take an optional parameter that is the device channel number. So if you open an 8 channel device and want to create a ChannelOut that drives chanel 5:

> ```text
> ch5 = new ChannelOut( 5 );
> ```

### SynthScope

Method createProbe now takes a partNum for scoping stereo outputs.

The control panel of the scope can be hidden by calling hideControls() or shown using showControls(). When they are hidden, only the signal display is visible.

### New Unit Generators

Added time varying filters Filter\_LowPass, Filter\_HighPass, Filter\_BandPass, Filter\_BandStop, Filter\_PeakingEQ, Filter\_LowShelf, Filter\_HighShelf. These can be driven by units connected directly to their frequency and Q ports. The Filter\_BandStop is also known as a "notch" filter. The Filter\_LowShelf and the Filter\_HighShelf can be used like the treble and bass tone controls on a stereo.

Added Filter\_StateVariable to be used in place of the old StateVariableFilter. The new filter is better because its frequency can be driven directly in Hz like the other new filter. The old StateVariableFilter required the use of the confusing  setSignalType(Synth.SIGNAL\_TYPE\_SVF\_FREQ) method when driven through a connected unit.

Added PinkNoise (1/F noise) whose energy falls of at 3 dB per octave.

Added IntegrateUnit, which integrates its input between an upper and lower limit. This can be used to generate simple ramps.

Added  monophonic PitchDetector unit that outputs period (1/frequency).

Added class SynthGenerator with an amplitude and an output port that is the basis for the oscillators, WhiteNoise and PinkNoise.

Added class TunableFilter that is the basis for all filters with a frequency, Q and amplitude ports.

### Miscellaneous Additions

Added "com.softsynth.tools" package. These classes are intended to reside on the web site. This allows them to be updated without requiring the release of a new JSyn plugin.

Added mechanism for querying total size and progress when loading a sample from a URL. See SynthSample methods getFileSize() and getNumBytesRead(). See "JSynExamples.TJ\_Sample3.java" for an example.

Eliminated restriction on switching signed &lt;-&gt; unsigned port signal types.

Added com.softsynth.jsyn.circuits.FMOperator with a SineOscillator and an envelope that is useful for building FM algorithms. See "JSynExamples.FMLab" for an example.

Added setNumFrames() to SynthChannelData. NumFrames can be less than allocated. This is useful when  changing the contents of a sample or envelope.

Disconnecting a port that is not connected no longer generates errors.

Added  flag to queue() that allows block to be replaced by newly queued blocks if the flagged block is still in the queue. This allows you to queue many blocks with the queue getting very deep. This is useful when doing "scratch" sampling. The flag is  Synth.FLAG\_SKIP\_IF\_OTHERS.

The bandwidth parameter for the lowShelf() and highShelf() methods of Filter\_202p2z are now depracated. They did not affect the filter settings. New methods without those parameters have been provided.

Added a SynthContext class that allows Applets to be written in a way that will not interfere with each other. Applications that do not use discrete SynthContexts share a common context. If multiple Applets using s shared context  try to start JSyn with different sample rates, or flags, then the second start will fail. Separate contexts allow multiple APplets to run at different rates and with different flags. See "JSynExamples.TJ\_Birds".

## V14.1 (released August 21st, 2000)

This version has significant improvements from previous versions. I have tried to maintain compatibility with previous versions but some of these changes may break existing code. These changes were not made lightly and were intended to correct existing problems with the API before the user base gets too large.

### Expanded Numeric Range

Older versions of JSyn restricted the operation of the internal synthesis engine to the range of -1.0 to +1.0, or 0.0 to +2.0. This was to make it compatible with fixed point DSPs. But since most synthesis work is now being done on CPUs or DSPs with floating point, I have removed these restrictions. You can now, for example, multiply a signal by 1497.35. Note that the AddUnit no longer clip it's output to +/- 1. If you were relying on that side effect then your code may break.

### Oscillators Operate on Hertz Internally

Because we can now have signals above +1.0, Oscillators now can accept values directly in Hertz. This eliminates the requirement to setSignalType(Synth.SIGNAL\_TYPE\_OSC\_FREQ) when mixing frequency control signals. The SIGNAL\_TYPE\_OSC\_FREQ is now equivalent to the new full range signal type so its use may be eliminated.

### Band-Limited Waveforms, (SawtoothOscillatorBL, etc.)

JSyn now offers two methods of generating primitive waveforms like sawtooth and square waves. The original method used a simple arithmetic technique that unfortunately generated frequencies above the Nyquist rate. This resulting in aliasing or "digital grunge" particularly noticeable at high frequencies. The new band-limited waveforms do not have any components above the Nyquist and therefore sound cleaner but require 2-3 times more CPU time. You can hear the different waveforms in the [TJ\_SeeOsc example](/jsyn/examples/tj_seeosc/). Slide the frequency fader back and forth to hear the difference in sound quality. Click the usage button to see the difference between band-limited and non-band limited CPU utilization.  The band limited versions of the primitive waveforms are available by appending "BL" to the class name, eg. SawtoothOscillatorBL, SquareOscillatorBL, PulseOscillatorBL and ImpulseOscillatorBL. The band-limited waveforms are all generated from a precalculated sawtooth table calculated using additive synthesis. The partials were windowed using a raised cosine to eliminate the Gibbs effect.

### Audio Input

Audio Input from a microphone or "line in" is now supported on PCs. The stereo input is available from the "output" port of the LineIn unit. For an example, see "JSynExamples/TJ\_Recorder.java". See the reference documentation for [LineIn](/jsyn/docs/autodocs/com/softsynth/jsyn/LineIn/) for more information. Enable audio input by calling:

> ```text
> start( Synth.FLAG_ENABLE_AUDIO_INPUT )
> ```

### Non-Real-Time Operation

JSyn can be run in a non-real-time mode by passing the flag Synth.FLAG\_NON\_REAL\_TIME to startEngine(). This allows you to record a piece that is too complex to run in real-time, or to record a very simple piece in less than real-time. Since you cannot hear the output directly, you will need to record the audio to disk. See the example program "JSynExamples/TJ\_NonRealTime.java".

### WAVFileWriter

The class com.softsynth.jsyn.util.WAVFileWriter writes audio data to a file in WAV format. This allows JSyn to create audio files that can be read by other applications. See the "JSynExamples/TJ\_NonRealTime.java" for an example of writing a WAV file.

### SampleQueueInputStream, SampleQueueOutputStream and StreamRecorder

These classes support the spooling of audio data. They can be used to record sound to disk, or or to play sound generated by Java or spooled from a file. See the "JSynExamples/TJ\_NonRealTime.java" for an example of recording to disk. See the "JSynExamples/TJ\_OutputStream.java" for an example of playing Java synthesized audio using SampleQueueOutputStream.

### Trivial XML Parser

XML is a new tagged format for encoding information, similar to HTML. Wire uses XML to save its patches. The XMLReader class reads an XML file and passes the information to an XMLListener.

### New Utility Package

We took various utilities that we have written, like the XMLReader above, and placed them in "com.softsynth.util". We hope you find them useful!

### Wire  - Graphical Patch Editor - Beta version

This **beta** version of **Wire** provides a graphical environment for creating and connecting JSyn unit generators. The resulting circuit can be exported as Java source code, compiled and used in a JSyn program. Wire is not a full blown composition environment. It is strictly for designing sounds. For more information, see the [Wire documentation](/jsyn/docs/wire/). Wire is distributed in a separate archive than the SDK.

### Minor Additions

*   The Synth class now has a requestVersion() method that allows an application to request a specific version of JSyn. If the existing version is earlier than the requested version, then the user will be instructed to upgrade to the latest version of JSyn.
*   Added "DivideUnit"  unit generator.
*   Added "PeakFollower"  unit generator to track the peaks of an incoming signal.
*   Added com.softsynth.view.MessageDialog for simple yes/no/cancel style dialogs.
*   Added priority and stopTime parameters to VoiceAllocator. (Thanks to Nick Didkovsky for the stopTime additions.)
*   Added getCurrent() method to SynthVariable and SynthInput ports. This allows you to query the actual current value of a port. The method get() just returns the last value passed to set(). This is handy to see what is driving a connected port.

### Minor Changes

*   If startEngine() is called a second time while the engine is still running,  and the second frameRate is different from the first frameRate, then the first frameRate will be kept. Prior to this version, the second call to startEngine() would fail.

### Specific Code Breakers!

1.  The class com.softsynth.circuits.PoissonTrigger no longer has a "rate" port. It now has a "probability" port. This also affects JSynExamples.GrainFarm. See TJ\_Grains for an example of how to use the new "probability" port.
2.  CustomFader has moved from com.softsynth.jsyn.view11x to com.softsynth.view.
3.  ChebyshevPolynomial has moved from com.softsynth.jsyn.util to com.softsynth.util.

### TroubleShooting Broken Code

If your old code broke when moving to V14.1, consider the following:

1.  If your instrument does not work properly with the SoundTester, then you may need to set the min/max for your ports to a reasonable range. They used to be limited to -1 to +1 but may now be +/- the full floating point range. See setup() calls in "JSynExamples/TJ\_Schmidt.java".