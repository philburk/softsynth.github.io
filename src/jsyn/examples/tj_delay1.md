---
layout: base.njk
---

## Delayed Sound

### How it works:

The output of an oscillator is fed into a long delay line.  Change the "Frequency" of the oscillator from 0.0 up to some value and then back down to produce a short sound. Then wait for the sound to be repeated.  You can produce layers of sound this way.  If the sound becomes too thick then it will start to clip and make noise.  If that occurs, lower the "Feedback" to zero until the sound is reduced.

* * *

<applet
	code="com.softsynth.jsyn.examples.TJ_Delay1.class"
	codebase="../../classes"
	archive="jsyn-examples.jar"
    name="TJ_Delay1"
    WIDTH="400" HEIGHT="100">
Wait for CheerpJ to run the applet.
</applet>

<script>  cheerpjInit(); </script>

* * *