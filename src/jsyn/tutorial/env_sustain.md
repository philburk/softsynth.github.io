---
layout: base.njk
title: "JSyn Tutorial"
---

The technique we used in the last Applet works fine for percussive notes. But how do we play a note that has a middle section of indeterminate length, like a note on a flute or trumpet? JSyn allows us to queue up portions of a note separately. First we queue the beginning of the note. When the beginning has finished, the envelope player will hold the last value. When we are ready for the note to end, we can queue up the ending portion. Let's define some terms:

> **Attack** = beginning of a note.  
> **Sustain** = middle section of a note that lasts for an indeterminate length of time.  
> **Release** = ending section as the sound dies away.

Let's create an envelope that has a sustain portion and a release portion. We will make each portion only one frame long but they could be any length.

```text
double[] data =
    {
        0.10, 1.0,  // #0, Take 0.1 seconds to go to value 1.0. "Attack"
        0.30, 0.0   // #1, Take 0.3 seconds to drop to 0.0.  "Release"
    };
```

When we start the note, we queue up just the attack using a different form of the queue() method. We can pass as parameters the index of the starting frame, and the number of frames to play.

```text
myEnvPlayer.envelopePort.clear();    // clear queue so note starts immediately
    myEnvPlayer.envelopePort.queue( myEnvData, 0, 1 ); // queue 1 frame starting at frame #0
```

When we are done playing the note, we can queue up the release portion of the envelope.

```text
myEnvPlayer.envelopePort.queue( myEnvData, 1, 1 ); // queue 1 frame starting at frame #1
```