---
layout: base.njk
title: "JSyn Tutorial"
---

You can load any JSyn SynthCircuit or SynthNote into the JSynPlayer. These Java classes describe a sound that can be used by JSyn. You can use the sounds provided with the JSynPlayer, or design your own using the [Wire](/wire/) sound editor.

The JSynPlayer Applet has a Java method called loadSound(String name) that takes a Java class name. It loads that class and checks to make sure it describes a valid SynthCircuit or SynthNote. It then returns an integer ID that you can use to refer to that sound.

Here is some JavaScript that will load a sound called "patches.SineCubedWah". Note that it refers to the Applet as "document.JSynPlayer"

```text
var wahIndex = document.JSynPlayer.loadSound( "patches.SineCubedWah" );
```