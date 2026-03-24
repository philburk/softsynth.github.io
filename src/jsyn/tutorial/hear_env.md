---
layout: base.njk
title: "JSyn Tutorial"
---

Let's use an envelope to control the amplitude of a sine wave. To do this, we must connect the "output" port of the envelope to the "amplitude" port of the sine wave oscillator.

```text
myEnvPlayer.output.connect( sineOsc.amplitude );
```

This applet has two buttons. The "Queue" button queues the envelope to the envelopePort. The "Clear" button clears that port.

To Do:

*   Hit the "Queue" button. Notice that the amplitude has a sudden rise and a gradual fall just like we defined.
*   Hit the "Queue" button several times as quickly as possible. Listen to one envelope start when the previous envelope in the queue finishes.
*   Hit the "Clear" button. Notice that the amplitude freezes at the current level.
*   Hit the "Queue" button again and notice that there is no pop when the envelope starts.

Here is the [source code](/jsyn/tutorial/TUT_HearEnv.txt) for this program.