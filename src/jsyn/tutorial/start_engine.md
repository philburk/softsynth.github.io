---
layout: base.njk
title: "JSyn Tutorial"
---

Before making any other calls to JSyn, you **must** initialize it by calling:

```text
Synth.startEngine( 0 );
```

The method startEngine() is static so you do not have to create a Synth object. The zero is the flags parameter which we will learn more about later.

You can specify an optional frame rate as a second parameter.  By specifying a low sample rate, ideally 1/2 or 1/4 of the default rate, you can reduce the number of samples that must be calculated per second. This will reduce the amount of computation that the CPU must perform. For example:

```text
Synth.startEngine( 0, Synth.DEFAULT_FRAME_RATE / 2.0 );
```

When your program finishes, you must terminate JSyn by calling:

```text
Synth.stopEngine();
```