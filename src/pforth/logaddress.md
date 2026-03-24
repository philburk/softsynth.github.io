---
layout: base.njk
---

# Please hit the Back button
and enter a valid e-mail address!

"); } else { fwrite( $fp, $letter ); fclose( $fp ); } // Send email to host. $targetName = "nospam@softsynth.com"; mail( $targetName, "pForth request log", "$letter" ); } include("download.php"); ?>