---
layout: base.njk
title: "JSyn Tutorial"
---

Digital audio consists of a series of numbers, called "**samples**", that describe a signals amplitude in time. In order to hear a smooth sound, we must generate many numbers per second. To produce a stereo signal we must produce two numbers, one for each channel, left and right. The pair of numbers are played together and are called a "**frame**". JSyn typically generates 44100 frames per second which is the same rate that a Compact Disc is played.

Time in JSyn is measured in "**ticks**". A tick occurs every 64 frames. If the frame rate is 44100 fps then the tick rate would be 44100/64 or approximately 689 ticks per second. The tick count starts at zero when JSyn is started. You can find the **current JSyn time** by calling:

```text
time = Synth.getTickCount();
```

You can find the **current tick rate** by calling:

```text
rate = Synth.getTickRate();
```

You can put your program to **sleep** for a certain number of ticks by calling:

```text
Synth.sleepForTicks( numTicksToSleep );
```

To **sleep until a specific time**, call:

```text
Synth.sleepUntilTick( wakeupTime );
```

These sleep methods put the calling Thread to sleep. They do not put the synthesis engine to sleep.