---
layout: base.njk
title: "JSyn Tutorial"
---

The JSyn Plugin is required when using a JSyn Applet in a web page. The plugin provides the 'C' code that allows JSyn to synthesize audio with high performance, and to access the audio hardware of the computer. Different browsers have different ways of specifying the plugin. Thus we need to determine what browser is being used and choose the appropriate technique. To simplify the process, we have provided a simple JavaScript that will do whatever is needed on the clients computer.

All you have to do is reference the JSyn Applet using the HTML APPLET tag. Here is an example using an Applet called "TJ\_Beep" that is in a Java package called "mystuff".  The CODEBASE is an optional parameter that tells the browser to look in another directory for the classes. In this cases it says to look in a folder called "classes" that is two directory levels above the HTML file.

```text
&lt;APPLET   CODE="mystuff.TJ_Beep.class"
          NAME="TJ_Beep"
          CODEBASE="../../classes"
          WIDTH="200" HEIGHT="100"&gt;
&lt;/APPLET&gt;
```

For the text of complete HTML file that incorporates all these features, click [here](/jsyn/tutorial/tj_beep.html.txt).