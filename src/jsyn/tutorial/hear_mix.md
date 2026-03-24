---
layout: base.njk
title: "JSyn Tutorial"
---

Sounds can be mixed together by adding together the numbers that represent the sound. In order to control their relative loudness, we can change the amplitude of the individual sounds. In this Applet, we mix two SineOscillators using an AddUnit.

**Important: the sound card in your computer can only handle a limited range of numbers.** That range typically corresponds to a range of -1.0 to +1.0 in JSyn. If you add together oscillators and their sum goes beyond that range then the result will be "clipped" to fit within this range. This can introduce severe distortion and can sound very bad if you are trying to produce a smooth tone. If you are trying to produce a nasty sound then this can be a useful technique. Guitar distortion boxes use a similar technique but they do not clip abruptly at -1.0 and +1.0. They have a gradual distortion that imitates the saturation of a tube amplifier. To prevent clipping, set the amplitudes of your sounds so that they cannot add up over 1.0. For example, if you have N oscillators, set the amplitude to (1.0/N).

To Do:

1.  Set the amplitude of each oscillator to about 0.4.
2.  Change the frequencies of each oscillator so that you can hear each of them distinctly.
3.  For safety, turn down the volume of your stereo speakers until it is at a soft level.
4.  Set the amplitudes of each oscillator to about 0.6. See and hear the clipping that results.
5.  The scope shows the color coded output of both oscillators and the mixer. Convince yourself that the mixer output is the sum of the two oscillators. (It may appear to be very slightly delayed.)

  

To see how I did this, please look at the [source code](/jsyn/tutorial/TUT_SineMix.txt) for this Java Applet.