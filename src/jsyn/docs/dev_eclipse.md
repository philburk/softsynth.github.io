---
layout: base.njk
title: "Eclipse for JSyn"
---

# Using JSyn in an Eclipse Project

You can use Eclipse for Java development. Eclipse is a free IDE with an editor, compiler and debugger. Eclipse has powerful "refactoring" tools that let you reorganize code and do smart global renaming.

If you are already an Eclipse expert, just put the JSyn examples in your project folder and then add the JSyn JAR file to your Build Path. If you are new to Eclipse, then please read on for more detailed instructions.

If you haven't already installed Eclipse then get it from [here](http://www.eclipse.org/downloads/).

## Prepare for JSyn

1.  If you used JSyn before or installed the old JSyn plugin, then remove those old JSyn JAR files. Look in these folders on Macintosh:

*   {your hard drive}/Library/Java/Extensions/\*jsyn\*
*   {your username}/Library/Java/Extensions/\*jsyn\*

3.  Download the latest [JSyn JAR file](/jsyn/developers/download/).
4.  Download the [JSyn Examples archive](/jsyn/developers/download/).
5.  Download the [jsyn-javadocs.jar](/jsyn/docs/jsyn-javadocs.jar) file.

## Create a JSyn Project.

1.  Launch Eclipse.
2.  From the File menu, select "New" then "Project...".
3.  Select the type "Java Project" Wizard and click "Next>".
4.  Give your project a name like "JSynFun".
5.  Click "Finish" button to create the project.

## Add JSyn JAR to Eclipse CLASSPATH

1.  Open the "workspace/JSynFun" folder using Finder on Mac or Explorer on Windows.
2.  Create a new "libs" folder in the JSynFun project folder and put the JSyn JAR file in the "libs" folder.
3.  In Eclipse, right click on the "JSynFun" folder and select "Refresh".
4.  In Eclipse, open the libs folder and right click on the JSyn JAR file. Select "Build Path" / "Add to Build Path".

## Add JSyn JavaDocs to Eclipse (Optional)

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

## Add JSyn Examples, Compile and Play

1.  Open the "workspace/JSynFun/src" folder using Finder or Explorer.
2.  Unpack the JSyn examples archive.
3.  Drag the "com" folder from the examples archive into the "src" folder of your Eclipse project.
4.  In Eclipse, right click on the "src" folder and select "Refresh".
5.  In Eclipse, double-click the "com.jsyn.examples.PlayTone.java" file.
6.  Under the Eclipse "Run" menu select "Run As" / "Java Application".
7.  You should hear a tone.
8.  Read the [docs](/jsyn/docs/usersguide/) and start writing some real "computer music".