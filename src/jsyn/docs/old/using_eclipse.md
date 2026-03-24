---
layout: base.njk
title: "JSyn Docs for Old API"
---

&lt;!-- .bigred { color: #F00; } --&gt;

## This old API is deprecated. Please use [the new API instead](/jsyn/docs/)!

## Compiling JSyn Programs Using Eclipse

Note that these instructions are for JSyn V144 and later on Windows and Mac. (Feedback welcome.)

I strongly recommend using Eclipse. It is a great Integrated Development Environment (IDE) for Mac, Windows and Linux.

1.  If you haven't already, install [Eclipse from here](http://www.eclipse.org/).
2.  Launch Eclipse.
3.  Create a New Project by selecting "New/Project..." from the "File" menu.
4.  Select "Java Project" and click "Next>".
5.  Enter "JSynMusic" as the project name or whatever name you choose then click "Finish" button.

### Adding the JSyn Example and Tutorial Source Code to your Project

1.  Select the "Package Explorer" tab so that you can see the your project.
2.  Right click on your project and select "Build Path/Linked Source..." from the menu.
3.  Browse to the JSyn SDK that you just downloaded and select the "source" folder for the "Linked folder location."
4.  Enter a folder name of "jsynsdk" then click "Finish".

#### Adding JSyn JAR Files to your Project

1.  Select the "Package Explorer" tab so that you can see the your project.
2.  Right click on your project and select "Build Path/Add External Archives..." from the menu.
3.  Browse to the JSyn SDK that you just downloaded and select the "classes/SoftSynthTools.jar" file.
4.  Click "Open".
5.  For Windows also add the "jsyn.jar" file using the same techique.

### Running a JSyn Example Program

1.  Click on "jsynsrc" in your project.
2.  Click on the "com.softsynth.jsyn.tutorial" package.
3.  Double click on "TUT\_SineWave.java" and look at the source code. You will find instructions on how to customize the code.
4.  Run it by selecting "Run As/Java Application" from the Run menu.
5.  This is a very simple program that just plays a sine wave. It is a good place to start. There are other example that are much more complex.
6.  You can also run any of the programs in "com.softsynth.jsyn.examples" that start with "TJ\_".