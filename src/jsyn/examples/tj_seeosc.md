---
layout: base.njk
---

# See Oscillator Waveforms

## How it works:

This examples generates many different waveforms and displays them using the oscilloscope.

**Select a waveform, eg. Sine, using radio buttons below.**

Waveforms include:

*   Sine = Pure sine wave. No harmonics.
*   Sawtooth = Shaped like the edge of a saw. Contains all harmonics. At negative frequency, it slopes backwards.
*   Triangle = Looks like a sine wave but with pointy corners. Contains all even harmonics.
*   Square = Alternates between -1 and +1. Contains all odd harmonics.
*   RedNoise = Linear ramps between random values.
*   Impulse = Single sample spikes.

Note that the waveforms with the "BL" or "DPW" suffix are band-limited. Sweep the frequency up and down and compare their smooth sound with the non-band-limited versions. Band limiting eliminates high frequency partials above the Nyquist rate which cause aliasing.

* * *

<applet
	code="com.jsyn.examples.SeeOscillators.class"
	archive="jsyn-examples-v2-17.2.0.jar"
    name="SeeOscillators"
    WIDTH="800" HEIGHT="600">
Wait for CheerpJ to run the applet.
</applet>

<script>  cheerpjInit(); </script>