---
layout: base.njk
title: "JSyn Tutorial"
---

JSyn provides a class called a SoundTester that will display a fader for every input port of a circuit, and then let you play with the sound. A handy Applet has also been created called SoundTestApplet. You can extend it to test your SynthCircuits. Just define a method to return an instance of the class you want to test.

```text
/** Define this method to make an Applet that tests your circuit. */
public SynthCircuit makeCircuit() throws SynthException
{
    return new WindSound();
}
```

In this example, we use it to test a wind sound created from a noise generator and a filter. We will study this circuit in more detail later.

To see how I did this, please look at the [source code](/jsyn/tutorial/TJ_Wind.txt) for this  Java Applet.