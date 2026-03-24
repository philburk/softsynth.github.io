---
layout: base.njk
---

## Plucked String

<center>&lt;p&gt;&lt;b&gt;Click the "Hit" button to hear the sound.&lt;/b&gt;&lt;/p&gt;</center>

#### How it works:

The plucked string sound is generated using the Karplus-Strong method. This involves creating a short delay with feedback. In the feedback loop is a low pass filter. A noisy sample is injected into the delay line to simulate a "pluck". As the noisy data circulates around the delay line, the high frequencies are filtered out and the amplitude dies down. This is similar to what happens when a string is plucked.

*   PluckStrength - controls how hard string is plucked.
*   Rate - controls sample rate of pluck sample.  Slower rate sounds more like rubbed string. Does not affect pitch of string.
*   Feedback - determines how much of the delayed sound is mixed back into the delay line. This determines how long it takes for the sound to decay.

* * *

Java not supported! <script>cheerpjInit();</script>