---
layout: base.njk
title: "JSyn Tutorial"
---

The best way to understand frequency and amplitude is to hear the effect of changing them. This JSyn Applet creates a SineOscillator and then sets its frequency and amplitude ports based on the value of two scrollbars. We use a handy subclass of ScrollBar provided with JSyn that displays its value on the screen.
We also send the output of the SineOscillator to an on-screen oscilloscope so that we can see the effects visually. The waveform display has time on the horizontal axis and the value of the oscillator output on the vertcal axis. It is updated automatically about once per second.
To Do:

*   Move the amplitude scrollbar until you hear sound.
*   Move the frequency scrollbar.
*   Listen to the effect of changing each. Notice how the waveform changes on the oscilloscope.
*   Try to play a simple tune using the frequency scrollbar.
*   Turn the frequency down until you can't hear it, about 10-20 Hertz. Can you feel your speaker vibrating slowly with your hand. At your own risk, remove the cloth cover from your speaker if it comes off easily. Can you see the large woofer vibrating?

To see how I did this, please look at the [source code](/jsyn/tutorial/TUT_SineFreq.txt) for this Java Applet.