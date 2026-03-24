---
layout: base.njk
---

## Plucked String

### Click the "Hit" button to hear the sound.

#### How it works:

The plucked string sound is generated using the Karplus-Strong method. This involves creating a short delay with feedback. In the feedback loop is a low pass filter. A noisy sample is injected into the delay line to simulate a "pluck". As the noisy data circulates around the delay line, the high frequencies are filtered out and the amplitude dies down. This is similar to what happens when a string is plucked.

* Rate - controls sample rate of pluck sample.  Slower rate sounds more like rubbed string. Does not affect pitch of string.
* Feedback - determines how much of the delayed sound is mixed back into the delay line. This determines how long it takes for the sound to decay.

<applet
	  code="com.softsynth.jsyn.examples.TJ_Pluck1.class"
	  codebase="../../classes"
	  archive="jsyn-examples.jar"
    name="TJ_Pluck1"
    WIDTH="538" HEIGHT="500">
Wait for CheerpJ to run the applet.
</applet>

<script>  cheerpjInit(); </script>
