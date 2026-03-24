---
layout: base.njk
title: "JSyn Tutorial"
---

We have seen how to get a steady sustained value in the middle of an envelope by queuing up a short attack and then letting the queue run dry. But what if we want the middle of the note to wiggle?

Lets create a note that has a middle that oscillates between two value.

```text
double[] data =
    {
        0.10, 1.0,  // #0, Take 0.10 seconds to go to value 1.0. "Attack"
        0.10, 0.5,  // #1, Take 0.10 seconds to drop to value 0.5. Part of "Sustain Loop"
        0.05, 0.8,  // #2, Take 0.05 seconds to rise to value 0.8. Part of "Sustain Loop"
        0.30, 0.0   // #3, Take 0.30 seconds to drop to 0.0.  "Release"
    };
```

When we start the note, we can queue up the attack as before.

```text
myEnvPlayer.envelopePort.clear();    // clear queue so note starts immediately
    myEnvPlayer.envelopePort.queue( myEnvData, 0, 1 ); // queue 1 frame starting at frame #0
```

Now to play the middle section repeatedly, frames #1 and #2, we can use queueLoop(). This method will queue the data as before. But if this is the last block of data in the queue then it will loop until the queue is cleared, or until more data is queued.

```text
myEnvPlayer.envelopePort.queueLoop( myEnvData, 1, 2 ); // queue 2 frame loop starting at frame #1
```

The release portion of the note is handled the same way as before. Just queue the release portion. The loop will stop when there is more data in the queue to be played.