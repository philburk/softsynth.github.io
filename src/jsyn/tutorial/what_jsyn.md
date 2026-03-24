---
layout: base.njk
title: "JSyn Tutorial"
---

JSyn is a Java API for synthesizing audio. (API stands for "Application Programmer Interface"). This means that Java programmers can use JSyn to add synthesized sound to their programs. Java also has APIs for 3D graphics, network connections, user interface tools, etc. The API is the set of classes and their methods that are used directly by the programmer. Internally, the underlying classes may change but if the change is not visible to the programmer then the API has not changed. A programmer will only have to change their source code if the API changes.

JSyn consists of several layers. Starting from the top we have:

**JSyn API**

Contains the documented Java classes that the programmer calls directly.

**JSyn** **Engine**

The runtime guts of JSyn where the actual audio is synthesized. This runs as a high priority thread to ensure real-time operation. If this doesn't run fast enough then you may hear gaps and pops.

**Audio Device Interface**

This layer communicates with a low-level audio API. On desktops the default is to use JavaSound. There is also an option to use JPortAudio to get better resolution or N>2 channels.