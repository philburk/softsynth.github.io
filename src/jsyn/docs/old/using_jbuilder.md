---
layout: base.njk
title: "JSyn Docs for Old API"
---

&lt;!-- .bigred { color: #F00; } --&gt;

# This old API is deprecated. Please use [the new API instead](/jsyn/docs/)!

# Building JSyn Programs Using Borland JBuilder

Important: we strongly recommend using Eclipse instead of JBuilder. Eclipse is a great Integrated Development Environment (IDE) for Mac, Windows and Linux.

### [Instructions for using Eclipse to develop JSyn Programs](/jsyn/docs/old/using_eclipse/)

JBuilder is a Java Integrated Development Environment (IDE) from Borland. It includes a text editor, compiler, debugger, and special tools for designing AWT or  Swing graphical user interfaces. These instructions are for using the JBuilder Personal Edition which is available for free download from [Borland](http://www.borland.com). [Click here to get the free SDK.](http://www.borland.com/products/downloads/download_jbuilder.html)

Follow these steps to compile and run the simple TJ\_Beep program included with the JSyn SDK. Let's assume the JSyn SDK was unpacked and was installed properly. We will refer to that folder as the "JSyn SDK Folder".

### Create a New JBuilder Project.

1.  Install and register JBuilder using the key from Borland.
2.  Run Borland JBuilder.
3.  Select "New Project..." from the File menu.
4.  Enter a project name like "jsynWork".
5.  Keep hitting "Next>" button until "Finish" button appears then hit "Finish".
6.  Select "Add Files" from the Project menu.
7.  In the newer JSyn SDK Folder look in the sub folder "jsrc/mystuff". On the older SDK look in the sub folder "jsyn/usercode".
8.  Select the file "TJ\_Beep.java" and hit "OK".

### Tell JBuilder Where to Find the JSyn Classes

1.  Select Select "Project Properties..." from the Project menu.
2.  Select the "Path" tab, and the "Required Libraries" tab.
3.  Hit the "Add..." button.
4.  Select the User Home folder.
5.  Hit the "New..." button. A dialog will pop up.
6.  Set the Name to "JSyn".
7.  Hit the Add button.
8.  Find and select the file "classes\\JSynClasses.jar" in the JSyn SDK Folder and hit OK.
9.  Hit the Add button again
10.  Find and select the file "classes\\SoftSynthTools.jar" in the JSyn SDK Folder and hit OK.
11.  Hit the OK button until the small dialogs are all closed.

### Compile and Run Program

1.  To Make and Run the program click on the first green triangle in the JBuilder toolbar at the top.
2.  After compilation you will be presented with a Runtime Properties Dialog. (For JBuilder7. click on the New..." button.) Click on the "..." button next to the Main Class field and select "mystuff" then "TJ\_Beep". Hit "OK".
3.  Hit "OK".
4.  The TJ\_Beep program will launch and you can click the Beep button to make a random tone. Note some of the notes may be too low a pitch to hear on laptop speakers.
5.  Click once on "TJ\_Beep.java" in the left side margin to edit the file and make it more interesting.

You're off and running! Now go code some music.

### Tips and Tricks

**Q: I changed the name of a Java file, or a package name. Now JBuilder tells me that the package name is incorrect. How can I fix this?**  
A: There are at least two possible causes for this:

1.  Your package name must match the folder hierarchy of the Java source code. Suppose JBuilder is looking for source code in the folder "src/". Suppose you have a class called "MyThing" in the package "com.mydomain.goodstuff". The source code must then be in a file called "src/com/mydomain/goodstuff/MyThing.java".
2.  If the folder hierarchy is correct, then it is possible that JBulder is just confused. It keeps track of where to find various packages and that information can become corrupt. So look for a folder called **"package cache"** in your classes folder. It is likely to contain a bunch of files whose names correspond to your packages and that have a ".dep2" suffix. Close JBuilder then delete folder. When you restart JBuilder and compile then it will rebuild that cache.

  
You can **quickly run any Java class** that has a valid main() method by right-clicking on its name in the file browser at the left hand side of the JBuilder screen. Then select Run or Debug from the popup menu. Mac users will need a 2 or 3 button mouse for this.