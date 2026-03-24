---
layout: base.njk
---

Test Vowel Consonant Ration Analysis

## Experiment with Spam Detection

\= 'A') && ($c &lt;= 'Z') ) { $numUpper += 1; echo "EMailHandler\_MeasureCamelcaseRatio: detected " . $c . "
\\n"; } else if( $c == ' ' ) { $afterLower = false; } } else { if( ($c &gt;= 'a') && ($c &lt;= 'z') ) { $afterLower = true; } } } return (1.0 \* $numUpper) / $numChars; } function EMailHandler\_MeasureVowelRatio( $text ) { $numChars = strlen($text); if( $numChars == 0 ) return 1.0; $vowels = ' aeiouyAEIOUY'; // include a space as well $char\_counts = count\_chars( $text, 0 ); $vowelsLength = strlen($vowels); $numVowels = 0; for( $i=0; $i<$vowelsLength; $i++ ) { $num = $char\_counts\[ ord( $vowels\[$i\] ) \]; $numVowels += $num; } return (1.0 \* $numVowels) / $numChars; } function TestString( $text ) { echo "

* * *

### $text

\\n"; $ratio = EMailHandler\_MeasureVowelRatio( $text ); $caps = EMailHandler\_MeasureCamelcaseRatio( $text ); if( (strlen($text) &gt; 4) && (($ratio &lt; 0.2 ) || (($caps &gt; 0.1) && ($caps &lt; 0.9))) ) { echo "

\[EZSPAM\]

"; } echo "

\[vcr = $ratio, caps = $caps\]

"; } TestString('JnCLalwhjoFNLscNsCNsduxcn'); TestString(''); TestString("John ran a Marathon aNd liked it."); TestString("NQkkbobMqvN"); TestString("Tension in the Spanish Sky"); TestString("HTML is BIG in Spain but not in pForth or pIG LaTiN."); TestString("HTML"); TestString("dARDiKyviEMfLYaRQG"); ?&gt;