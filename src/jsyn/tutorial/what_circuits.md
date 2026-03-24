---
layout: base.njk
title: "JSyn Tutorial"
---

You have probably seen pictures of the Moog Modular Synthesizer. It had electronic modules that correspond to the unit generators in JSyn. You connected the output of one module to the inputs of another using wire patch cables. (See [Wendy Carlos' Photo Page](http://www.wendycarlos.com/photos.html) for some examples.) Using this technique, very complex sounds could be constructed from simple units.

We learned how to connect one JSyn oscillator to another. There are dozens of unit generators in JSyn that provide all sorts of sound generating and sound modifying functions. These can all be connected together like we did with the two oscillators. We will be developing a large library of these sounds by connecting various units.

It would be nice to be able to wrap up a complex sound so that we can use it easily in various music programs. We can do this by subclassing the SynthCircuit. A SynthCircuit can contain multiple JSyn units connected together. You can give the circuit its own ports so that it behaves very much like a unit generator.

When you start a SynthCircuit, all of its sub units are started simultaneously. This can be important when you want all the parts of a sound to be synchronized.