---
layout: base.njk
eleventyNavigation:
  key: "/pforth/index.php"
  title: "pForth"
  order: 1
---

# pForth - Portable Forth in 'C'

Translations to [Français](/pforth/indexfr/) by [Antoine Billiau](/pforth/infotrad/), or [Chinese](http://vision.twbbs.org/%7Eletoh/forth/pf_tuttw.html) by [Letoh](http://vision.twbbs.org/%7Eletoh/blog/?page_id=169)

PForth is a [public domain](#Legal), **portable** ANS Forth based on a kernel written in ANSI 'C'. This makes it easy to port pForth to multiple platforms. So far, pForth has run on Macintosh, Windows, Linux, Beagle Board, Raspberry Pi, SUNs, Amigas, BeOS, Nokia Communicator, SGI Indys, 3DO ARM systems, 3DO PowerPC systems, WebTV systems, Hitachi SH4, OpenTV prototypes, Compaq Ipaq 3970, Sharp LH79520 ARM processor, Ciena Systems networking hardware, and some internal projects at Lucent. If you build pForth for an embedded system, please let me know and I will add your machine to the list of machines that pForth has run on.

PForth was developed by [Phil Burk](/philburk/) while working at 3DO. PForth is open source, and may be used for free.

## PForth source is now on **[GitHub](https://github.com/philburk/pforth)**!

## PForth Features

*   ANS standard support for Core, Core Extensions, File-Access, Floating-Point, Locals, Programming-Tools, Strings word sets.
*   Compiles from simple ANSI 'C' code with no special pre-processing needed. Also compiles under C++.
*   INCLUDE reads source from normal files, not BLOCKs.
*   Precompiled dictionaries can be saved and reloaded.
*   Custom 'C' code can be easily linked with pForth.
*   Handy words like ANEW  INCLUDE? SEE  WORDS.LIKE  FILE?
*   Single Step Debugger
*   Smart conditionals.  10 0 DO I . LOOP works in outer interpreter.
*   Conditional compilation.  \[IF\]   \[ELSE\]   \[THEN\]
*   Local variables using { }
*   'C' like structure defining words.
*   Vectored execution using DEFER
*   Can be compiled without any stdlib calls for embedded systems. Only needs custom KEY and EMIT equivalents in 'C'.

## Download pForth

Download a zip archive, or checkout a Git repository from **[GitHub](https://github.com/philburk/pforth)**.

Older release are available from the [old repository on Google Code!](http://code.google.com/p/pforth/downloads/list)

## pForth Documentation

*   See the README.txt file in the pForthV\* directory for version information.
*   For information on pForth see the [pForth Reference Manual](/pforth/pf_ref/).
*   To learn the Forth language see the [Forth Tutorial](/pforth/pf_tut/). Translations to [Français,](/pforth/pf_tutfr/) or [Chinese](http://vision.twbbs.org/%7Eletoh/forth/pf_tuttw.html) by [Letoh](http://vision.twbbs.org/%7Eletoh/blog/?page_id=169)
*   Peruse the [pForth FAQ](/pforth/pf_faq/) (Frequently Asked Questions)
*   For a **glossary** of Forth words refer to the draft [ANS Forth spec](http://www.taygeta.com/forthlit.html).

To report bugs, please use the Issue tracker on GitHub.

To ask pForth specific questions, please use the [pforth developer group list](https://groups.google.com/forum/#!forum/pforthdev).  

* * *

### <a name="Legal"></a>Legal Stuff

Copyright 1994 - 3DO, Phil Burk, Larry Polansky, David Rosenboom

The pForth software code is dedicated to the public domain, and any third party may reproduce, distribute and modify the pForth software code or any derivative works thereof without any compensation or license. The pForth software code is provided on an "as is" basis without any warranty of any kind, including, without limitation, the implied warranties of merchantability and fitness for a particular purpose and their equivalents under the laws of any jurisdiction.