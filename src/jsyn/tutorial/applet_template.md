---
layout: base.njk
title: "JSyn Tutorial"
---

Here is a basic template for a JSyn Applet. It shows how to import the JSyn package, and how to define the start() and stop() methods. You can select, copy and paste this code into a text editor.

You will note that this example is based on extending the class Applet.  But it also has a main() method so that it can be run as either an application or an applet.   When a Java Applet is run by a browser, it calls the Applet's init() and start() methods. When the user leaves the web page containing the Applet, the Applet's stop() method is called. Override the start() method with code that sets up your own application. Also override the stop() method for your cleanup code.

When run as an application, Java will call the main() method which then calls test(). The test() method will then call init() and start(). When you close the application window, the stop() method will be called.

* * *

```text
import java.util.*;
import java.awt.*;
import java.applet.Applet;
import com.softsynth.jsyn.*;  // Import JSyn classes
```

```text
public class MyJSynProgram extends Applet
{
/* Declare Synthesis Objects here */
```

```text
/* Can be run as either an application or as an applet. */
   public static void main(String args[])
   {
      MyJSynProgram  applet = new MyJSynProgram();
      AppletFrame frame = new AppletFrame("Test JSyn", applet);
      frame.resize(600,400);
      frame.show();
      frame.test();
   }
```

```text
/*
 * Setup synthesis by overriding start() method.
 */
   public void start()
   {
      try
      {
         Synth.startEngine(0);
/* Your setup code goes here. */
      } catch(SynthException e) {
         SynthAlert.showError(this,e);
      }
   }
 /*
  * Clean up synthesis by overriding stop() method.
  */
   public void stop()
   {
      try
      {
/* Your cleanup code goes here. */
         Synth.stopEngine();
      } catch(SynthException e) {
         SynthAlert.showError(this,e);
      }
  }
}
```