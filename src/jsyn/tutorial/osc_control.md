---
layout: base.njk
title: "JSyn Tutorial"
---

In a previous example, we learned how to set the frequency of an oscillator by calling:

```text
sineOsc2.frequency.set( 550.0 );
```

Suppose that now you want the frequency of the oscillator to waver up and down smoothly like a siren. You could calculate the frequency for the siren at each moment and then set the frequency of the oscillator.

```text
double freq = CalculateSirenFreq(); // generate rising and falling value
sineOsc2.frequency.set( freq );
```

But this could require thousands of calls per second to make it sound smooth. Fortunately there is a better way. You can use the output of one oscillator to control another oscillator. You can do this by connecting the output of one oscillator to the frequency port of a second oscillator.

```text
sineOsc1.output.connect( sineOsc2.frequency );
```

Now the output of the first oscillator normally ranges from -1.0 to +1.0. If the frequency of the second oscillator is between -1.0 and +1.0 then we will neve hear it because that is below the range we can hear. So let's change the amplitude of the first oscillator so that it covers a range we can hear, -200.0 to +200.0. Also let's change the frequency of the modulating oscillator so that it is a slow one cycle per second.

```text
sineOsc1.amplitude.set( 200.0 );
sineOsc1.frequency.set( 1.0 );
```

The next step might be to make the frequency to waver slightly about a central frequency that is in a more useful range. We can do this by using an AddUnit to add the output of an oscillator to a constant value that we can set. We can also reduce the amplitude of the first oscillator to be within a smaller range.

```text
AddUnit  freqAdder  = new AddUnit();
sineOsc1.output.connect( freqAdder.inputA );     // pass through adder
freqAdder.output.connect( sineOsc2.frequency );  // control second oscillator freq
freqAdder.inputB.set( 500.0 );   // add constant that will center us at 500 Hz
sineOsc1.amplitude.set( 100.0 ); // reduce offset to +/- 100 Hz
```

Thus the frequency of sineOsc2 will be sineOsc1.output plus inputB.