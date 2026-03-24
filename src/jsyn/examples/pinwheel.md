---
layout: base.njk
---

# PinWheel by Phil Burk - 1997


This Java Applet was written using JSyn, the audio synthesis API for Java. You can find out how to add audio synthesis to your own applets at [/jsyn](/jsyn)

This JSyn Applet uses an unusual form of melodic transformation. Instead of transposing or reversing the melody, it rotates it in a pitch/time space.

*   Move the fader to adjust the rate of rotation.
*   Hit the Random button to get a new melody.

* * *

<applet
	code="com.softsynth.jsyn.examples.pinwheels.PinWheels.class"
	codebase="../../classes"
	archive="jsyn-examples.jar"
    name="PinWheels"
    WIDTH="550" HEIGHT="500">
Wait for CheerpJ to run the applet.
</applet>

<script>  cheerpjInit(); </script>

* * *