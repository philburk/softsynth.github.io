---
layout: base.njk
title: "Relative Tuning using HMSL"
---

# REL\_TUNING

This piece is an exploration of a relative intonation extension of the HMSL Score Entry System. **The software extension can be downloaded [here](/hmsl/bendscore.sit).**

<center>&lt;p&gt;<audio controls=""><source src="/hmsl/sounds/RelTuningPiano.mp3" type="audio/mpeg"> Your browser does not support the audio element.</audio>&lt;/p&gt;</center>

This HMSL extension allows a composer to specify notes as either ratios to the current fundamental, OR ratios to previous note. The fundamental can optionally be set on any note. Thus this piece is not restricted to any particular scale or gamut of pitches. The composer is free to play a note at any ratio relative to any other note at any time.

Here is an example of how one would play the fundamental followed by two notes at the perfect fifth.

```text
1 1 PR    3 2 PR   3 2 PR
```

Here is an example of how one would play the fundamental followed by a note a fifth above, and then another note at a fifth above that.

```text
1 1 PR    3 2 PR   3 2 >>PR
```

Here is an example of how one would a 1/16th note chord consisting of a note 5/4 above the fundamental, along with a note 3/4 below that, and another note 5/7 below that.

```text
1/16 chord{ 5 4 PR   3 4 >>PR   5 7 >>PR  }chord
```

The equal tempered tunings are achieved by using pitch bend and playing one note per channel. The scoring tool takes care of assigning pitches to channels. Since many channels have to be assigned a single timbre, this piece is mono-timbral. I am considering a modification that would allow one to assign zones of channels which would allow two or three timbres in a composition.

This piece was written using [HMSL, the Hierarchical Music Specification Language](/hmsl)

Copyright 1994, [SoftSynth.com](/)