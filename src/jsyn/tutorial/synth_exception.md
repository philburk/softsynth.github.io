---
layout: base.njk
title: "JSyn Tutorial"
---

If a JSyn class detects an error, it throws a SynthException which tells you what error occurred. If you want to catch the SynthException then you should bracket your calls to  JSyn methods with **try** and **catch**. I recommend that you catch the SynthExceptions at the highest level of your program. For example:

```text
try
{
/* Make various calls to JSyn between these brackets. */
    Synth.startEngine();
    sineOsc = new SineOscillator();
    sineOsc.frequency.set( 440.0 ); /* Set frequency to 440 Hz, "Concert A". */
// etc.
} catch (SynthException e) {
    SynthAlert.showError(this,e);
}
```

To learn more about catch and throw, please refer to a Java Language reference.