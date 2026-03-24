---
layout: base.njk
---

## Test Audio Devices

JSyn can use any available audio device, even devices with more than 2 channels.

### ToDo:

1.  Select an output device. The number of channels will be in square brackets to the right of the name, typically \[2\].
2.  Click the Start button.
3.  Listen to a different sine wave tone on each output channel.
4.  Click the stop button.
5.  Select an input device and enable both Input and Output.
6.  Click the Start button. (Your PC may not support full-duplex audio if it uses an ISA soundcard.)
7.  Apply a signal to each input channel and listen to it on the corresponding output channel.

* * *

<applet 
    ARCHIVE="jsyn_pure.jar"
    code="JSynExamples.TJ_Devices.class"
    codebase="../../classes"
    name="TJ_Delay1" WIDTH="660" HEIGHT="224">
</applet>

<script>  cheerpjInit(); </script>
