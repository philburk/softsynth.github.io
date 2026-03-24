---
layout: base.njk
---

# WaveMaker

## How it works:

This applet creates a waveform by adding together sine waves that are multiples of the fundamental frequency.

Move the faders to control the level of each harmonic.

<applet
	code="com.softsynth.jsyn.examples.TJ_WaveMaker.class"
	codebase="../../classes"
	archive="jsyn-examples.jar"
    name="TJ_WaveMaker"
    WIDTH="600" HEIGHT="500">
Wait for CheerpJ to convert the JSyn Applet to WASM.
</applet>

<script>  cheerpjInit(); </script>
