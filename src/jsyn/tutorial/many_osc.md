---
layout: base.njk
title: "JSyn Tutorial"
---

JSyn provides many different waveform oscillators. In this Applet you can select which one is being played and view it in the oscilloscope.

*   Sawtooth - Shaped like the edge of a saw. Contains all harmonics.
*   Sine - Trigonometric function..
*   Triangle - Looks like a sine wave but with pointy corners. Contains all even harmonics.
*   Square - Alternates between -1 and +1. Contains all odd harmonics.
*   RedNoise - Linear ramps between random values.
*   Impulse - single sample spikes.

ToDo:

*   Select Sawtooth. Noteice that at high frequencies it sounds a bit nasty because of aliasing.
*   Select SawBL. Notice that it sounds smooth at high frequencies. BL stand for "Band Limited", which means anti-aliased.
*   Select other waveforms using radio buttons at the bottom. Try to describe their timbre.
*   Uncheck Auto to stop automatic capture.
*   Hit "Capture" to record a new section of sound data.

The source code for this Applet is in the file "JSynExamples/TJ\_SeeOsc.java", which may be found in the JSyn SDK.