---
layout: base.njk
title: "JSyn Unit Generator Overview"
eleventyNavigation:
  key: "/jsyn/docs/unitlist.md"
  title: "UnitGens"
  order: 6
  parent: "/jsyn/docs/index.md"
---

# JSyn Unit Generators by Type (Pure Java API)

## Arithmetic and Logic

*   [Add](/jsyn/docs/javadocs/com/jsyn/unitgen/Add/) - output = inputA + inputB, clipped between -1.0 and &lt;1.0.
*   [Compare](/jsyn/docs/javadocs/com/jsyn/unitgen/Compare/) - output = ( inputA &gt; inputB ) ? 1.0 : 0.0;
*   [Divide](/jsyn/docs/javadocs/com/jsyn/unitgen/Divide/) - output = inputA / inputB
*   [Latch](/jsyn/docs/javadocs/com/jsyn/unitgen/Latch/) - output = (Gate > 0.0) ? Input : previous-output; used for sample and hold.
*   [LatchZeroCrossing](/jsyn/docs/javadocs/com/jsyn/unitgen/Latch/) - Latches when input crosses zero and clamps to zero.
*   [Maximum](/jsyn/docs/javadocs/com/jsyn/unitgen/Maximum/) - output = ( inputA > inputB ) ? inputA : inputB. Useful for clipping.
*   [Minimum](/jsyn/docs/javadocs/com/jsyn/unitgen/Minimum/) - output = ( inputA &lt; inputB ) ? inputA : inputB. Useful for clipping.
*   [Multiply](/jsyn/docs/javadocs/com/jsyn/unitgen/Multiply/) - output = inputA \* inputB
*   [MultiplyAdd](/jsyn/docs/javadocs/com/jsyn/unitgen/MultiplyAdd/) - output = inputA \* inputB + inputC
*   [PowerOfTwo](/jsyn/docs/javadocs/com/jsyn/unitgen/PowerOfTwo/) - Convert a linear signal to an exponential signal. Useful for converting pitch to frequency.
*   [SchmidtTrigger](/jsyn/docs/javadocs/com/jsyn/unitgen/SchmidtTrigger/) - Comparator with hysteresis (separate Set and Reset levels).
*   [Select](/jsyn/docs/javadocs/com/jsyn/unitgen/Select/) - output = ( select &gt; 0.0 ) ? inputA : inputB;
*   [Subtract](/jsyn/docs/javadocs/com/jsyn/unitgen/Subtract/) - output = inputA- inputB, clipped between -1.0 and <1.0.

## Control

*   [AsymptoticRamp](/jsyn/docs/javadocs/com/jsyn/unitgen/AsymptoticRamp/) - output approaches Input asymptotically.
*   [CrossFade](/jsyn/docs/javadocs/com/jsyn/unitgen/CrossFade/) - Cross fade smoothly between two inputs.
*   [ContinuousRamp](/jsyn/docs/javadocs/com/jsyn/unitgen/ContinuousRamp/) - output approaches Input smoothly with no jumps in position or speed.
*   [EnvelopeAttackDecay](/jsyn/docs/javadocs/com/jsyn/unitgen/EnvelopeAttackDecay/) - very simple envelope.
*   [EnvelopeDAHDSR](/jsyn/docs/javadocs/com/jsyn/unitgen/EnvelopeDAHDSR/) - similar to ADSR but with a delay and a hold.
*   [ExponentialRamp](/jsyn/docs/javadocs/com/jsyn/unitgen/ExponentialRamp/) - output approaches Input exponentially.
*   [VariableRateMonoReader](/jsyn/docs/javadocs/com/jsyn/unitgen/VariableRateMonoReader/) - Play linear segments of an envelope or a sample.
*   [FourWayFade](/jsyn/docs/javadocs/com/jsyn/unitgen/FourWayFade/) - Cross fade smoothly between four inputs.
*   [Pan](/jsyn/docs/javadocs/com/jsyn/unitgen/Pan/) - Pan a mono signal between two outputs.
*   [LinearRamp](/jsyn/docs/javadocs/com/jsyn/unitgen/LinearRamp/) - output approaches Input linearly.
*   [ParabolicEnvelope](/jsyn/docs/javadocs/com/jsyn/unitgen/ParabolicEnvelope/) - Generate an inverted parabolic arc.
*   [PeakFollower](/jsyn/docs/javadocs/com/jsyn/unitgen/PeakFollower/) - Tracks the peaks of an input signal.

## Filters

*   [FilterOneZero](/jsyn/docs/javadocs/com/jsyn/unitgen/FilterOneZero/) - output = y(n) = A0\*x(n) + A1\*x(n-1), first order, one zero.
*   [FilterOnePole](/jsyn/docs/javadocs/com/jsyn/unitgen/FilterOnePole/) - output = y(n) = A0\*x(n) - B1\*y(n-1), first order, one pole.
*   [FilterOnePoleOneZero](/jsyn/docs/javadocs/com/jsyn/unitgen/FilterOnePoleOneZero/) - output = y(n)  = A0\*x(n) + A1\*x(n-1) - B1\*y(n-1), first order, one pole, one zero. (allpass)
*   [FilterTwoPoles](/jsyn/docs/javadocs/com/jsyn/unitgen/FilterTwoPoles/) - output = y(n) = A0\*x(n) - B1\*y(n-1)  - B2\*y(n-2), second order, two pole. (reson)
*   [FilterTwoPolesTwoZeros](/jsyn/docs/javadocs/com/jsyn/unitgen/FilterTwoPolesTwoZeros/) - output = y(n) = 2.0 \* (A0\*x(n) + A1\*x(n-1)  + A2\*x(n-2) - B1\*y(n-1)  - B2\*y(n-2)), second order, two pole, two zero.
*   [FilterBandPass](/jsyn/docs/javadocs/com/jsyn/unitgen/FilterBandPass/) - cuts frequencies outside a narrow band.
*   [FilterBandStop](/jsyn/docs/javadocs/com/jsyn/unitgen/FilterBandStop/) - cuts frequencies within a narrow band.
*   [FilterHighPass](/jsyn/docs/javadocs/com/jsyn/unitgen/FilterHighPass/) - resonant biquad, cuts out lower frequencies.
*   [FilterHighShelf](/jsyn/docs/javadocs/com/jsyn/unitgen/FilterHighShelf/) - resonant biquad, cuts out higher frequencies with a flat response below the knee.
*   [FilterLowPass](/jsyn/docs/javadocs/com/jsyn/unitgen/FilterLowPass/) - resonant biquad, cuts out higher frequencies.
*   [FilterLowShelf](/jsyn/docs/javadocs/com/jsyn/unitgen/FilterLowShelf/) - resonant biquad, cuts out lower frequencies with a flat response below the knee.
*   [FilterStateVariable](/jsyn/docs/javadocs/com/jsyn/unitgen/FilterStateVariable/) - State Variable Resonant Filter with LowPass, BandPass and HighPass outputs.

## Miscellaneous

*   [Delay](/jsyn/docs/javadocs/com/jsyn/unitgen/Delay/) - output = Input delayed by specified amount.
*   [InterpolatingDelay](/jsyn/docs/javadocs/com/jsyn/unitgen/InterpolatingDelay/) - output = Input delayed by variable amount.
*   [LineOut](/jsyn/docs/javadocs/com/jsyn/unitgen/LineOut/) - Input\[0:1\] goes to global mixer then to DAC.
*   [LineIn](/jsyn/docs/javadocs/com/jsyn/unitgen/LineIn/) - Output\[0:1\] comes from a microphone or Line Level input.
*   [FunctionEvaluator](/jsyn/docs/javadocs/com/jsyn/unitgen/FunctionEvaluator/) - Interpolate value from a Function or a lookup table. Used for wave shaping, complex function lookup.

## Noise

*   [RedNoise](/jsyn/docs/javadocs/com/jsyn/unitgen/RedNoise/) - Linearly interpolate between noise values with Frequency control.
*   [WhiteNoise](/jsyn/docs/javadocs/com/jsyn/unitgen/WhiteNoise/) - output = random value evenly distributed between -1.0 and <1.0.

## Oscillators and Generators

*   [GrainFarm](/jsyn/docs/javadocs/com/jsyn/unitgen/GrainFarm/) - Granular synthesis engine.
*   [ImpulseOscillator](/jsyn/docs/javadocs/com/jsyn/unitgen/ImpulseOscillator/) - Impulse train with Frequency and Amplitude control. Sharp spikes.
*   [ImpulseOscillatorBL](/jsyn/docs/javadocs/com/jsyn/unitgen/ImpulseOscillatorBL/) - Impulse train with Frequency and Amplitude control. Sharp spikes.  (Band Limited version)
*   [PulseOscillator](/jsyn/docs/javadocs/com/jsyn/unitgen/PulseOscillator/) - Pulse wave oscillator with width control.
*   [PulseOscillatorBL](/jsyn/docs/javadocs/com/jsyn/unitgen/PulseOscillatorBL/) - Pulse wave oscillator with width control. (Band Limited version)
*   [SawtoothOscillator](/jsyn/docs/javadocs/com/jsyn/unitgen/SawtoothOscillator/) - Sawtooth wave oscillator. Harsh.
*   [SawtoothOscillatorBL](/jsyn/docs/javadocs/com/jsyn/unitgen/SawtoothOscillatorBL/) - Sawtooth wave oscillator. Harsh. (Band Limited version)
*   [SineOscillator](/jsyn/docs/javadocs/com/jsyn/unitgen/SineOscillator/) - Sine wave oscillator. Pure smooth tone.
*   [SquareOscillator](/jsyn/docs/javadocs/com/jsyn/unitgen/SquareOscillator/) - Square wave oscillator. Buzzy.
*   [SquareOscillatorBL](/jsyn/docs/javadocs/com/jsyn/unitgen/SquareOscillatorBL/) - Square wave oscillator. Buzzy. (Band Limited version)
*   [FunctionOscillator](/jsyn/docs/javadocs/com/jsyn/unitgen/FunctionOscillator/) - Arbitrary waveform generated by a Function or table lookup.
*   [TriangleOscillator](/jsyn/docs/javadocs/com/jsyn/unitgen/TriangleOscillator/) - Triangle wave oscillator. Almost as smooth as sine wave.

## Sample Related

*   [FixedRateMonoReader](/jsyn/docs/javadocs/com/jsyn/unitgen/FixedRateMonoReader/) - Plays mono samples at a fixed rate.
*   [FixedRateStereoReader](/jsyn/docs/javadocs/com/jsyn/unitgen/FixedRateStereoReader/) - Plays stereo samples at a fixed rate.
*   [VariableRateMonoReader](/jsyn/docs/javadocs/com/jsyn/unitgen/VariableRateMonoReader/) - Plays mono samples or envelopes at a variable rate with linear interpolation.
*   [VariableRateStereoReader](/jsyn/docs/javadocs/com/jsyn/unitgen/VariableRateStereoReader/) - Plays stereo samples at a variable rate with linear interpolation.
*   [FixedRateMonoWriter](/jsyn/docs/javadocs/com/jsyn/unitgen/FixedRateMonoWriter/) - Writes to a mono sample. Used for delay line for echo/reverb/delay effects.
*   [FixedRateStereoWriter](/jsyn/docs/javadocs/com/jsyn/unitgen/FixedRateStereoWriter/) - Writes to a stereo sample.