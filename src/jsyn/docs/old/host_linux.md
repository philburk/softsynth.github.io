---
layout: base.njk
title: "JSyn Docs for Old API"
---

&lt;!-- .bigred { color: #F00; } --&gt;

# This old API is deprecated. Please use [the new API instead](/jsyn/docs/)!

# Installing, Compiling, and Running JSyn on Linux

### Installing Developer Package

1.  Enter:   tar  zxvf  jsyn142a\_linux386\_sdk.tar.gz

[Here are instructions for using Borland JBuilder with JSyn](/jsyn/docs/old/using_jbuilder/)

### Compiling and Running a Simple JSyn Program using the SUN JDK

1.  CD to the"jsyn/usercode" directory in the JSyn SDK.
2.  To compile and run the test program, enter:   gmake
3.  You should see a small window open with a "Beep" button. Click on the button to hear a random beep.
4.  For more help, enter:   gmake help

### Writing Your Own JSyn Programs

Let's assume we are creating a new program called "Boing".

*   You can make new JSyn programs by making a copy of the "TJ\_Beep.java" file in the usercode directory and modifying it. You will need to change the name of the public class in the file to match the file name. For, example, the "public class Boing" must be defined in a file called "Boing.java".
*   To compile it, enter: gmake mystuff
*   To run it, enter:   gmake  mystuff.Boing
*   You can also copy examples from the directory "jsrc/JSynExamples" into the user directory. If you do this, change the "package JSynExamples" declaration at the top of the file to "package mystuff".