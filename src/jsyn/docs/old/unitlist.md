---
layout: base.njk
title: "JSyn Unit Generator Overview"
---

&lt;!-- .bigred { color: #F00; } --&gt;

# This old API is deprecated. Please use [the new API instead](/jsyn/docs/)!

# JSyn Unit Generator Overview

## Arithmetic and Logic

*   [AddUnit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/AddUnit/) - output = inputA + inputB, clipped between -1.0 and &lt;1.0.
*   [CompareUnit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/CompareUnit/) - output = ( inputA &gt; inputB ) ? 1.0 : 0.0;
*   [DivideUnit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/DivideUnit/) - output = inputA / inputB
*   [LatchUnit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/LatchUnit/) - output = (Gate > 0.0) ? Input : previous-output; used for sample and hold.
*   [MaximumUnit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/MaximumUnit/) - output = ( inputA > inputB ) ? inputA : inputB. Useful for clipping.
*   [MinimumUnit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/MinimumUnit/) - output = ( inputA &lt; inputB ) ? inputA : inputB. Useful for clipping.
*   [MultiplyUnit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/MultiplyUnit/) - output = inputA \* inputB
*   [MultiplyAddUnit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/MultiplyAddUnit/) - output = inputA \* inputB + inputC
*   [MultiplyAddUnsignedUnit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/MultiplyAddUnsignedUnit/) - output = inputA \* inputB + inputC. C and output are Unsigned.
*   [MultiplyUnsignedUnit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/MultiplyUnsignedUnit/) - output = inputA \* inputB. A, B and output are Unsigned.
*   [SchmidtTrigger](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SchmidtTrigger/) - Comparator with hysteresis (separate Set and Reset levels).
*   [SelectUnit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SelectUnit/) - output = ( select &gt; 0.0 ) ? inputA : inputB;
*   [SubtractUnit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SubtractUnit/) - output = inputA- inputB, clipped between -1.0 and <1.0.

## Control

*   [CrossFade](/jsyn/docs/old/autodocs/com/softsynth/jsyn/CrossFade/) - Cross fade smoothly between two inputs.
*   [ExponentialLag](/jsyn/docs/old/autodocs/com/softsynth/jsyn/ExponentialLag/) - output approaches Input exponentially.
*   [EnvelopePlayer](/jsyn/docs/old/autodocs/com/softsynth/jsyn/EnvelopePlayer/) - Play linear segments of an envelope.
*   [FourWayFade](/jsyn/docs/old/autodocs/com/softsynth/jsyn/FourWayFade/) - Cross fade smoothly between four inputs.
*   [PanUnit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/PanUnit/) - Pan a mono signal between two outputs.
*   [ParabolicEnvelope](/jsyn/docs/old/autodocs/com/softsynth/jsyn/ParabolicEnvelope/) - Generate an arcing envelope useful for granular synthesis.
*   [PeakFollower](/jsyn/docs/old/autodocs/com/softsynth/jsyn/PeakFollower/) - Tracks the peaks of an input signal.

## Filters

*   [Filter\_1o1z](/jsyn/docs/old/autodocs/com/softsynth/jsyn/Filter_1o1z/) - output = y(n) = A0\*x(n) + A1\*x(n-1), first order, one zero.
*   [Filter\_1o1p](/jsyn/docs/old/autodocs/com/softsynth/jsyn/Filter_1o1p/) - output = y(n) = A0\*x(n) - B1\*y(n-1), first order, one pole.
*   [Filter\_1o1p1z](/jsyn/docs/old/autodocs/com/softsynth/jsyn/Filter_1o1p1z/) - output = y(n)  = A0\*x(n) + A1\*x(n-1) - B1\*y(n-1), first order, one pole, one zero. (allpass)
*   [Filter\_2o2p](/jsyn/docs/old/autodocs/com/softsynth/jsyn/Filter_2o2p/) - output = y(n) = A0\*x(n) - B1\*y(n-1)  - B2\*y(n-2), second order, two pole. (reson)
*   [Filter\_2o2p2z](/jsyn/docs/old/autodocs/com/softsynth/jsyn/Filter_2o2p2z/) - output = y(n) = 2.0 \* (A0\*x(n) + A1\*x(n-1)  + A2\*x(n-2) - B1\*y(n-1)  - B2\*y(n-2)), second order, two pole, two zero.
*   [Filter\_BandPass](/jsyn/docs/old/autodocs/com/softsynth/jsyn/Filter_BandPass/) - passes frequencies within a narrow band.
*   [Filter\_BandStop](/jsyn/docs/old/autodocs/com/softsynth/jsyn/Filter_BandStop/) - passes frequencies within a narrow band.
*   [Filter\_HighPass](/jsyn/docs/old/autodocs/com/softsynth/jsyn/Filter_HighPass/) - resonant biquad, cuts out lower frequencies.
*   [Filter\_HighShelf](/jsyn/docs/old/autodocs/com/softsynth/jsyn/Filter_HighShelf/) - resonant biquad, cuts out higher frequencies with a flat response below the knee.
*   [Filter\_LowPass](/jsyn/docs/old/autodocs/com/softsynth/jsyn/Filter_LowPass/) - resonant biquad, cuts out higher frequencies.
*   [Filter\_LowShelf](/jsyn/docs/old/autodocs/com/softsynth/jsyn/Filter_LowShelf/) - resonant biquad, cuts out lower frequencies with a flat response below the knee.
*   [StateVariableFilter](/jsyn/docs/old/autodocs/com/softsynth/jsyn/StateVariableFilter/) - State Variable Resonant Filter with LowPass, BandPass and HighPass outputs.

## Miscellaneous

*   [DelayUnit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/DelayUnit/) - output = Input delayed by specified amount.
*   [InterpolatingDelayUnit](/jsyn/docs/old/autodocs/com/softsynth/jsyn/InterpolatingDelayUnit/) - output = Input delayed by variable amount.
*   [BusReader](/jsyn/docs/old/autodocs/com/softsynth/jsyn/BusReader/) - Has a BusInput and a normal output. Useful for mixing several signals.
*   [BusWriter](/jsyn/docs/old/autodocs/com/softsynth/jsyn/BusWriter/) - Has a normal Input and a busOutput. Useful for mixing several signals.
*   [LineOut](/jsyn/docs/old/autodocs/com/softsynth/jsyn/LineOut/) - Input\[0:1\] goes to global mixer then to DAC.
*   [LineIn](/jsyn/docs/old/autodocs/com/softsynth/jsyn/LineIn/) - Output\[0:1\] come from a microphone or Line Level input.
*   [WaveShaper](/jsyn/docs/old/autodocs/com/softsynth/jsyn/WaveShaper/) - Interpolate value from table. Used for wave shaping, function lookup.

## Noise

*   [RedNoise](/jsyn/docs/old/autodocs/com/softsynth/jsyn/RedNoise/) - Linearly interpolate between noise values with Frequency control.
*   [WhiteNoise](/jsyn/docs/old/autodocs/com/softsynth/jsyn/WhiteNoise/) - output = random value evenly distributed between -1.0 and <1.0.

## Oscillators

*   [ImpulseOscillator](/jsyn/docs/old/autodocs/com/softsynth/jsyn/ImpulseOscillator/) - Impulse train with Frequency and Amplitude control. Sharp spikes.
*   [ImpulseOscillatorBL](/jsyn/docs/old/autodocs/com/softsynth/jsyn/ImpulseOscillatorBL/) - Impulse train with Frequency and Amplitude control. Sharp spikes.  (Band Limited version)
*   [PulseOscillator](/jsyn/docs/old/autodocs/com/softsynth/jsyn/PulseOscillator/) - Pulse wave oscillator with width control.
*   [PulseOscillatorBL](/jsyn/docs/old/autodocs/com/softsynth/jsyn/PulseOscillatorBL/) - Pulse wave oscillator with width control. (Band Limited version)
*   [SawtoothOscillator](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SawtoothOscillator/) - Sawtooth wave oscillator. Harsh.
*   [SawtoothOscillatorBL](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SawtoothOscillatorBL/) - Sawtooth wave oscillator. Harsh. (Band Limited version)
*   [SineOscillator](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SineOscillator/) - Sine wave oscillator. Pure smooth tone.
*   [SquareOscillator](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SquareOscillator/) - Square wave oscillator. Buzzy.
*   [SquareOscillator](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SquareOscillatorBL/) - Square wave oscillator. Buzzy. (Band Limited version)
*   [TableOscillator](/jsyn/docs/old/autodocs/com/softsynth/jsyn/TableOscillator/) - Arbitrary waveform. Controlled by Frequency, not SampleRate.
*   [TriangleOscillator](/jsyn/docs/old/autodocs/com/softsynth/jsyn/TriangleOscillator/) - Triangle wave oscillator. Almost as smooth as sine wave.

## Sample Related

*   [SampleReader\_16F1](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SampleReader_16F1/) - Play 16 bit mono sample at a fixed rate.
*   [SampleReader\_16F2](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SampleReader_16F2/) - Play 16 bit stereo sample at a fixed rate.
*   [SampleReader\_16V1](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SampleReader_16V1/) - Play 16 bit mono sample at a variable rate, linear interpolation.
*   [SampleWriter\_16F1](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SampleWriter_16F1/) -  Input written to SynthSample serving as delay line for echo/reverb/delay effects.
*   [SampleWriter\_16F2](/jsyn/docs/old/autodocs/com/softsynth/jsyn/SampleWriter_16F2/) -  Input written to stereo SynthSample serving as stereo delay line or for capturing a performance..

##  

* * *

Possible Units for Future Development

*   Math\_Integrator - output = output+Input, useful for inexpensive ramps.
*   Ramp\_Linear - Linear envelope segment generator.
*   Lag\_Linear - output = Input with limited rate of change .
*   Lag\_Peak - output tracks Input peaks with exponential decay.
*   CUBIC\_AMPLIFIER - Non-linear amplifier for "fuzz box" effects.
*   DELAY4 - output\[3\] = output\[2\], ..., output\[0\] = Input, for filter construction.
*   DELAY\_F2 - Input\[0:1\] written to DelayLine for stereo delay effects.
*   DEPOPPER - Used to reduce pops when stop() and start() called.
*   EXPONENTIAL\_ENVELOPE - Exponential envelope segment generator.
*   EXPMOD\_UNSIGNED - output = input\*(2.0\*\*modulation)), for pitch modulation.
*   SAMPLER\_16\_V2 - Play 16 bit stereo sample at a variable rate, linear interpolation.
*   SAMPLER\_8\_F1 - Play 8 bit mono sample at a fixed rate.
*   SAMPLER\_8\_F2 - Play 8 bit stereo sample at a fixed rate.
*   SAMPLER\_8\_V1- Play 8 bit mono sample at a variable rate, linear interpolation.
*   SAMPLER\_8\_V2- Play 8 bit stereo sample at a variable rate, linear interpolation.
*   SAMPLER\_ULAW\_F1 - Play 8 bit mono sample at a fixed rate.
*   SAMPLER\_ULAW\_F2 - Play 8 bit stereo sample at a fixed rate.
*   SAMPLER\_ULAW\_V1 - Play 8 bit mono sample at a variable rate, linear interpolation.
*   SAMPLER\_ULAW\_V2 - Play 8 bit stereo sample at a variable rate, linear interpolation.
*   SAMPLER\_DRIFT\_V1 - 16 bit sampler used for variable length delay effects
*   SAMPLER\_RAW\_F1 - Play 16 bit mono sample at a fixed rate with no Amplitude control.
*   TAP\_OUTPUT - output\[0:1\] is current sum of all mixers and LineOuts.