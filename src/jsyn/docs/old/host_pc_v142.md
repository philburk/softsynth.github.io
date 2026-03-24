---
layout: base.njk
title: "JSyn Docs for Old API"
---

&lt;!-- .bigred { color: #F00; } --&gt;

# This old API is deprecated. Please use [the new API instead](/jsyn/docs/)!

# Installing, Compiling, and Running JSyn on a PC

### Installing Developer Package

1.  Double click on the ".zip" file to decompress it using [WinZip](http://www.winzip.com/) or other zip program. Unzip to a directory called "jwork" in a place that is convenient to you. (Warning: old DOS based zip programs may not handle the long file names used by Win95. Use a recent unzipper.)
2.  Find a folder in the JSyn package called lib.
3.  For **Windows 95/98/2000**, drag the file "JSynV???.DLL" to your "C:\\WINDOWS\\SYSTEM" folder.
4.  For **Windows NT/XP**, drag the file "JSynV???.DLL" to your "C:\\WINDOWS\\SYSTEM32" folder.
5.  You may wish to remove old JSyn DLLs but they should cause no harm if you decide to leave them there. They were called "JSynV???.dll" and "CSynV???.dll".

You can develop JSyn programs using either SUNs [JavaSoft](http://www.javasoft.com) JDK, Microsoft's Java SDK or J++, Borland's JBuilder, or using Netscape Communicator. [Here are instructions for using Borland JBuilder with JSyn](/jsyn/docs/old/using_jbuilder/)

### Compiling and Running a Simple JSyn Program using the SUN JDK

1.  Find the"jsyn\\usercode" directory in the JSyn SDK.
2.  Double click on the "buildAll.bat" file.
3.  Don't worry if you get depracation warnings. We sometimes use obsolete (depracated) methods deliberately in order to be compatible with older web browsers.
4.  If you look in the "classes" folder, you should see a folder called "mystuff" containing "TJ\_Beep.class". It is in the folder "mystuff" because in "TJ\_Beep.java" we specified that TJ\_Beep would be in the "package mystuff".
5.  Go back to the usercode directory and double click on the "runBeep.bat" file.
6.  You should see a small window open with a "Beep" button. Click on the button to hear a random beep.
7.  If you have the JSyn [plugin](/jsyn/plugins/) installed, then you can click on the "[tj\_beep.html](/jsyn/usercode/tj_beep/)" file and hear the program running your web browser.

### Writing Your Own JSyn Programs

Let's assume we are creating a new program called "Boing".

*   You can make new JSyn programs by making a copy of the "TJ\_Beep.java" file in the usercode directory and modifying it. You will need to change the name of the public class in the file to match the file name. For, example, the "public class Boing" must be defined in a file called "Boing.java".
*   Double click on "buildAll.bat" file. Debug it until you can eliminate the compiler errors.
*   Make a copy of the "runBeep.bat" file and call it "runBoing.bat".
*   Edit  "runBoing.bat" and change "TJ\_Beep" to "Boing". Notice how we set the CLASSPATH to include the JSynClasses from the JAR file.
*   Double click on the "runBoing.bat" file.
*   You can also copy examples from the directory "jsrc\\JSynExamples" into the user directory. If you do this, change the "package JSynExamples" declaration at the top of the file to "package mystuff".

### Running JSyn Examples with JDK

You can use JavaSoft's Java Development Kit, JDK, to compile and run Java applications.  The JDK can be downloaded for free from [JavaSoft](http://www.javasoft.com).

Once the JDK is installed, you can tell Java to use the JSyn classes by entering:

> ```text
> cd classes
> set CLASSPATH=%CLASSPATH%;JSynClasses.jar
> ```

Now run the example programs by entering:

> ```text
> java   &lt;example_name&gt;
> ```

Since the supplied examples are in a package called "JSynExamples", you will need to use the full name of the classes:

> ```text
> java   JSynExamples.TJ_Wind
> ```

You should see a window open with some faders and you should hear a wind like sound.  Play with the faders to change the sound.  Try running the other TJ\_\*.class examples.  You can also run a more complex example by entering:

> ```text
> java   JSynExamples.PerformanceRack
> ```

### JSyn with Netscape Communicator

JSyn Applets can be run using Netscape Communicator with the JSyn plugin.  Netscape Communicator can be downloaded from [Netscape](http://www.netscape.com).

Once Netscape Communicator is installed, you will need to install the JSyn plugin. You can install the plugin by visiting the [JSyn Plugin Download Page.](/jsyn/plugins)  Once JSyn has been installed, you can run the [JSyn Examples](/jsyn/examples).

### Adjusting Latency to Remove Glitches

If you hear periodic glitches where the sound stops for a fraction of a second, then the latency may be set too low  for your computer.  The "latency" is the time that your computer may be so busy doing other tasks that it cannot generate audio. The faster the computer, the lower the latency. The default latency for Windows 95 is set to 80 msec. For NT, the latency is about 280 msec. You may be wondering why we don't just set the latency to 2000 msec and be guaranteed that we will have no glitches. But the latency determines the size of the audio buffers. So when you clicked on a button or pressed a key to cause a sound, it would take about 2000 msec (2 seconds) before the sound made it through the buffers and you could heard it.  This would make real-time performance impossible.  So we want the lowest latency possible without glitches. Using an operating system with better real-time behavior, like Linux, we could see latencies closer to 10 msec.

Let's detemine the latency of your PC.

*   Run one of the examples from the MS-DOS shell like you did in the previous section. The TJ\_WaveMaker program is good because it normally has a smooth sound. Hit the "Square" button to get a sound.  Move windows around and switch applications to see if the sound glitches.
*   Exit the JSyn application.
*   If you heard glitches, try a very high latency.  In the same MS-DOS shell that you are running JSyn, enter:

```text
SET   PA_MIN_LATENCY_MSEC=500
```

*   Then rerun the JSyn application.  If you still hear glitching, then there is either a different problem causing the glitches, or your PC has a terribly high latency.  Try closing all other programs and run the test again.  If you still hear glitches consider buying a faster computer. Or contact your sound card's manufacturer for a driver update to ensure you are using the latest, most efficient audio drivers for your hardware.  An inefficient driver can make even a 700MHz PIII exhibit poor performance. (Thanks for this tip, Nick!)
*   If the above experiment eliminated the glitches, try repeating the experiment until you find the lowest latency that doesn't glitch. Don't worry about finding a very exact figure because the latency will vary from program to program.
*   When you determine the lowest number, multiply it by 1.5 and that is the safe value you can use on your computer.
*   Carefull edit your "C:\\AUTOEXEC.BAT" file and add the following lines (replace the ??? with the value appropriate for your computer):

```text
REM  Set audio latency for JSyn and PortAudio
SET   PA_MIN_LATENCY_MSEC=???
```

*   Reboot your computer and enjoy glitch free sound. If the sound glitches later, bump the latency up by 10% and try that for awhile.

### Java Integrated Development Environments

There are a number of Jave IDEs on the market that have very sophisticated editors and graphical design features. MicroSoft J++ has a very fast compiler, and integrated help. But it encourages the use of non-standard Windows specific GUI components. Warning! If you use them your code will not be portable to computers running anything but Microsoft Windows. This is not consistent with the write-once-run-anywhere philosphy of Java. Microsoft recently took some heat from the justice department over this and may have corrected the problem by now. I have not tried the IDEs from other vendors.

I generally prefer to use the [Sun JDK](http://www.javasoft.com) because it is very straight forward and creates portable code. I use a shareware text editor called [UltraEdit-32](http://www.ultraedit.com) with the JDK. It has syntax coloring for Java, and can be configured to run the JDK compiler, and run your Java applications as well. Error messages from the compiler can be redirected to a region in the editor and when you click on the error message, it will open the file with the error and highlight the offending line. Look in the "Advanced" menu under "Tool Configuration...". I define menu commands that call batch scripts like "jbuild.bat". To get the compiler output into the editor, select the "Output to List Box" and "Capture Output" options.