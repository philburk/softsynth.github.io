---
layout: base.njk
title: "Fingering for Violin"
extraHead: |
  <link href="https://philburk.github.io/guitar-charts/fingering.css" rel="stylesheet" type="text/css">
  <script src="https://philburk.github.io/guitar-charts/fingering.js"></script>
---

## Fingering for Violin

<div id="fingering"></div>

<script language="javascript">
// Starting semitone for strings. MIDI pitch - 36
var violin = [ 19, 26, 33, 40];
var app = new FingeringApp(3, violin );
var appElement = app.render();
document.getElementById("fingering").appendChild(appElement);
</script>

### © 2009 Mobileer Inc - All Rights Reserved. May be printed for personal use only.