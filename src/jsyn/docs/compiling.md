---
layout: base.njk
title: "JSyn Unit Generator Overview"
eleventyNavigation:
  key: "/jsyn/docs/compiling.php"
  title: "Compiling"
  order: 3
  parent: "/jsyn/docs/index.php"
---

# How to Compile a JSyn Program

JSyn is [provided in a JAR file](/jsyn/developers/). To use JSyn with your program simply add the JSyn JAR file to your classpath.

You can compile simple Java JSyn programs from the command line. But we highly recommend using [Eclipse](http://www.eclipse.org/downloads/moreinfo/java.php). Eclipse is a free and powerful development environment for Java.

### Compiling from the Command Line

You can compile your program with JSyn from a shell. Here is an example of how to compile code in a folder called "com/mystuff" and to place the results in a folder called "classes". Assume the JSyn JAR file is called "jsyn\_16\_7\_0.jar"

```text
javac   -d classes   -cp pathtojar/jsyn_16_7_0.jar   com/mystuff/*.java
```

### Using JSyn in an Eclipse Project

We highly recommend using Eclipse for Java development. Eclipse is a free IDE with an editor, compiler and debugger. Eclipse has powerful "refactoring" tools that let you reorganize code and do smart global renaming.

If you are already an Eclipse expert, just put the JSyn examples in your project folder and then add the JSyn JAR file to your Build Path. If you are new to Eclipse, then please read on for more detailed instructions.

If you haven't already installed Eclipse then get it from [here](http://www.eclipse.org/downloads/).

#### Prepare for JSyn

1.  If you used JSyn before or installed the old JSyn plugin, then remove those old JSyn JAR files. Look in these folders on Macintosh:

*   {your hard drive}/Library/Java/Extensions/\*jsyn\*
*   {your username}/Library/Java/Extensions/\*jsyn\*

3.  Download the latest [JSyn JAR file](/jsyn/developers/download/).
4.  Download the [JSyn Examples archive](/jsyn/developers/download/).
5.  Download the [jsyn-javadocs.jar](/jsyn/docs/jsyn-javadocs.jar) file.

#### Create a JSyn Project.

1.  Launch Eclipse.
2.  From the File menu, select "New" then "Project...".
3.  Select the type "Java Project" Wizard and click "Next>".
4.  Give your project a name like "JSynFun".
5.  Click "Finish" button to create the project.

#### Add JSyn JAR to Eclipse CLASSPATH

1.  Open the "workspace/JSynFun" folder using Finder on Mac or Explorer on Windows.
2.  Create a new "libs" folder in the JSynFun project folder and put the JSyn JAR file in the "libs" folder.
3.  In Eclipse, right click on the "JSynFun" folder and select "Refresh".
4.  In Eclipse, open the libs folder and right click on the JSyn JAR file. Select "Build Path" / "Add to Build Path".

#### Add JSyn JavaDocs to Eclipse (Optional)

If you attach javadocs to the JAR file in Eclipse then you can get popup documentation.

1.  Open the "workspace/JSynFun/libs" folder using Finder on Mac or Explorer on Windows.
2.  Create a new "docs" folder in the "libs" folder and put the [jsyn-javadocs.jar](/jsyn/docs/jsyn-javadocs.jar) file in the "docs" folder.
3.  In Eclipse, right click on the "JSynFun" folder and select "Refresh".
4.  In Eclipse, open the libs folder and right click on the JSyn JAR file. Select "Build Path" / "Configure Build Path".
5.  Click on the "Libraries" tab.
6.  Click on the triangle next to the JSyn JAR file so that it displays several lines below it.
7.  Double click on the "Javadoc location" line.
8.  Select "Javadoc in Archive".
9.  Select "Workspace file".
10.  Click on the "Browse..." button and select the "libs/docs'jsyn-javadocs.jar" file.
11.  Click "Validate..." to test it.
12.  Click "OK" until you are back to the Eclipse workspace.

#### Add JSyn Examples, Compile and Play

1.  Open the "workspace/JSynFun/src" folder using Finder or Explorer.
2.  Unpack the JSyn examples archive.
3.  Drag the "com" folder from the examples archive into the "src" folder of your Eclipse project.
4.  In Eclipse, right click on the "src" folder and select "Refresh".
5.  In Eclipse, double-click the "com.jsyn.examples.PlayTone.java" file.
6.  Under the Eclipse "Run" menu select "Run As" / "Java Application".
7.  You should hear a tone.
8.  Read the [docs](/jsyn/docs/usersguide/) and start writing some real "computer music".