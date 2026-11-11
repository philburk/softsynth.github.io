---
layout: base.njk
eleventyNavigation:
  key: "/syntona/index.md"
  title: "Syntona"
  order: 4
---

# Syntona - for Music Performance and Composition

## What is Syntona?

Syntona is a graphical editor you can use to build and play patches using KSyn unit generators.
Syntona patches that contain only KSyn modules can be exported as Kotlin or Java source code.

## Run Syntona

Look in the Help menu in the app for examples and tutorials.

Note that this is a Beta release.
If you find a problem, please let us know ASAP on [Discourse](https://syntona.discourse.group/).

### Web App available online [HERE](app/).
The web version will always be the latest.
If you need to, you can run the [previous](previous/) version.

### Download Executable from [HERE](download/).

### Join the Syntona discussion on [Discourse](https://syntona.discourse.group/)

## Features

* Free for personal use.
* Simple flowgraph interface.
* Jacks have names so you can understand patches more easily.
* Modular synthesizer provided by KSyn.
* Polyphonic instrument design. 
* MIDI input and output.
* Timeline module for multi-track recording.
* Support for algorithmic composition.
* Advanced synthesis techniques including:
  * Chebyshev waveshaping
  * Granular synthesis and effects
  * Tunable Karplus-Strong string model
  
![Syntona MIDI Patch](/images/syntona_match_note.png)

## Open Source

The source code is available on GitHub [HERE](https://github.com/philburk/syntona-kc).

Syntona is free for creative use under the [AGPL-3.0 license](https://github.com/philburk/syntona-kc?tab=AGPL-3.0-1-ov-file).

The web application may **not** be copied to another website.

## History of Syntona

Syntona is the result of a long evolution:
* 1992 - Wire in HMSL, presented at ICMC.
* 1997 - Wire written in Java using JSyn. Used at 3DO to design DSP algorithms for a video game console.
* 2000's - Wire repurposed for musical performance and sound design.
* 2013-2025 - Syntona written in Java, new architecture
* 2026 - Syntona rewritten in Kotlin using KSyn so it runs on the web.

## Old Versions

The older Java based versions of Syntona dating back to 2013 can be found in the [archive](oldjava.md).
