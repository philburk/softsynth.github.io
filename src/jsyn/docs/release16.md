---
layout: base.njk
title: "JSyn - Pure Java Release Notes"
---

### JSyn V16 Release Notes

### V16.8.0 - Build 463 - 10/16/2017

*   Fix possible deadlock in AudioFifo. Contributed by Greg (zgeggy2k).
*   Ensure upper bound for argument to Thread#setPriority is less than Thread#MAX\_PRIORITY. Contributed by nmulcahey.
*   Added [MultiPassThrough](https://github.com/philburk/jsyn/blob/464f3d55f7847831c5ba6acf4766260fae1e4a6d/src/com/jsyn/unitgen/MultiPassThrough.java) unit. This allows you to have stereo outputs on a UnitVoice.
*   Add NoteOn and NoteOff with Timestamp to the MultiChannelSynthesizer.

### V16.7.8 - Build 462 - 12/1/2016

*   Added com.jsyn.instruments.DualOscillatorSynthVoice. This is a classic synthesizer voice with two morphing oscillators, a four-pole resonant filter, and two DAHDSR envelopes for amplitude and filter cutoff.
*   Check for frames out-of-bounds when queuing sample or envelope data to a UnitDataQueuePort.
*   InstrumentTester will now use a MIDI keyboard if connected.
*   Add support for Program Change, Aftertouch, and RPNs to the MIDI com.jsyn.midi.MessageParser.
*   Defined lots of controllers in com.jsyn.midi.MidiConstants.
*   Add MultiChannelSynthesizer that manages voices on an arbitrary number of channels. It responds to noteOn and other MIDI like commands but could be used with other music protocols.
*   Added com.jsyn.midi.MidiSynthesizer that parses MIDI and drives a MultiChannelSynthesizer. See UseMidiKeyboard example that reads from a connected MIDI keyboard and sends to a MidiSynthesizer object.
*   Add setValueAdded(boolean) to UnitInputPort. If set true then the value that the port is set() to will be added to the values from any other ports that are connected. If false then the value that the port is set() to will be ignored when other ports are connected. This makes it easy to set a center value using set() and then modulate around that value using a connected port.
*   Add addPortAlias() to Circuit, which allows you to have more than one name for a port.
*   Add soft limiting to FilterFourPoles to prevent it from blowing up due to excessive feedback.
*   Improve the way LinearRamp handles time changes in the middle of a ramp.
*   Add MorphingOscillatorBL. The "shape" port allows you to vary the output continuously from a sine wave at -1.0, to a sawtooth at 0.0 to a pulse wave at 1.0.
*   Add PitchToFrequency unit generator that is a subclass of PowerOfTwo. The pitches are fractional MIDI pitches. A 60.5, for example, would be a quarter tone above Middle C.
*   Define common port names as constants, for example, UnitGenerator.PORT\_NAME\_FREQUENCY = "Frequency". These can be used with getPortByName(String).
*   AudioMath now supports global tuning, for example, AudioMath.setConcertAFrequency(441.0).
*   Added length() to DoubleTable.
*   Added evaluate() to FloatSample so it implements Function interface. Now you can use them for waveshaping or with a FunctionOscillator.

### V16.7.6 Build 460 - 8/15/16

*   Fix race condition when stopping and restarting JSyn. [https://github.com/philburk/jsyn/issues/30](https://github.com/philburk/jsyn/issues/30)
*   Set range of CrossFade unit's "fade" port to -1 to +1.
*   Add Synthesizer.clearCommandQueue() to clear all previously scheduled commands.

### V16.7.5 Build 459 - 11/2/15

*   Added BrownNoise unit generator that uses Brownian motion to produce noise.
*   Fix scaling in FFT.
*   Raised minimum frequency in FilterFourPole to prevent it from blowing up.

### V16.7.3 - Build 457 - 12/25/14

*   Added FilterFourPoles unit - resonant low-pass "Moog" style ladder filter
*   Added ZeroCrossingCounter unit - for debugging and analysis

### V16.7.1 - Build 455 - 11/3/14

*   Fixed WaveRecorder.setMaxRecordingTime(seconds). It counted samples instead of frames for stereo.
*   Added MixerMono, MixerStereo, MixerMonoRamped and MixerStereoRamped units. The Ramped mixers have internal smoothing for gain and pan to prevent zipper noise.
*   Fixed bug with starting, stopping and then restarting JSyn synthesizer with a different sample rate. Some units still ran at the old rate.
*   Fixed crash that could occur when using JPortAudio if synth.start() was called twice in a row.
*   Improved documentation for spectral FFT units.

### V16.7.0 - Build 454 - 7/18/14

*   Added support for writing 24-bit WAV files. See WAVFileWriter.setBitsPerSample().
*   Added method to start a unit generator using a double precision time instead of having to use a TimeStamp: ugen.start(double time)
*   Fixed a rounding error in InterpolatingDelay that caused some audible distortion.
*   Fixed a rounding error in the JavaSound output device and the WAVFileWriter that caused some minor non-linearity near zero. You probably never heard it but it would make a mathematicians' skin crawl.
*   Fixed a bug in the SpectralFilter that prevented using FFT sizes less than 512.
*   Added a brick-wall low-pass filter example to HearSpectralFilter.java.
*   Added some new unit generators:

*   FilterAllPass
*   RangeConverter
*   PhaseShifter

### V16.6.4 - Build 453 - 2/2/14 Beta

*   Add maxFrames to SequentialDataCommon. Used for samples and envelopes.
*   Add com.jsyn.data.EnvelopePoints. Used by EnvelopeEditor.
*   Add queueImmediate() method to UnitDataQueuePort. It will clear the queue as the new item is added. Used by queueOn(). This can cause notes to begin immediately even if there is old data in the queue.
*   Add EnvelopeEditorPanel for editing segmented envelopes. (Note that API is not finalized and may change.)

### V 16.6.3 - Build 452 - 10/30/13 Beta

*   Fixed bug with units working when some ports were set() but not when driven from a connection. These include:

*   LinearRamp: input and time
*   ExponentialRamp: input and time
*   AsymptoticRamp: halfLife
*   ContinuousRamp: time
*   PeakFollower: halfLife

*   Set "current" port initial value to 1.0 so that ExponentialRamp will not throw an IllegalArgumentException if uninitialized..

### V16.5.14 - 12/16/2012 Beta

*   Added crossfading capability to the sample data queue. You can smooth the transition from one queue data block to another. This is handy if you are queuing arbitrary pieces of sample. Call the [setCrossFadeIn](/jsyn/docs/javadocs/com/jsyn/ports/QueueDataCommand/#setCrossFadeIn\(int\))() method of the QueueDataCommand.
*   Added [setImmediate](/jsyn/docs/javadocs/com/jsyn/ports/QueueDataCommand/#setImmediate\(boolean\))(flag) method to QueueDataCommand. If true then the queue will be cleared and this item will be started immediately. It is better to use this flag than to clear the queue from the application because there could be a gap before the next item is available. This is most useful when combined with setCrossFadeIn().
*   When stopping the synthesizer, the audio thread is interrupted. This should result in a quicker shutdown of the synth.
*   Prevent some uninformative NullPointerExceptions that could occur if the audio device initialization failed.

### V16.5.6 - 10/8/12 Beta

*   **IMPORTANT:** SampleLoader.loadFloatSample() no longer throws a javax.sound.sampled.UnsupportedAudioFileException. That is a JavaSound exception. In order to support JSyn on Android we are eliminating references to JavaSound classes from the API. You may need to eliminate it from your catch clauses. Please do not distribute this JAR file with an existing application without testing sample file loading.
*   Added custom audio file parsing to replace the JavaSound file parser. If you need to use the old JavaSound SampleLoader then call SampleLoader.setJavaSoundPreferred(true).
*   Added support for 32-bit floating point WAV and AIF files.
*   Read sample markers and cues and set the sustain loop accordingly.

### V16.5.4 - 9/5/12 Beta

*   Fix problem with default invalid input device when using JPortAudio.

### V16.5.3 - 9/4/12 Beta

*   Added support for [JPortAudio](http://www.portaudio.com/docs/v19-doxydocs/java_binding.html), an alternative to JavaSound for audio I/O. JPortAudio allows you to use multi-channel devices, and also eliminates the annoying clicks on Mac caused by JavaSound.

### V16.5.1 - 6/2/12 Beta

*   Fixed crash in PowerOfTwo when input is -1.5308084989341915E-17. Added extra guard point.
*   Added setEnabled(false) in WaveShapingVoice so it starts off not using any CPU.
*   Rewired SubtractiveSynthVoice so that it does not use any CPU when the envelope finishes.
*   Print a more informative error if the user forgets to add a unit to the synth.

### V16.5.0 - 4/28/12 Beta

*   Added PitchDetector that uses a sample based auto-correlation technique.
*   Completely modified API for VoiceAllocator. There is no longer a VoiceFactory. Instead you pass an array of pre-instantiated UnitVoices to the VoiceAllocator constructor. VoiceAllocator now supports referencing of voices allocated in the future by an integer tag. Added methods noteOn(), noteOff(), allNotesOff(), setPort().
*   WaveShapingVoice now has a built in Chebyshev polynomial table so it can be used for playing notes.
*   Added VoiceDescription, Instrument interface, InstrumentBrowser.
*   Added InstrumentTester app.
*   Big changes to Ports. I removed UnitValuePort because it was a bad legacy from the old JSyn. There are now some port interfaces including ConnectableInput, ConnectableOutput, GettablePort, SettablePort. These are mostly internal changes and should not affect you. Let me know if they do.
*   Add ASCIIMusicKeyboard. It is a KeyListener that makes it very easy to play notes using the ASCII keyboard of a computer. Handy for testing instruments or for Applets.

There were several code breaking API changes this time. Note that this is a beta version and we are tuning the API. We will try to reduce code breaking changes but we also don't want to get stuck with a funky API.

*   UnitVoice has several new methods. Also the noteOn() parameter order changed.
*   UnitSink now has a start() method.
*   UnitGenerator getPorts() now returns Collection&lt;UnitPort&gt; instead of an old style Enumeration.
*   VoiceAllocator no longer uses a factory.
*   Clave is now a preset of DrumWoodFM.

### V16.4.6 - 2/14/12 Beta

*   Fixed SampleLoader.loadFloatSample(file). It mangled the data when loading stereo samples.
*   Changed the function port of FunctionOscillator from protected to public.
*   Fix race condition that could occur when circuits were nested. It would cause code to get executed multiple times resulting in distortion.

### V16.4.4 - 8/29/11 Beta

*   Many binary operator unit gens like Subtract now extend UnitBinaryOperator. If you are using the new JSyn API then you will **need to recompile** with the new JAR file!
*   Added lots more JavaDocs and some online docs.
*   The GrainSource method next() no longer takes the envelope parameter.
*   Fixed range of PseudoRandom.random(). Was negative!
*   Fixed a bug in VoiceAllocator that could cause allocate() to return a null voice.

### V16.4.3 - 6/19/11 Beta

*   Use higher suggested latency by default on Windows platforms to prevent glitching.
*   Improved AudioScope. Added AUTO trigger mode and auto scaling.
*   VariableRateMonoReader and VariableRateStereoReader are now subclasses of VariableRateDataReader.
*   GrainFarm - experimental granular synthesis engine. In progress. API likely to change.
*   JAR file is now a double-clickable application that shows the version and lets you play some sine waves.

### V16.4.2 - 5/3/11 Beta

*   Fixed NullPointerException if table not set in wave-shaper.
*   Added example for ChebyshevSong.
*   Changed name of FunctionLookup unit to FunctionEvaluator.
*   Changed name of Function.lookup() to Function.evaluate().

### V16.4.1 - 5/1/11 Beta

*   Fixed problem with array index out of bounds when using audio input.
*   Added JSyn.createSynthesizer() method.
*   Renamed sample and envelope readers. Use VariableRateMonoReader to play envelopes or samples or both.
*   Released autodocs.
*   Added queueLoop() method.
*   Added finite loop counts for queueLoop.
*   Removed FLAG\_LOOP\_IF\_LAST and other old fashioned bit flags. Use queueLoop instead.
*   Add UnitDataQueueCallback and QueueDataCommand for notification of queue events.

### V16.3 - 10/19/10 Beta

*   New proposed package hierarchy to match migration document.
*   Added missing connect() methods.
*   Fixed disconnect(). Was connecting!
*   Preparation for API release.

### V16.1 - 6/23/10 Beta

*   Fix problem with getDefaultOutputDevice() returning -1 and causing an ArrayIndexOutOfBoundsException.

### V16.0 - 4/5/10 Beta

*   Fixed problem with oscillator frequencies that are outside the Nyquist range. They are now clipped to the Nyquist frequency, which is half the sample rate. This fixes a problem with some Rhythmicon voices.

### V15.9 - 4/3/10 Beta

*   Fixed problem in stereo sample players that was causing NoSuchElementException and a missing right channel.

### V15.8 3/27/10 Beta

*   Replaced peekLast() method that was causing a NoSuchMethodError is JSyn was used with Java 1.5. Apparently peekLast() was added for Java 1.6.
*   Check for user's overindexing of port parts before sending asynchronous command to engine. Now the exception will be thrown in the user code. This makes it easier to debug.

### V15.7 3/24/10 Beta

*   Fixed a race condition bug that caused NullPointerException at (ThingTable.java:99). It could happen if multiple threads were creating and deleting Synth resources like units, envelopes, samples, etc.
*   Implemented Synth.FLAG\_SKIP\_IF\_OTHERS

### V15.7 3/7/10 Beta

*   Detect and report error if mono samples played on stereo sample players or vice versa. That could cause NoSuchElementException in UnitDataQueuePort.checkBlock().

### V15.5 3/4/10 Beta

*   Fixed high pitch whine that was sometimes heard when stopping a SynthCircuit.
*   Added proper clipping to audio output.
*   Fix bug that caused interference between multiple Applets running at the same time.
*   Fixed race condition when stopping units that could cause ConcurrencyModificationException.
*   There is a known problem on Mac with random clicking. This appears to be a JavaSound bug. It does not happen on Windows.

### V15.4 1/6/10 Beta

*   Fixed speed of LinearLag.
*   Fixed spontaneous autoStop in SampleReader\_16V1.
*   Support loading Wire patches.
*   Usage now works.
*   Support getMin() and getMax() for ports by setting a port signal type. The setSignalType() method is deprecated, just a stub, no longer needed.

### V15.3 12/15/09 Beta

*   All unit generators have been converted from 'C' to Java.
*   Should match the old JSyn except for the following:

*   CPU performance will be lower because it is not native code.
*   Latency will be higher because of Java and JavaSound.
*   The SynthPort "signal types" are not implemented. It only made sense for old fixed-point DSP architectures.

*   Applets that use audio input will need to be signed using a digital certificate!