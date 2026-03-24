---
layout: base.njk
---

## Dual Oscilloscope

Use the JSyn oscilloscope module to display the audio input to the computer.

Note that a Java Applet is not normally allowed to access audio input. So this will crash.

 <applet 
	width="600" height="500"
	codebase="../../classes"
    code="com.jsyn.examples.DualOscilloscope">
      <param name="jnlp_href" value="oscope_applet.jnlp">
Java not supported!
</applet>

<script>  cheerpjInit(); </script>
