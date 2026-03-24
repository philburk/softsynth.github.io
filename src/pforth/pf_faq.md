---
layout: base.njk
---

<center>&lt;h1&gt;PForth FAQ&lt;/h1&gt;</center>

*   <center>[&lt;a href="pf_faqfr.php"&gt;Français&lt;/a&gt;]</center>

*   [Where can I download pForth?](#download)
*   [How much does it cost?](#cost)
*   [Will pForth run on my machine?](#machine)
*   [Why did you write pForth instead of using GForth or other 'C' based Forths?](#why)
*   [Can pForth make turnkey applications under Windows and Unix?](#turnkey)
*   [Does pForth have access to Win32 API functions?](#Win32)
*   [How do I call my own custom 'C' code?](#custom)
*   [Why does KEY not return until I hit the &lt;ENTER&gt; key?](#key)
*   [How can I increase the size of the dictionary?](#dic_size)


### Where can I <a name="download"></a>download pForth?

> You can download a snapshot from here:  [http://code.google.com/p/pforth/downloads/list](http://code.google.com/p/pforth/downloads/list)
>
> Or access the SVN repository here: [http://code.google.com/p/pforth/source/checkout](http://code.google.com/p/pforth/source/checkout)

### How much does it <a name="cost"></a>cost?

> PForth was placed in the public domain by Phil Burk, Larry Polansky, David Rosenboom and 3DO. So it is free and worth every penny of it. ;-)

### Will pForth run on my <a name="machine"></a>machine?

> I release executable versions of pForth  for PCs, Macintosh, and Linux/Intel.  But pForth is very portable so you can probably compile it for any machine that meets these requirements:
>
> *   has ANSI standard 'C' compiler (eg. "gcc"),
> *   supports 32 bit integers and pointers,
> *   has character input and output functions,
> *   has a few hundred K of RAM.
>
> For more information, please see the section on [compiling pForth](/pforth/pf_ref/#Compiling_pForth) in the reference manual.

### <a name="why"></a>Why did you write pForth instead of using GForth or other 'C' based Forths?

> When I was working at 3DO, we needed a Forth that we could compile for UNIX, PCs, Macintosh, and, most importantly, for our very own hardware that did not yet have an operating system. I looked at a number of 'C' Forths and found that I could not use them because of one or more of the following reasons:
>
> 1.  they required UNIX or other OS specific calls. (We had NO operating system)
> 2.  they required special preprocessors to build the dictionary which complicated our build process.
> 3.  they were a testbed for brilliant and sophisticated modifications to the Forth language which we admired but did not understand.
>
> So if you are looking for a Forth to run fast on UNIX, PCs, or Macintosh, there are better alternatives to pForth. But if you want to run Forth on new hardware, and **portability** is your main concern, then pForth is probably a good choice because:
>
> 1.  PForth compiles using straight ANSI 'C' compilers like "gcc".
> 2.  PForth does not require any operating system calls except the equivalent of KEY and EMIT which you can write for your machine.
> 3.  PForth uses no clever coding tricks. It is very simple and easy to port. Unfortunately, this means it is also a little slower then some other Forths.
> 4.  PForth dictionaries can be loaded from a file when run under an OS, or compiled statically for embedded systems. Dictionaries can be generated with either endianness in case the target and host are different, ie. one is little endian and the other is big endian.

### Can pForth make <a name="turnkey"></a>turnkey applications under Windows and Unix?

> Yes. Use [TURNKEY](/pforth/pf_ref/#Turnkey-Apps) for any platform.

### Does pForth have access to <a name="Win32"></a>Win32 API functions?

> PForth was designed to be as portable as possible and to have as few OS dependencies as possible. It can run on a system with NO OS support except charIn() and charOut(). It runs on everything. Therefore I have avoided direct support for any Win32 or other APIs.  But you can glue in calls to [custom 'C' functions](/pforth/pf_ref/#Link_Custom_C) as needed. One guy hacked an OpenGL interface. If you want to do Win32 development I would pick another Forth. PForth is really designed for embedded systems or cross platform ANS Forth development.

### How do I call my own <a name="custom"></a>custom 'C' code?

> Please see the section on [calling custom 'C' functions](/pforth/pf_ref/#Link_Custom_C) in the reference manual.

### Why does <a name="key"></a>KEY not return until I hit the &lt;ENTER&gt; key?

> The terminal input words in pForth are implemented using the standard 'C' call "getchar()". I wish that getchar() would return immediately whenever a key was hit on the keyboard, but it usually does not. On PCs, UNIX, Macs and many other systems, getchar() waits until the user has finished entering a complete line and hit the &lt;ENTER&gt; key. Then all of the characters on the line are available.  This unfortunate behavior of KEY makes it hard to do single character interfaces for editors, or "more" style output. Also because of this problem, KEY? will always return immediately with FALSE.  On embedded systems where terminal input is directly from a UART, it is simple to make KEY and KEY? work properly.

### <a name="dic_size"></a>How can I increase the size of the dictionary?

> You can use the word MAP to print information about the current size of the dictionary. If you enter MAP you will see something like this:
>
> > ```text
> > Code Segment
> >    CODEBASE           = 6A48A0
> >    HERE               = 6AD2CC
> >    CODELIMIT          = 6EDC80
> >    Compiled Code Size = 35372
> >    CODE-SIZE          = 300000
> >    Code Room UNUSED   = 264628
> > Name Segment
> >    NAMEBASE           = 687390
> >    HEADERS-PTR @      = 68B0F8
> >    NAMELIMIT          = 6A4850
> >    CONTEXT @          = 68B0F0
> >    LATEST             = 68B0F0  = ;;;;
> >    Compiled Name size = 15720
> >    HEADERS-SIZE       = 120000
> >    Name Room Left     = 104280
> > ```
>
> Notice the variables CODE-SIZE and HEADERS-SIZE. They can be used to increase the size of the dictionary when you use SAVE-FORTH. For example, launch pForth as you normally do. Then enter:
>
> > ```text
> > 500000 CODE-SIZE !         \ request code portion of new dictionary to be 500000 bytes
> > 300000 HEADERS-SIZE !      \ request name portion of new dictionary to be 300000 bytes
> > c" bigger.dic" SAVE-FORTH  \ create new and bigger dictionary file
> > bye
> > ```
>
> Now run pForth using the new dictionary:
>
> > ```text
> > pforth -dbigger.dic
> > ```
>
> And use MAP to verify that the dictionary is actually bigger. You can change the name of the new dictionary to "pforth.dic" to make it the default.