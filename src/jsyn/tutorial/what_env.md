---
layout: base.njk
title: "JSyn Tutorial"
---

Imagine the sound of a bell. It starts very loud and then decays smoothly to silence. Now imagine the sound of a flute. It start less abruptly, stays steady as long as the flautist blows, and then dies out fairly quickly when she stops. This contour, or shape, is an important characteristic of a sound and is called an "envelope". If the contour describes loudness, then it is called an "amplitude envelope". But envelopes can also be used to describe the contours of other parameters such as frequency, or filter cutoff.

Here is a plot showing the amplitude contour of a bell. The vertical axis is amplitude and the horizontal axis is time.

<center>&lt;dd&gt;&lt;img src="/jsyn/tutorial/bell_env.JPG" nosave="" height="86" width="260" align="TEXTTOP"&gt;&lt;/dd&gt;</center>

The envelope can be described as a series of straight line segments. Each point on the envelope is called a breakpoint.

Here is plot showing the amplitude contour of a flute.

<center>&lt;dd&gt;&lt;img src="/jsyn/tutorial/flute_env.JPG" nosave="" height="86" width="260" align="TEXTTOP"&gt;&lt;/dd&gt;</center>

The dotted line in the middle section indicates that it could be of any length depending on how long the note is.