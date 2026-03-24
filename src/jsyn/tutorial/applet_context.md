---
layout: base.njk
title: "JSyn Tutorial"
---

When Java Applets run in a web browser, they share the same virtual machine. This means that static data in a class is shared between Applets.  Sometimes multiple Java Applets may be run at the same time. Their execution can also overlap when switching between one web page and another. This can cause Java Applets to interfere with each other.

For example, if two Applets try to call Synth.startEngine() with different sample rates, then which rate  should the engine run at? Clearly we need two different engines. A synthesis engine can be represented by a SynthContext which contains all of the data used by the JSyn engine. If you use separate SynthContexts for each Applets, then they can run at different rates, even in non-real-time and not interfere with each other.

If you are writing an application that will not be run in a web browser, then you can probably ignore this information, unless you want to run some calculations in non-real-time while also running another SynthContext in real-time.

To use a SynthContext you must first declare one in your Applet:

```text
SynthContext synthContext;
```

You should instantiate a context before making any JSyn calls.

```text
synthContext = new SynthContext();
```

Then, instead of using static methods of the Synth class, call the similar methods of your synthContext.

```text
synthContext.startEngine( 0 );
time = synthContext.getTickCount();
synthContext.sleepUntilTick( nextTime );
rate = synthContext.getFrameRate();
```

Then whenever you create a SynthObject like a unit generator, envelope, sample, or table, pass the synthContext to the constructor.

```text
sineOsc = new SineOscillator( synthContext );
env = new SynthEnvelope( synthContext, data );
scope = new SynthScope( synthContext );
```

These objects will keep track of which context they belong to so you don't need to pass a context for other methods like set() or connect().

If you are passed a SynthObject and need to know its context, use getSynthContext().

```text
void setLater( SynthOscillator osc )
{
    SynthContext syn = osc.getSynthContext();
    int time = syn.getTickCount();
    osc.frequency.set( time + (int)(syn.getTickRate() * 0.2), 345.678 );
}
```