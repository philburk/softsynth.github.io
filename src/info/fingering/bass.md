---
layout: base.njk
title: "Fingering for Bass Guitar"
extraHead: |
  <link href="https://philburk.github.io/guitar-charts/fingering.css" rel="stylesheet" type="text/css">
  <script src="https://philburk.github.io/guitar-charts/fingering.js"></script>
---

### Fingering for Bass Guitar

<div id="fingering"></div>

<script language="javascript">
// Starting semitone for strings. MIDI pitch - 36
var bassGuitar = [ 4, 9, 14, 19];
var app = new FingeringApp(3, bassGuitar );
var appElement = app.render();
document.getElementById("fingering").appendChild(appElement);
</script>

### © 2014 Mobileer Inc - All Rights Reserved. May be printed for personal use only.
