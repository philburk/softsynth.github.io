---
layout: base.njk
title: "WebAudio Experiments - Simple Attack Decay Envelope"
---

<script type="text/javascript" src="/webaudio/webaudio_tools.js"></script><script type="text/javascript" src="/webaudio/gainramp.js"></script>

## Attack Decay Envelope using AudioGain

Use an AudioGainNode to smoothly raise and lower the volume of a sound.

Roll mouse over the paragraphs below to start and stop sound.

Mode=' . $mode . ", " . $label . "

\\n"; } printRollover(1,"linearRampToValueAtTime() for attack and decay"); printRollover(2,"linearRampToValueAtTime() up and down several times, linear down"); printRollover(3,"linearRampToValueAtTime() for attack, exponentialRampToValueAtTime() for decay, setTargetValueAtTime() for release"); printRollover(4,"setTargetValueAtTime() for attack and release"); ?>

Look in the code below to see how the test modes are applied. Example uses "[webaudio\_tools.js](/webaudio/webaudio_tools.js)".