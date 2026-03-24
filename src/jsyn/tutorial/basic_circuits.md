---
layout: base.njk
title: "JSyn Tutorial"
---

Inside the circuit, we will be connecting units and setting their values like we have already seen. Now we just need to learn how to make the wrapper that turns it into a handy circuit.

As an example, lets make a simple siren sound where a TriangleOscillator is modulating the frequency of a SquareOscillator. To make a JSyn circuit, define a subclass of the SynthCircuit class:

```text
public class Siren extends SynthCircuit
```

You must declare the units that will be part of of your circuit.

```text
TriangleOscillator    triOsc;   // declare an oscillator
```

We will want to control the new circuit the same way we control a unit generator, by calling set() or connect() on its ports. So we will need to to declare ports just like the ones that a SynthUnit has. The most common port types are SynthInput and SynthOutput.

```text
public SynthInput  modulationFrequency;  // declare a frequency port
```

In the constructor for the new circuit, instantiate the new units, and then add them to the circuit. This is similar to creating a subclass of Panel and adding components to it.  The sub-units must be added so that they will start when the circuit is started. Here is an example of adding a TriangleOscillator to a circuit:

```text
triOsc = new TriangleOscillator();
add( triOsc );
```

You can make the circuit's ports control the internal units' ports by setting them equal to the units' ports.  Then use the addPort() method to make the ports visible when one calls getNumPorts() on the circuit.

```text
modulationFrequency = triOsc.frequency;
addPort( modulationFrequency );
```

What you end up with is an object that can be used just like a unit generator but is more complex.  You can include SynthCircuits inside of other SynthCircuits to make hierarchies of sound effects.  Here is an example of how the above Siren is used.

```text
siren = new Siren();   // create siren circuit
lineOut = new LineOut(); // create unit generator
```

```text
siren.modulationFrequency.set(2.5);  // warble at 2.5 Hertz
```

```text
/* Connect siren to lineOut so we can hear it. */
siren.output.connect( 0, lineOut.input, 0 );
siren.output.connect( 0, lineOut.input, 1 );
```