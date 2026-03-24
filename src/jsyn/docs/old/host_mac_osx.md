---
layout: base.njk
title: "JSyn Docs for Old API"
---

&lt;!-- .bigred { color: #F00; } --&gt;

# This old API is deprecated. Please use [the new API instead](/jsyn/docs/)!

# Installing and Using JSyn on a Macintosh OS X

Note that these instructions are for JSyn V144 and later. (Feedback welcome.)

## <a name="install"></a>Installing JSyn SDK

1.  Unzip the JSyn SDK archive and place the unzipped folder in your work area.
2.  Install the "classes/jsyn.jar" and "macosx/libJSynV144.jnilib" into the "Library/Java/Extensions" folder in your user account folder. You can do that by hand or, more easily, by running the JSyn Plugin installer [here](/jsyn/plugins_x). The Java and Extensions folders may need to be created.
3.  Note that the "SoftSynthTools.jar file" contains various classes that are not part of the "jsyn.jar" plugin. If you post a JSyn Applet then SoftSynthTools.jar would be an Applet ARCHIVE that lives on your server.

I strongly recommend using Eclipse. It is a great Integrated Development Environment (IDE) for Mac, Windows and Linux.

### [Instructions for using Eclipse to develop JSyn Programs](/jsyn/docs/old/using_eclipse/)

### Visit the Apple web site for more information about programming [Java on Mac OS X](http://developer.apple.com/techpubs/macosx/Java/java.html).