---
layout: base.njk
title: "JSyn Tutorial"
---

<script language="JavaScript">var wahIndex = 0; function loadDefaultSound() { if( wahIndex == 0 ) wahIndex = document.JSynPlayer.loadSound( "patches.SineCubedWah" ); }</script>

## Setting Arbitrary Parameters using the JSynPlayer

The sounds that are created using Wire can have arbitrary control parameters like "modRate" or "resonance". You can specify the value for a parameter using the setPort() method of the JSynPlayer. The SineCubedWah that we used in the previous examples has a vibrato feature that can be controlled using "modRate" and "modDepth". Both are expressed in Hertz. The modRate controls how many times the vibrato wiggles per second. The modDepth controls how much the notes frequency is shifted up or down, in Hertz.

```text
document.JSynPlayer.setPort( wahIndex, "modRate", 20.0 );
document.JSynPlayer.setPort( wahIndex, "modDepth", 100.0 );
 The JSynPlayer looks up the port based on the name so it must match exactly
  with the name of the ExternalPort given in Wire.

  &lt;span onMouseOver="loadDefaultSound(); document.JSynPlayer.noteOn( wahIndex, 70.0, 0.5 );"&gt;
On&lt;/span&gt;
&lt;span onmouseover='document.JSynPlayer.setPort( wahIndex, "modRate", 0.5 );'&gt;
Slow&lt;/span&gt;
&lt;span onmouseover='document.JSynPlayer.setPort( wahIndex, "modRate", 10.7 );'&gt;
Fast&lt;/span&gt;
&lt;span onmouseover='document.JSynPlayer.setPort( wahIndex, "modDepth", 20.0 );'&gt;
Light&lt;/span&gt;
&lt;span onmouseover='document.JSynPlayer.setPort( wahIndex, "modDepth", 200.0 );'&gt;
Heavy&lt;/span&gt;
&lt;span onMouseOver="document.JSynPlayer.noteOff( wahIndex);"&gt;
Off&lt;/span&gt;

In the example below, the words turn the note on or off, and change the virato rate or depth.
  On  Slow  Fast  Light  Heavy  Off
```