---
layout: base.njk
title: "JSyn Tutorial"
---

A Java Applet is a class that can be run inside a web browser. This lets you put interactive programs in a web page. The interactive examples in this tutorial are all Applets so you can refer to any of them for example code.

To write a Java Applet, you must extend the class java.applet.Applet. This is generally done by importing the class "java.applet.Applet". Then defining a public class that extends Applet.

```text
import java.applet.Applet;
public class MyCoolApplet extends Applet
{
}
```

The web browser runs its own Java virtual machine. When an Applet is launched, the browser calls the Applet's init() method and its start() method. When the user leaves the page with the Applet, the Applet's stop() method is called. At some point the Applet's destroy() method should be called when the browser wants to clean up. It is called right away by InternetExplorer, but may never be called by Firefox. You job as an Applet writer is to define these methods.

The best way to write portable Applets is to put all your initialization code in start(), and your cleanup code in stop(). Unfortunately Netscape calls the Applet's stop() then start() method whenever the user resizes the window.