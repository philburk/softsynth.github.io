---
layout: base.njk
---

"; echo "check msg = " . (eregi( "^\\s\*\[\_\\.0-9a-z-\]+@(\[0-9a-z\]\[0-9a-z-\]+\\.)+\[a-z\]{2,3}\\s\*$", $msg ) ? "yes" : "no") . "
"; function TestExpression( $regex, $text ) { $trimmed = trim( $text ); echo "check $text against $regex => " . (eregi( $regex, $trimmed ) ? "yes" : "no") . "
"; } TestExpression( "^\\s\*\[a-z\]+$", "\\nhello" ); TestExpression( "\\s\*^\[a-z\]+$", "\\nhello" ); TestExpression( "\\s\*\[a-z\]+$", "\\nhello" ); TestExpression( "\\s\*\[\_\\.0-9a-z-\]+@(\[0-9a-z\]\[0-9a-z-\]+\\.)+\[a-z\]{2,3}\\s\*", "\\nphil@impeachbush.tv\\n" ); TestExpression( "\\s\*\[\_\\.0-9a-z-\]+@(\[0-9a-z\]\[0-9a-z-\]+\\.)+\[a-z\]{2,3}\\s\*", "\\nphil@impeachbush.tv\\nwassup\\n" ); TestExpression( "\\s\*\[\_\\.0-9a-z-\]+@(\[0-9a-z\]\[0-9a-z-\]+\\.)+\[a-z\]{2,3}\\s\*", "\\nwassup\\nphil@impeachbush.tv\\n" ); TestExpression( $g\_EmailAddressRegularExpression, "\\nphil@impeachbush.tv\\n" ); TestExpression( $g\_EmailAddressRegularExpression, "\\nphil@impeachbush.tv\\nwassup\\n" ); TestExpression( $g\_EmailAddressRegularExpression, "\\nwassup\\nphil@impeachbush.tv\\n" ); ?>