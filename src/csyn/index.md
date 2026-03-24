---
layout: base.njk
title: "CSyn - Cross-Platform Audio Engine for 'C'"
---

# CSyn - Cross-Platform Audio Engine for 'C'

Please note that CSyn is not currently available for licensing. For personal music programming please use [JSyn](/jsyn).

CSyn is a library of audio synthesis functions that a 'C' programmer can use to add real-time audio to their applications.  CSyn is designed  for games,  music compositions, and other interactive audio applications such as psycho-acoustic experiments.  CSyn was originally used as the native synthesis engine for [JSyn](/jsyn), an audio synthesis API for Java.

## Key Features of CSyn

*   Efficient CPU based audio synthesis.
*   Unit generators such as oscillators, filters, envelopes, etc. can be connected together to create arbitrarily complex sounds.
*   An event buffer allow musical events to be played with rock solid timing even on a non-real-time system such as a PC.
*   Sample playing unit generators can be used in combination with other synthesis units.
*   Multi-segmented envelopes can be used as contour generators, complex LFOs, etc.
*   Sample and envelope data can be queued to implement attack and sustain loops, ADSR envelopes, etc.
*   Synthesis parameters can be specified in native DSP units, or in natural units such as Hertz.
*   A wide variety of synthesis techniques can be implemented including:

*   subtractive synthesis using time varying resonant filters,
*   granular synthesis using cascaded parabolic envelopes,
*   physical modeling,
*   sample playback,
*   delay based effects such as multi-tap delays and reverberation.

## Examples of what can you do with CSyn?

*   Create complex continuous sound effects with control over multiple parameters.
*   Play musical notes for use in MIDI file players and algorithmic score generators.
*   Use reverberation effects to model tunnels, halls, or dungeons.
*   Create wind sounds using random modulation of filtered noise.
*   Create helicopter sounds using LFO modulation of filtered noise.
*   Create water sounds using stochastic synthesis.

## JSyn Documentation Links

CSyn used to be the native engine for JSyn. Reading the [documentation for JSyn](/jsyn/docs/) now will give you an idea of the capabilities of CSyn.