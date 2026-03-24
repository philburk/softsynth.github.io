---
layout: base.njk
title: "JSyn Tutorial"
---

<script language="JavaScript">var wahIndex = 0; function loadDefaultSound() { if( wahIndex == 0 ) wahIndex = document.JSynPlayer.loadSound( "patches.SineCubedWah" ); } // Play a note that lasts for duration seconds. Return new time. function noteOnFor( time, duration, sndIndex, pitch, amplitude ) { document.JSynPlayer.noteOn( time, sndIndex, pitch, amplitude ); time += duration; document.JSynPlayer.noteOff( time, sndIndex ); time += duration; return time; } // Play a simple melody using timesatamps. function playMelody() { loadDefaultSound(); var time = document.JSynPlayer.getTime() + 0.25; time = noteOnFor( time, 0.1, wahIndex, 60.0, 0.5 ); time = noteOnFor( time, 0.1, wahIndex, 67.0, 0.5 ); time = noteOnFor( time, 0.2, wahIndex, 63.0, 0.5 ); }</script>

## Specifying Note Timing

The JSynPlayer allows you to timestamp note calls with a time in seconds. This allows you to specify musical events in the future with very accurate timing.

First you must determine the current JSyn time in seconds:

> var time = document.JSynPlayer.getTime();

You can then schedule events in the future by passing the time for the action to occur as the first parameter to noteOn() or noteOff().

> document.JSynPlayer.noteOn( time + 0.7, wahIndex, pitch, amplitude ); document.JSynPlayer.noteOff( time + 1.4, wahIndex );

Here are a couple JavaScript functions that play a melody. The noteOnFor() function plays a noteOn() and noteOff(). The playMelody() function calls noteOnFor() three times to play three notes.

// Play a note that lasts for duration seconds. Return new time. function noteOnFor( time, duration, sndIndex, pitch, amplitude ) { document.JSynPlayer.noteOn( time, sndIndex, pitch, amplitude ); time += duration; document.JSynPlayer.noteOff( time, sndIndex ); time += duration; return time; } // Play a simple melody using timesatamps. function playMelody() { loadDefaultSound(); var time = document.JSynPlayer.getTime() + 0.25; time = noteOnFor( time, 0.1, wahIndex, 60.0, 0.5 ); time = noteOnFor( time, 0.1, wahIndex, 67.0, 0.5 ); time = noteOnFor( time, 0.2, wahIndex, 63.0, 0.5 ); }

You can call the playMelody() function on a rollover.

> &lt;span onmouseover="playMelody();"&gt;Bong-bing-bung.&lt;/span&gt;

If you pass your mouse over the red text below you will hear the example.

> Bong-bing-bung. This is silent text.

 \[[TOP](/jsyn/tutorial/)\]  \[[PREVIOUS](/jsyn/tutorial/player_set/)\]  NEXT\]

Visit the [JSyn](/jsyn/) or [SoftSynth](/) home pages.

Copyright (C) Phil Burk 1999 - All Rights Reserved