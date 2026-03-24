---
layout: base.njk
title: "JSyn Tutorial"
---

We have seen how to modify the durations and values of an envelope by writing new data. But we often want to change the playback rate of the entire envelope. It is common, for example, to make high notes shorter than low notes link on a piano. The envelope may be shared between different notes so we don't want to modify the envelope itself. So how do we do this?

The EnvelopePlayer has a "rate" port that accepts an unsigned value between 0.0 and 2.0. This can be used to speed  the playback rate up to 2X the original speed, or down to a dead stop.

```text
myEnvPlayer.rate.set( 0.5 ); // play at half speed
```

Since you can slow the envelope down much further than you can speed it up, you should fill the envelope with data for half the maximum rate that you want to play. Then you can use rate=2.0 to get to your maximum rate, or go as slow as you want as you approach rate=0.0.