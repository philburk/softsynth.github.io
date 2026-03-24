---
layout: base.njk
title: "JSyn Tutorial"
---

At this point, you are probably anxious to start writing some JSyn programs. But there are a few programming issues that you should know about first.

Java uses "packages" to collect together related classes. Examples of classes are the "java.util" package which contains the Vector class, and the "java.awt" package which contains the Panel class. In order to use classes from a package you must first import them.

The primary synthesis classes are in a package called "com.softsynth.jsyn" so near the beginning of each JSyn program you must have this line:

```text
import com.softsynth.jsyn.*;
```

JSyn also has a number of sub packages. If you wish to use classes from them, you must import them as well.

```text
import com.softsynth.jsyn.util.*;    // for general JSyn utilities
import com.softsynth.jsyn.view102.*;    // for graphical AWT related utilities
import com.softsynth.jsyn.circuits.*;  // for example SynthCircuits that combine units
```