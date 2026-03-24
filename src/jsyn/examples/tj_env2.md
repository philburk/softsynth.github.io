---
layout: base.njk
---

## Multi Segmented Envelope

### How it works:

An envelope contains an array of {duration,value} pairs called segments.  These segments describe a contour or shape that can be used to control other unit generators.  In this example, the envelope is connected to the Amplitude of an oscillator.  Portions of an envelope can be queued up for playback. Note that the Synth.FLAG\_AUTO\_STOP is used to stop the envelope execution when the last segment finishes.  This reduces the CPU utilization which can be seen by clicking on the "Usage" button before and after the envelope finishes.

*   Hit - queues the entire envelope.
*   Attack - queues the initial portion of an envelope then queues the middle of the envelope to play in a loop.
*   Release -  queue the final portion of an envelope.
*   Rate - controls the rate of envelope playback which can range from 0.0 to 2.0.
*   Frequency - controls the pitch of the oscillator.

* * *

<applet
    code="com.softsynth.jsyn.examples.TJ_Env2.class"
    codebase="../../classes"
    archive="jsyn-examples.jar"
    name="TJ_Env2"
    WIDTH="400" HEIGHT="300">
Wait for CheerpJ to run the applet.
</applet>

<script>  cheerpjInit(); </script>

* * *