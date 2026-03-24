---
layout: base.njk
title: "JSyn Tutorial"
---

<script language="JavaScript">var wahIndex = 0; function loadDefaultSound() { if( wahIndex == 0 ) wahIndex = document.JSynPlayer.loadSound( "patches.SineCubedWah" ); }</script>

Once a sound has been loaded then you can play "notes" using that sound. I use the term notes loosely because some JSyn sounds are very abstract and are more like sound effects than notes.

The JSynPlayer has Java methods for turning a note **on** and **off**. The first parameter is the index returned by loadSound() that we saw on the previous page. Then you pass a MIDI standard pitch where 60.0 is Middle C. Because pitch is a double, you could pass 60.25 to get a quarter tone above Middle C. Then pass an amplitude which typically ranges between 0.0 and 1.0. In the following line of JavaScript, we play an Middle C note using our SineCubedWah at half amplitude.

```text
document.JSynPlayer.noteOn( wahIndex, 60.0, 0.5 );
```

You can use the noteOn and noteOff methods to play a note as you rollover some text. You can use the JavaScript event handlers to call these methods. Here is an example of some text that will play a note as you roll over it. Notice that we use the &lt;span&gt; tag with a terminating &lt;/span&gt; to specify the event handlers. Also note that we call loadDefaultSound() in case the sound is not yet loaded.

&lt;span onmouseover="loadDefaultSound(); document.JSynPlayer.noteOn( wahIndex, 60.0, 0.5 );" onmouseout="document.JSynPlayer.noteOff(wahIndex);"&gt; This is musical text. &lt;/span&gt;

If you pass your mouse over the red text below you will hear an example.

> This is musical text.This is silent text.