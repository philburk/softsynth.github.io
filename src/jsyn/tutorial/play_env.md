---
layout: base.njk
title: "JSyn Tutorial"
---

Envelopes are simply inert data. In order to generate the envelope signal we need a unit generator to read the envelope data. By separating the data from the unit that plays the data, we can share a single envelope between multiple players. The unit generator that plays the envelope is called, not surprisingly, an [EnvelopePlayer](/jsyn/docs/autodocs/com/softsynth/jsyn/EnvelopePlayer/).

```text
myEnvPlayer = new EnvelopePlayer();  // create an envelope player
myEnvPlayer.start();                 // start it running
```

#### How do we tell the envelope player which envelope to play?

Envelope players have a special port for reading envelopes called an "envelopePort" which is an object of the class [SynthEnvelopeQueue](/jsyn/docs/autodocs/com/softsynth/jsyn/SynthEnvelopeQueue/). We can give the envelopePort an envelope and tell it to play. When the player has finished the envelope, we can give it the same envelope to play again, or we could give it a different envelope. We can even give the envelopePort several envelopes at once and it will play them in order one after the other. When one envelope is finished, the next one will start automatically. The envelopePort is thus a "queue". To add envelopes to the players queue, use the "queue()" method.

```text
myEnvPlayer.envelopePort.queue( myEnvData );
```

When one envelope finishes, the new envelopes output value starts smoothly from the value of the previous envelope. This prevents abrupt changes between envelopes which could cause a pop.

If you want to start an envelope right now, then you should clear the queue before adding new envelopes. Otherwise your new envelope may not start until the other envelopes have finished, which could take a while.

```text
myEnvPlayer.envelopePort.clear();
```