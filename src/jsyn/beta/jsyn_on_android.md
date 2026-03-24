---
layout: base.njk
title: "JSyn on Android Beta"
eleventyNavigation:
  key: "/jsyn/beta/jsyn_on_android.php"
  title: "JSyn/Android"
  order: 2
  parent: "/jsyn/beta/index.php"
---

# JSyn On Android

JSyn uses an abstract audio device interface. This allows JSyn to be implemented on top of various audio APIs. The default implementation is on the JavaSound API. We also have a custom JPortAudio implementation.

This page describes an implementation of the JSyn device API for Android. It allows you to run JSyn on Android devices using the Android AudioTrack. This code was originally implemented in 2011.

You may download this Android Studio project and use it as a starting point for your JSyn projects.

> **Download: [HelloJSyn](/jsyn/developers/archives/HelloJSyn-20170703.zip)** **- Android Studio Project - 7/3/2017**

This is a **beta** test version. You are a pioneer. So please give us feedback on the JSyn [mail list](/jsyn/support/).

Note that the Java source for the JSyn to Android interface is already [on GitHub here](https://github.com/philburk/jsyn/tree/master/android/com/jsyn/devices/android).

## Adding JSyn to an Existing Android Project

Copy the JSyn JAR file to an "app/libs" folder in your project.

Copy the "app/src/main/java/com/jsyn/devices/android" folder to your project.

When you create your synthesizer, tell JSyn to use the Android device.

```text
Synthesizer synth = JSyn.createSynthesizer(new JSynAndroidAudioDevice());
```

Then just call JSyn as you normally would. Besides the audio interface, JSyn is just math and some thread management . So it is very portable.

## Plans

We plan to move this Android Studio project onto GitHub. We could make the library source code into a submodule. But that makes it harder to check out the repository. What would be useful to you?

I also plan to add support for FLAG\_LOW\_LATENCY and the dynamic latency tuning features in Android N. This will be done using reflection so that the code will still load on older systems.