---
layout: base.njk
title: "JSyn Tutorial"
---

In the previous page, we had to convert a frequency in Hertz to an internal phaseIncrement value for the synthesis engine. If you think that is a pain in the butt, then we agree. JSyn, therefore, provides a way to specify that we want to interpret the values that we use on a port in a certain way. We could calculate the internal values ourselve, like this:

```text
freqAdder.inputB.set( 400.0 * 2.0 / 44100.0 ); // set center frequency to 400 Hz
```

But instead, let's tell JSyn that since we are ultimately controlling the center frequency of an oscillator using a port on the adder, that we want to be able to set that adder port using Hertz values.

```text
freqAdder.inputB.setSignalType( Synth.SIGNAL_TYPE_OSC_FREQ );
freqAdder.inputB.set( 400.0 ); // set center frequency to 400 Hz
```

All subsequent calls to set() for that port will be interpreted as an oscillator frequency in Hertz. If we don't know  the signal type for a port, then we can just pass the port itself to setSignalType().  Here we make the inputB port of the adder convert values the same way the frequency port on the oscillator does.

```text
freqAdder.inputB.setSignalType( sineOsc2.frequency );
```

You may wonder why we don't just change the signal type automatically when we connect various units together. But the adder could be connected to, and therefore controlling, other ports besides the sineOsc2.frequency port.   Rather than try to guess what the programmer wants, and risk getting it wrong. I prefer to let the programmer explicitly control the signal conversion. It may involve more typing but it is more predictable and ultimately gives the programmer more power.