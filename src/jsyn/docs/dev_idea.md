---
layout: base.njk
title: "IDEA for JSyn"
---

# Using JSyn in an IDEA Project

We highly recommend using IDEA for Java development. IDEA is a free IDE with an editor, compiler and debugger. IDEA has powerful "refactoring" tools that let you reorganize code and do smart global renaming.

If you are already an IDEA expert, add the JSyn JAR file as a library.

If you haven't already installed IDEA then get it from [here](https://www.jetbrains.com/idea/download/).

From the File menu, create a new Java project. IDEA will create a simple "Main.java" program for you.

Replace the contents of that file with the code below. You may find a Copy icon at the top right of the code.

```
//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.

import com.jsyn.JSyn;
import com.jsyn.Synthesizer;
import com.jsyn.unitgen.LineOut;
import com.jsyn.unitgen.SineOscillator;

/** Play a tone using a JSyn oscillator. */
class Main {

    private void test() {

        // Create a context for the synthesizer.
        Synthesizer synth = JSyn.createSynthesizer();

        // Start synthesizer using default stereo output at 44100 Hz.
        synth.start();

        // Add a tone generator.
        SineOscillator oscillator = new SineOscillator();
        synth.add(oscillator);
        // Add a stereo audio output unit.
        LineOut lineOut = new LineOut();
        synth.add(lineOut);

        // Connect the oscillator to both channels of the output.
        oscillator.output.connect(0, lineOut.input, 0);
        oscillator.output.connect(0, lineOut.input, 1);

        // Set the frequency and amplitude for the sine wave.
        oscillator.frequency.set(345.0);
        oscillator.amplitude.set(0.6);

        // We only need to start the LineOut. It will pull data from the
        // oscillator.
        lineOut.start();

        // Sleep while the sound is generated in the background.
        try {
            double time = synth.getCurrentTime();
            // Sleep for a few seconds.
            synth.sleepUntil(time + 4.0);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Stop everything.
        synth.stop();
    }

    public static void main(String[] args) {
        new Main().test();
    }
}
```

1. Create a "libs" folder in your IDEA project next to the "src" folder.
2. Download the latest JSyn JAR file from the [GitHub JSyn Release](https://github.com/philburk/jsyn/releases) page.
3. Place the JSyn JAR file in your new "libs" folder.
4. Find the libs folder with JSyn in the IDE.
5. Right click on the JSyn JAR file and select "Add as Library...". Look at the bottom of the popup menu.
6. Run the program using the green triangle icon.
