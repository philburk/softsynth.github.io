---
layout: base.njk
title: "Fingering for Guitar"
extraHead: |
  <link href="https://philburk.github.io/guitar-charts/fingering.css" rel="stylesheet" type="text/css">
  <script src="https://philburk.github.io/guitar-charts/fingering.js"></script>
---

## Fingering for Guitar

<div id="fingering"></div>

<script language="javascript">
// Starting semitone for strings. MIDI pitch - 36
var guitar = [ 4, 9, 14, 19, 23, 28];
var numCharts = 3;
var app = new FingeringApp(numCharts, guitar );
var appElement = app.render();
document.getElementById("fingering").appendChild(appElement);
</script>

### © 2009 Mobileer Inc - All Rights Reserved. May be printed for personal use only.
