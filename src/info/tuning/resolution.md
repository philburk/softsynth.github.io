---
layout: base.njk
title: "Computer Music Information"
---

## Effect of Pitch Resolution on Tuning

If pitch is specified as a fixed-point fraction then the resolution of that fraction can affect the tuning. For example, if we only have two bits of fractional semitone then we can only specify four divisions of a semitone. That is not enough for accurate tuning. But if we have 16 bits then we can have 65536 divisions of a semitone which is probably more than enough. So what is the optimal number of bits required to specify a fractional semitone?

In this experiment we play two notes using a band-limited sawtooth. If the notes are perfectly tuned then you will hear no beating. That is one of the goals of just intonation. If they are slightly detuned due to inaccuracies in the pitch specification then you can hear beating.

### To Do

1.  Listen to the two notes with 16 bit resolution. Notice there are no beats.
2.  Decrease the resolution to 8 bits by moving the top slider. That's what you might hear if you use only 8 bits to encode a fractional semitone.
3.  Notice the beating of the harmonics. It sounds like a modulation of the spectrum as different harmonics rise and fall. Note that at 6 bits it is still more in tune than a 12-tone-equal-tempered fifth.
4.  Increase the resolution until the beating disappears.
5.  Experiment with changing the just intoned ratio of the interval and the pitch of the root note. A ratio of 3/2 is a "perfect fifth".

If you see this text then you need to install Java.

#### Technical Note

A single note will only detune by half a bit due to low resolution. But we apply a full bit of detuning here because one note may detune down half a bit and the other up half a bit causing the interval to be off by up to one bit of resolution as a worst case.