---
layout: base.njk
title: "JSyn audio synthesis API for Java"
eleventyNavigation:
  key: "/jsyn/index.md"
  title: "JSyn"
  order: 1
---

# JSyn - Audio Synthesis API for Java

JSyn allows you to [develop](/jsyn/developers/) interactive computer music programs in Java. It can be used to generate sound effects, audio environments, or music. JSyn is based on the traditional model of unit generators which can be connected together to form complex sounds. For example, you could create a wind sound by connecting a white noise generator to a low pass filter that is modulated by a random contour generator.

JSyn is licensed under the free [Apache License V2](http://www.apache.org/licenses/LICENSE-2.0). Source code is available on [GitHub](https://github.com/philburk/jsyn)

# Getting Started

## Desktop Applications

For writing desktop or laptop applications, we recommend using [Eclipse](http://www.eclipse.org/) or [IntelliJ IDEA](https://www.jetbrains.com/idea/).

You can download JSyn as a [JAR file from here](/jsyn/developers/download/) or import it from a maven repository, for example: \[[clojars](https://clojars.org/com.jsyn/jsyn)\] \[[javalibs](https://javalibs.com/artifact/com.jsyn/jsyn)\]

Read more about [programming JSyn with Eclipse](/jsyn/docs/compiling/).

## Android Apps

For writing Android apps, we recommend using [Android Studio](https://developer.android.com/studio/). You can download a [very simple project for a JSyn app from here](/jsyn/beta/jsyn_on_android/).

## Learning JSyn

[JSyn Programmers Guide](/jsyn/docs/usersguide/)

[JSyn Reference Documentation](/jsyn/docs/javadocs/) (Java Docs)

The Git Hub repository contains lots of [example code](https://github.com/philburk/jsyn/tree/master/tests/com/jsyn/examples). We recommend starting with the following examples:

1.  [PlayTone.java](https://github.com/philburk/jsyn/blob/master/tests/com/jsyn/examples/PlayTone.java) - play a sine wave oscillator for a few seconds
2.  [HearSinePM.java](https://github.com/philburk/jsyn/blob/master/tests/com/jsyn/examples/HearSinePM.java) - use knobs to control one oscillator modulating another, adds oscilloscope
3.  [PlaySegmentedEnvelope.java](https://github.com/philburk/jsyn/blob/master/tests/com/jsyn/examples/PlaySegmentedEnvelope.java) - use a breakpoint envelope to control amplitude
4.  [PlayNotes.java](https://github.com/philburk/jsyn/blob/master/tests/com/jsyn/examples/PlayNotes.java) - use noteOn and noteOff with a UnitVoice
5.  [UseMidiKeyboard.java](https://github.com/philburk/jsyn/blob/master/tests/com/jsyn/examples/UseMidiKeyboard.java) - use a MIDI keyboard to play a voice created using JSyn