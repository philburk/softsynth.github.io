---
layout: base.njk
title: "JSyn Example of Wind Sound"
---

## Wind using Pure Java JSyn

### How it works:

This wind noise is created by feeding white noise into a low pass filter.  The cutoff frequency of the low pass filter is being modified by a slowly varying random ramp function.  Change the values below to hear their effect on the sound. The oscilloscope gives you a plot of the amplitude of the wind circuit versus time.


<APPLET
    code="com.jsyn.examples.CircuitTester.class"
    archive="jsyn-examples-v2-17.2.0.jar"
    name="WindCircuit"
    WIDTH="491" HEIGHT="700">
Wait for CheerpJ to run the applet.
</APPLET>

<script>  cheerpjInit(); </script>
