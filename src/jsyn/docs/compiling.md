---
layout: base.njk
title: "JSyn Unit Generator Overview"
eleventyNavigation:
  key: "/jsyn/docs/compiling.md"
  title: "Compiling"
  order: 3
  parent: "/jsyn/docs/index.md"
---

# How to Compile a JSyn Program

JSyn is [provided in a JAR file](/jsyn/developers/). To use JSyn with your program simply add the JSyn JAR file to your classpath.

You can compile simple Java JSyn programs from the command line. But we highly recommend using in IDE. See below.

## Compiling from the Command Line

You can compile your program with JSyn from a shell. Here is an example of how to compile code in a folder called "com/mystuff" and to place the results in a folder called "classes". Assume the JSyn JAR file is called "jsyn\_16\_7\_0.jar"

```text
javac   -d classes   -cp pathtojar/jsyn_16_7_0.jar   com/mystuff/*.java
```

# Using IDEs

There are two powerful IDEs to choose from.
Both have a free option for individual developers.

### [How to Build JSyn with IDEA](/jsyn/docs/dev_idea/)
[IntelliJ IDEA](https://www.jetbrains.com/idea/) is highly recommended.

### [How to Build JSyn with Eclipse](/jsyn/docs/dev_eclipse/)
[Eclipse](http://www.eclipse.org/downloads/moreinfo/java.php) is the IDE that I used for many years when developing JSyn.
