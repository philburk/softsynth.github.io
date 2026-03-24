---
layout: base.njk
title: "JSyn Support for Browsers"
---

# JSyn Support

## Java Applets in Chrome

Google [announced](http://blog.chromium.org/2014/11/the-final-countdown-for-npapi.html) that it is removing support for Java from the Chrome browser. Unfortunately a handful of miscreants have exploited the Netscape Plugin API (NPAPI) used by Java and several other plugins. So Google is dropping support for NPAPI to improve security. Other browsers may follow suit.

NPAPI was partially disabled in version 42, which was released in early 2015. You **can enable Java in Chrome V42** by following the instructions in the middle of [Oracle's page about Java in Chrome](https://java.com/en/download/faq/chrome.xml).

By the end of 2015 Java support may be removed entirely. We still recommend using Chrome for most web browsing. But to run Java Applets in a browser you may need to use another browser, eg. Safari or Firefox.

Additional Resources

*   "[NPAPI deprecation: developer guide](http://www.chromium.org/developers/npapi-deprecation)" from Google
*   "[Saying Goodbye to Our Old Friend NPAPI](http://blog.chromium.org/2013/09/saying-goodbye-to-our-old-friend-npapi.html)" from Chromium Blog, September 23, 2013
*   "[Chrome version 42 will pour your Java coffee down the drain](http://www.theregister.co.uk/2015/04/14/google_java_chrome_42/)" from register.co.uk, April 14, 2015
*   "[Google Chrome will block all NPAPI plugins](http://venturebeat.com/2014/11/24/google-chrome-will-block-all-netscape-plugin-api-plugins-in-january-drop-support-completely-in-september/)" from VentureBeat.com. November 24, 2014