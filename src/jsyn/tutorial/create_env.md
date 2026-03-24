---
layout: base.njk
title: "JSyn Tutorial"
---

An envelope in JSyn is represented by a [SynthEnvelope](/jsyn/docs/autodocs/com/softsynth/jsyn/SynthEnvelope/) object.  The shape of the envelope is defined as an array of double numbers.  The numbers are organised as pairs that describe a duration and a value. Each pair is called a frame and represents one segment of the envelope.   The duration number describes how long it should take the envelope to reach the value number starting from the value of the previous frame.  Consider the following code which describes an envelope with three frames. It is shaped roughly like the bell envelope.

```text
// define shape of envelope as an array of doubles
    double[] data =
    {
        0.02, 1.0,  // Take 0.02 seconds to go to value 1.0.
        0.30, 0.5,  // Take 0.30 seconds to drop to 0.5.
        1.20, 0.0   // Take 1.20 seconds to drop to 0.0.
    };
```

The first frame has a duration of 0.02 and a value of 1.0.  This means that when this envelope is started that it will take 0.02 seconds to get from its current value to a value of 1.0.  If you want to force an envelope to start immediately at a particular value then use a duration of 0.0.  When the envelope reaches 1.0 then it will take 0.30 seconds to reach a value of 0.5.  The final frame typically has a value of zero for envelopes that control amplitude.

Once you have defined the array, you can create the SynthEnvelope object.

```text
myEnvData = new SynthEnvelope( data );
```