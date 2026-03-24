---
layout: base.njk
---

## Envelope Editor

### How it works:

An envelope contains an array of {duration,value} pairs called frames. In this example the contour described by these shapes is used to control the amplitude of an oscillator.

*   Hit "Queue" to play the envelope once.
*   Hit "QueueLoop" to  play the envelope repeatedly.
*   Hit "Clear" to clear the envelope queue and freeze the envelope player at its current value.
*   Drag the points to change the duration and value of frames.
*   Click between points to add new frames.
*   Hold down the SHIFT key and click on a point to delete it.

* * *

<applet
	code="com.softsynth.jsyn.examples.TJ_EnvEdit1.class"
	codebase="../../classes"
	archive="jsyn-examples.jar"
    name="TJ_EnvEdit1"
    WIDTH="582" HEIGHT="436">
Wait for CheerpJ to run the applet.
</applet>

<script>  cheerpjInit(); </script>

* * *


Click here to see the source code for [TJ\_EnvEdit1.java](/jsyn/examples/TJ_EnvEdit1.java).