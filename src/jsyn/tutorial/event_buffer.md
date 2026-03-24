---
layout: base.njk
title: "JSyn Tutorial"
---

Sometimes we want musical events to occur, not now, but at some specific time in the future. For that reason, JSyn allows an optional timestamp for time-critical operations. For example to set the frequency of an oscillator at a time of exactly 8193 ticks, then do this:

```text
myOsc.frequency.set( 8193, 440.0 );
```

You can also use a timestamp for these other methods:

```text
myOsc.start( timeStamp );   // start unit generator at specific time
myOsc.stop( timeStamp );    // stop unit generator at specific time
```

```text
myEnvPlayer.envelopePort.queue( timeStamp, myEnvData );   // queue envelope data at specific time
myEnvPlayer.envelopePort.clear( timeStamp );   //  clear envelope queue at specific time
```

Time stamps also work for queuing digital audio sample data. But we haven't learned how to do that yet.

The EventBuffer operates at the same level as the synthesis engine so the timing can be perfectly accurate. The only time it won't be accurate is if the timeStamp is for a time that has already passed. In that case, the event will just happen as soon as possible.

You could use the event buffer to schedule very precise short sequences of sound to play in the near future. You can also use the event buffer for ongoing sequences played by a Thread. In either case, make sure that you schedule the sound far enough in advance that you don't risk being too late.  The advanceTime you need is determined by your operating system latency. For Windows 95 on a 233 MHz Pentium I would use 300 msec. It could be less for Macintosh and much less for Linux.  Basically, if the timing sounds good, try a smaller advanceTime. If it sounds ragged, use a larger advanceTime.