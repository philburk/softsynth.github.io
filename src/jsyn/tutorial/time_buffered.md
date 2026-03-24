---
layout: base.njk
title: "JSyn Tutorial"
---

We've heard how using absolute timing can prevent us from drifting farther and farther from the correct time to play a note. But even though we are no longer **accumulating** timing errors, notes can still be played late if we wake up late. How can we fix this?

Here is an analogy. Imagine that we absolutely had to be at work at exactly 8 AM every day. I know that is a stretch of the imagination for some but please bear with me. If you knew that it took as little as 30 minutes but definitely no longer than 90 minutes to get up, dress, and drive through traffic, then  you would have to set your alarm clock for 6:30 AM, 90 minutes before work. Some days you might be waiting outside the door for an hour, but at least you would be ready when the boss unlocked it. We can do the same thing in JSyn by setting our wakeup time early. Consider this code:

```text
public void run()    // real-time task for thread
{
    int advanceTime = (int) (Synth.getTickRate() * 0.5); // half second advance
    Synth.sleepUntilTick( startTime  - advanceTime );  // Wake up early!
    int nextTime = startTime;
    while( true ) 
    {
        bang( nextTime );        // Request that a note be played later!
        nextTime += duration;    // Advance nextTime by fixed amount.
        Synth.sleepUntilTick( nextTime - advanceTime );  // Wake up early!
    }
}
```

So now the trick is, if we wake up early, how do we prevent the note from being output early? The answer is the JSyn **Event Buffer**!