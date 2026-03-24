---
layout: base.njk
title: "JSyn Tutorial"
---

Sound is caused by vibration. When an object vibrates, it can cause the air around it to also vibrate. These vibrations can reach our ear where they cause our ear drum to vibrate. Our ear drum is a small membrane that is connected by tiny bones to our cochlea. The cochlea translates the vibration to nerve impulses which travel to our brain which then "hears" the sound.

Many things can cause an object to vibrate including being struck like a drum, bowed like a violin, or plucked like a guitar. In general, a large object like a cello, a bass drum, or a truck will vibrate slower than a small object like a violin, cow bell, or a bicycle. We perceive slower vibrations to be lower pitches and faster vibrations to be higher pitches. The slowest vibrations that we can hear are about 40 wiggles per second, or 40 Hertz. The fastest vibrations we can hear are about 20000 Hertz (Hz).

### How does JSyn make sound?

In JSyn, oscillators output a stream of floating point numbers that go up and down. These numbers are converted to a voltage by your computer's sound card. This voltage is amplified and then passed to your speakers where it causes magnets to vibrate. These magnets are connected to a cardboard diaphragm that causes the air to vibrate. You know what happens after that.

JSyn oscillators have a "frequency" port that allows us to change the number of times the output goes up and down per second. Let's set the frequency of our sineOsc to 500 vibrations per second:

```text
sineOsc.frequency.set( 500.0 );
```

Oscillators also have a port that controls how far up or down the numbers go (ultimately, how far the speaker diaphragm gets pushed in and out). This "amplitude" port controls how loud the sound is. Let's tell our oscillator to output numbers in the range of -0.4 to 0.4.

```text
sineOsc.amplitude.set( 0.4 );
```

Oscillators typically output a signal that is centered at zero and can go as low as -1.0 and as high as +1.0.