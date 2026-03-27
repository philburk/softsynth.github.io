---
layout: base.njk
title: "Fingering for Guitar"
extraHead: |
  <link href="https://philburk.github.io/guitar-charts/fingering.css" rel="stylesheet" type="text/css">
  <script src="https://philburk.github.io/guitar-charts/fingering.js"></script>
---

## Fingering for Dobro tuned GBDEGBDE

<div id="fingering"></div>

<script language="javascript">
// Starting semitone for strings. MIDI pitch - 36
var guitar = [ 7, 11, 14, 16, 19, 23, 26, 28]; // = MidiPitch - 36
var numCharts = 2;
var app = new FingeringApp(numCharts, guitar );
var appElement = app.render();
document.getElementById("fingering").appendChild(appElement);
</script>

### © 2009 Mobileer Inc - All Rights Reserved. May be printed for personal use only.