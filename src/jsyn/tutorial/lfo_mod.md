---
layout: base.njk
title: "JSyn Tutorial"
---

In this example, we are using a SineOscillator to modulate (wiggle) the frequency of a TriangleOscillator. The SineOscillator frequency is set to a very low value, like 5-10 Hz so that it causes a slow wiggle in the TriangleOscillator frequency. The SineOscillator in this situation is referred to as an LFO, or "Low Frequency Oscillator". The sine wave is added to a constant value that determines the center frequency of the TriangleOscillator.

ToDo:

*   Increase the "Modulation Depth" fader. Notice that it causes the frequency wiggles to get **bigger**. This controls the amplitude port of the SineOscillator.
*   Increase the "Modulation Frequency" fader. Notice that it causes the frequency wiggles to get **faster**. This is sometimes called "Modulation Rate". This controls the frequency port of the SineOscillator.
*   Set the Modulation Depth to 0.0 and then move the "Center Frequency" fader. Notice that the sine oscillator goes up and down in pitch without any modulation.  This controls the inputB port of the AddUnit.
*   Set the ModDepth and the ModFreq faders to their maximum values. Set the "Center Frequency" to about 150.0. In the scope, click on the "V\*2" button for freqAdder and modOsc until they show 16.0. This magnifies the displayed trace for those signals. Notice how when the output of freqAdder goes low, the frequency of the triOsc is at its lowest.

To see how I did this, please look at the [source code](/jsyn/tutorial/TUT_Vibrato.txt) for this Java Applet.