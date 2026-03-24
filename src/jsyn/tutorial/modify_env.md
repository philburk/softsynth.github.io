---
layout: base.njk
title: "JSyn Tutorial"
---

We have seen how to create an envelope using this code:

```text
myEnvData = new SynthEnvelope( data );
```

When the envelope is created, the values in the data array are copied to internal storage inside JSyn. The data array can then be deleted or modified without affecting the envelope. So how can we modify an envelope once it has been created? The answer is to use the envelopes write() method.

Suppose we wanted to change the attack time of an envelope. We can either create a new data array, or we can modify our original array. For clarity, let's make a new array.

```text
double[] data = 
    {
        0.5, 1.0,  // Take 0.5 seconds to go to value 1.0. instead of the original 0.2
    }
```

Now we can write frame #0 of the array to frame #0 of the envelope. The parameters are ( envelopeStartFrame, dataArray, arrayStartFrame, numFrames ).

```text
myEnvData.write( 0, data, 0, 1 );
```

If we wanted to modify the release portion, which is frame #1 in the envelope, we could do this.

```text
data[0] = 5.0; // new release duration
data[1] = 0.0; // final release value
myEnvData.write( 1, data, 0, 1 );
```