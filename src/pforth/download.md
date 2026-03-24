---
layout: base.njk
---

# Download pForth

<center>[&lt;a href="telechar.php"&gt;Français&lt;/a&gt;]</center>

You may select the appropriate archive for your machine and download it. The full source code is included in all archives so if you don't see a version for your machine, just download something close to your target machine and hack the Makefile.

If you haven't already registered please do so on the [pForth Home Page.](/pforth)

# Download the latest code from this **[Google Code project](http://code.google.com/p/pforth/)**.

## Release Notes

### More recent release notes are [here](http://code.google.com/p/pforth/source/browse/trunk/releases.txt).

### V23 - 7/20/2008

*   Reorganized for Google Code project.
*   Added command line history and cursor control words.
*   Sped up UM\* and M\* by a factor of 3. Thanks to Steve Green for suggested algorithm.
*   Modified ACCEPT so that a line at the end of a file that does NOT have a line terminator will now be processed.
*   Use \_getch(), \_putch(), and \_kbhit() so that KEY, EMIT and ?TERMINAL will work on PC.
*   Fixed : foo { -- } 55 ; - was entering local frame but not exiting.
*   Redefined MAKE\_ID to protect it from 16 bit ints
*   John Providenza says "If you split local variables onto 2 lines, PForth crashes." Fixed. Also allow \\
*   Fixed float evaluation in EVALUATE in "quit.fth".
*   Flush register cache for ffColon and ffSemiColon to prevent stack warnings from ;  
    

### V21 - 9/16/1998

*   Fixed some compiler warnings.

### V20 - 8/98

*   Expand PAD for ConvertNumberToText so "-1 binary .s" doesn't crash. Thank you Michael Connor of Vancouver for reporting this bug.
*   Removed FDROP in REPRESENT to fix stack underflow after "0.0 F.". Thank you Jim Rosenow of Minnesota for reporting this bug.
*   Changed pfCharToLower to function to prevent macro expansion bugs under VXWORKS. Thank you Jim Rosenow of Minnesota for reporting this bug.
*   "0.0 F~" now checks actual binary encoding of floats. Before this it used to just compare value which was incorrect. Now "0.0 -0.0 0.0 F~" returns FALSE.
*   Fixed definition of INPUT$ in tutorial. Thank you Hampton Miller of California for reporting this bug.
*   Added support for producing a target dictionary with a different Endian-ness than the host CPU.  See PF\_BIG\_ENDIAN\_DIC and PF\_LITTLE\_ENDIAN\_DIC.
*   PForth kernel now comes up in a mode that uses BASE for numeric input when started with "-i" option.  It used to always consider numeric input as HEX. Initial BASE is decimal.

### V19 - 4/7/98

*   Warn if local var name matches dictionary, : foo { count -- } ;
*   TO -> and +-> now parse input stream. No longer use to-flag.
*   TO -> and +-> now give error if used with non-immediate word.
*   Added (FLITERAL) support to SEE.
*   Added TRACE facility for single step debugging of Forth words.
*   Added stub for ?TERMINAL and KEY? for embedded systems.
*   Added PF\_NO\_GLOBAL\_INIT for no reliance on global initialization.
*   Added PF\_USER\_FLOAT for customization of FP support.
*   Added floating point to string conversion words (F.) (FS.) (FE.)  
    For example:   : F.   (F.)  TYPE  SPACE  ;
*   Reversed order that values are placed on return stack in 2>R so that it matches ANS standard.  2>R is now same as SWAP >R >R. Thank you Leo Wong for reporting this bug.
*   Added PF\_USER\_INIT and PF\_USER\_TERM for user definable init and term calls.
*   FIXED memory leak in pfDoForth()

### V18

*    - Make FILL a 'C' primitive.
*    - optimized locals with (1\_LOCAL@)
*    - optimized inner interpreter by 15%
*    - fix tester.fth failures
*    - Added define for PF\_KEY\_ECHOS which turns off echo in ACCEPT if defined.
*    - Fixed MARKER. Was equivalent to ANEW instead of proper ANS definition.
*    - Fixed saving and restoring of TIB when nesting include files.

### V17

*    - Fixed input of large floats.  0.7071234567 F.  used to fail.

* * *

### <a name="Legal"></a>Legal Stuff

Copyright 1994-7 3DO, Phil Burk, Larry Polansky, David Rosenboom

The pForth software code is dedicated to the public domain, and any third party may reproduce, distribute and modify the pForth software code or any derivative works thereof without any compensation or license. The pForth software code is provided on an "as is" basis without any warranty of any kind, including, without limitation, the implied warranties of merchantability and fitness for a particular purpose and their equivalents under the laws of any jurisdiction.