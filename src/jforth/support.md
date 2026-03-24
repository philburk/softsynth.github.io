---
layout: base.njk
title: "JForth Tech Support"
---

<center>&lt;h1&gt;&lt;font color="#000000"&gt;&nbsp;JForth Technical Support&lt;/font&gt;&lt;/h1&gt;</center>

<center>&lt;font color="#000000"&gt;Because JForth is free-ware, we do not promise technical support.&nbsp; But hopefully the information on this page will help you.&lt;/font&gt;</center>

[](Http://home.tampabay.rr.com/jforth/)

* * *

## Bug Fixes and Patches

### 9/4/1998 - Fix for Arexx Compilation bug.

> **If** you get this error when compiling Arexx support:

> > ```text
> > ERROR: CALL: ERRORMSG() not found in FD:REXXSYSLIB_LIB.FD
> > ERRORMSG?
> > Line 58 of file "JRX:AREXXCALLS.F"
> > call RexxSysLib_lib ErrorMsg  TuckA0
> > ```
> 
> Then you should download [Fix1\_ARexx.lha](/jforth/Fix1_ARexx.lha). It contains new versions of several ".fd" files and one include ".j" file. (The archive should contain full pathnames, but just in case, the .fd files go in JForth:Fd.files/ and the lone asl.j file goes into JForth:Include/libraries/)
> 
> The current version of J4th2of3.lha already has this fix, so if you downloaded JForth after 9/4/98 you don't need this.

* * *

## Reporting Bugs

Please report any new bugs found to the JForth mail list. You can subscribe to the list on  Martin Randall's [**JForth.org**](http://www.jforth.org/) Page

Return to [JForth home page.](/jforth)