---
layout: base.njk
title: "JSyn Tutorial"
---

## Relative Timing  (Scheduling Notes the WRONG Way)

Let us consider how to play notes, or other sound events, at specific times. Suppose, for example, that we want to play a note every  duration ticks starting at startTime. In Java, such a task is usually managed by a Thread. We might define a Thread whose run() method looks like the this:

```text
public void run()    // real-time task for thread
{
    Synth.sleepUntilTick( startTime );  // Wait until it is time to start.
    while( true )
    {
        bang();    // Play a note right now.
        Synth.sleepForTicks( duration );  // Sleep a while. BAD!!!!
    }
}
```

As you can see, this code seems like it should work. It plays a note and then sleeps for the required number of ticks. But suppose that startTime is 500 and duration is 100. We hope this code would play notes at time = 500, 600, 700, 800, etc. But what if it takes more than a tick to play a note? Or what happens if we wake up a little bit late? Any delay that we experience will just get added to our time so we might play notes at time = 500, 602, 709, 812, etc. Thus we will drift slowly from the desired time. If we have two Threads playing notes together, they could drift out of sync. So this code will only work on an infinitely fast processor with zero latency (wakeup delay).

This is analogous to setting our alarm clock to exactly 24 hours after we get out of bed. If we lay in bed an extra five minutes one day  then our alarm clock will be set for 5 minutes later the next morning. These delays will accumulate until eventually we will be getting up at noon and going to bed at dawn. (Maybe you already do this if you work for a startup company.)