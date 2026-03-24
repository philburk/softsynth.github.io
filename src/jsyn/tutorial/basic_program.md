---
layout: base.njk
title: "JSyn Tutorial"
---

Here is a basic template for a JSyn program. It shows how to import the JSyn package and how to make a simple sound. You can select, copy and paste this code into a text editor.

This program has a main() method which is the entry point for the program. In the main method, it instantiates an object and then plays a sound using that object.

* * *

```text
/* Put program in a package to keep classes separate from others. */
package workshop;
/* Import JSyn classes so we can use them. */
import com.softsynth.jsyn.*;

/** Simple JSyn program that plays two tones with an oscillator.
 * @author Phil Burk (C) 2000
 */
public class VerySimpleSound
{
// Declare unit generators that we will use.
        public SawtoothOscillatorBL  osc;
        public LineOut               lineOut;

/* Main entry point to program. Called by Java Virtual Machine. */
        public static void main(String args[])
        {
        /* This is static method so we need to create an object that we can call. */
                VerySimpleSound app = new VerySimpleSound();
                app.play();
        }
```

```text
/** Start JSyn, play some sounds, then stop JSyn. */
        public void play()
        {
                try
                {
                // Start JSyn synthesizer.
                        Synth.startEngine(0);
                        
                // Create some unit generators.
                        osc       = new SawtoothOscillatorBL();
                        lineOut   = new LineOut();
                        
                // Connect oscillator to both left and right channels of output.
                        osc.output.connect( 0, lineOut.input, 0 );
                        osc.output.connect( 0, lineOut.input, 1 );
                        
                // Start the unit generators so they make sound.
                        osc.start();
                        lineOut.start();
                        
                // Set the frequency of the oscillator to 200 Hz.
                        osc.frequency.set( 200.0 );
                        osc.amplitude.set( 0.8 );
                
                // Sleep for awhile so we can hear the sound.
                        Synth.sleepForTicks( 400 );
                        
                // Change the frequency of the oscillator.
                        osc.frequency.set( 300.0 );
                        Synth.sleepForTicks( 400 );
                        
                // Stop units and delete them to reclaim their resources.
                        osc.stop();
                        lineOut.stop();
                        osc.delete();
                        lineOut.delete();
                        
                // Stop JSyn synthesizer.
                        Synth.stopEngine();
                        
                } catch( SynthException e )
                {
                        System.out.println( "Caught " + e );
                        e.printStackTrace();
                }
        }

}
```