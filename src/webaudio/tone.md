---
layout: base.njk
title: "WebAudio Experiments - Simple Tone"
---

<script type="text/javascript" src="/webaudio/webaudio_tools.js"></script><script type="text/javascript" src="/webaudio/tone.js"></script>

## Simple Tone

Use a WebAudio and JavaScript to generate a tone using an oscillator.

Roll mouse over the paragraphs below to start and stop sound.

> Roll mouse over for ' . $frequency . " Hz tone
> 
> \\n"; } printRollover(800); printRollover(400); printRollover(200); printRollover(100); ?>

status messages

### JavaScript code for the tone generator.

The example below creates an Oscillator. It uses "[webaudio\_tools.js](/webaudio/webaudio_tools.js)".