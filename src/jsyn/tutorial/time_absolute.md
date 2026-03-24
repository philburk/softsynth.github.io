---
layout: base.njk
title: "JSyn Tutorial"
---

We've heard what can happen when we use relative timing to schedule musical events. Delays accumulate, and multiple threads can drift out of sync. How can we fix this?

We can avoid timing drift by advancing our wakeup time by an exact amount, and then sleeping until that absolute time.

```text
public void run()    // real-time task for thread
{
    Synth.sleepUntilTick( startTime );  // Wait until it is time to start.
    int nextTime = startTime;
    while( true )
    {
        bang();                  // Play a note right now.
        nextTime += duration;    // Advance nextTime by fixed amount!!!!!!
        Synth.sleepUntilTick( nextTime );  // Wake up at calculated time!!!!!
    }
}
```

This way, we might wake up a little late, but we will still try to wake up at the proper time for the next note. So if duration is 100 and startTime is 500, then we might play a note at time = 502, 605, 703, 804, 902, etc.