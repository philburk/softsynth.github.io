---
layout: base.njk
---

<center>&lt;h1&gt;&lt;font color="#000000"&gt;Téléchargement de pForth&lt;/font&gt;&lt;/h1&gt;</center>

Vous pouvez choisir l'archive appropriée à votre machine et la télécharger. Le code source complet est inclu dans toutes les archives, aussi, si vous ne trouvez pas la version correspondant exactement à votre machine, téléchargez une version s'en approchant et modifiez le fichier de construction ("Makefile").

Si vous ne vous êtes pas encore enregistré, veuillez le faire à la [Home Page de pForth.](/pforth/indexfr/)

*   **pour PC**, téléchargez [pfthpc21.zip,](/pforth/pfthpc21.zip)  ~288K, inclu le projet Visual C++ et l'éxécutable. (DERNIERE VERSION) Note: une archive zip corrompue qui ne pouvait pas être décompactée avait accidentellement été mis en téléchargement le 17/09/98. Ce problème a été corrigé.
*   **pour Power Macintosh,** téléchargez [pfthmac19.sea.hqx](/pforth/pfthmac19.sea.hqx), ~456K, inclu le projet CodeWarrior et un éxécutable appelé pForthApp.
*   **pour UNIX,** téléchargez [pfthunix19.tar.Z](/pforth/pfthunix19.tar.Z), ~202K, inclu le makefile.

Si le téléchargement n'a a pas fonctionné, ou si pForth ne fonctionne pas, veuillez s'il vous plaît alerter [Phil Burk](/contacts/).

Phil Burk est disponible comme sous-traitant (voir page "[contractor "](/contractor/), en anglais) pour la création de classes pForth, pour le développement d'applications,  
ou afin de porter pForth sur de nouvelles plate-formes.

## Les versions récentes incluent

### V21 - 9/16/98

*   Correction de quelques messages d'alerte du compilateur.

### V20 - 8/98

*   Expand PAD for ConvertNumberToText so "-1 binary .s" doesn't crash. Thank you Michael Connor of Vancouver for reporting this bug.
*   Removed FDROP in REPRESENT to fix stack underflow after "0.0 F.". Thank you Jim Rosenow of Minnesota for reporting this bug.
*   Changed pfCharToLower to function to prevent macro expansion bugs under VXWORKS. Thank you Jim Rosenow of Minnesota for reporting this bug.
*   "0.0 F~" now checks actual binary encoding of floats. Before this it used to just compare value which was incorrect. Now "0.0 -0.0 0.0 F~" returns FALSE.
*   Fixed definition of INPUT$ in tutorial. Thank you Hampton Miller of California for reporting this bug.
*   Added support for producing a target dictionary with a different Endian-ness than the host CPU.  See PF\_BIG\_ENDIAN\_DIC and PF\_LITTLE\_ENDIAN\_DIC.
*   PForth kernel now comes up in a mode that uses BASE for numeric input when started with "-i" option.  It used to always consider numeric input as HEX. Initial BASE is decimal.

### V19 - 4/7/98

*    - Warn if local var name matches dictionary, : foo { count -- } ;
*    - TO -> and +-> now parse input stream. No longer use to-flag.
*    - TO -> and +-> now give error if used with non-immediate word.
*    - Added (FLITERAL) support to SEE.
*    - Aded TRACE facility for single step debugging of Forth words.
*    - Added stub for ?TERMINAL and KEY? for embedded systems.
*    - Added PF\_NO\_GLOBAL\_INIT for no reliance on global initialization.
*    - Added PF\_USER\_FLOAT for customization of FP support.
*    - Added floating point to string conversion words (F.) (FS.) (FE.)
*        For example:   : F.   (F.)  TYPE  SPACE  ;
*    - Reversed order that values are placed on return stack in 2>R
*      so that it matches ANS standard.  2>R is now same as SWAP >R >R
*      Thank you Leo Wong for reporting this bug.
*    - Added PF\_USER\_INIT and PF\_USER\_TERM for user definable init and term calls.
  
 - FIXED memory leak in pfDoForth()

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