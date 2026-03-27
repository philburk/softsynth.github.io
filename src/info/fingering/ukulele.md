---
layout: base.njk
title: "Fingering for Ukulele"
extraHead: |
  <link href="https://philburk.github.io/guitar-charts/fingering.css" rel="stylesheet" type="text/css">
  <script src="https://philburk.github.io/guitar-charts/fingering.js"></script>
---

### Fingering for Ukulele

<div id="fingering"></div>

<script language="javascript">
// Starting semitone for strings. MIDI pitch - 36
var ukulele = [ 31, 24, 28, 33];
var app = new FingeringApp(3, ukulele );
var appElement = app.render();
document.getElementById("fingering").appendChild(appElement);
</script>

### © 2009 Mobileer Inc - All Rights Reserved. May be printed for personal use only.
