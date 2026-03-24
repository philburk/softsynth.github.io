---
layout: base.njk
title: "JSyn - Pure Java Beta Home"
---

## Demonstrate Clicking Bug in Apple JavaSound

A continuous tone played using JavaSound on Macintosh will click or pop occasionally, every few seconds. The clicks do not occur on Windows. Also the clicks do not occur when using a ridiculously large output buffer.

Note that these clicks are unrelated to JSyn. There is no JSyn code in the test Applet.

*   [Listen to clicks with a 16KB buffer.](/jsyn/support_old/debug_clicks/playsine/?bufsize=16384)
*   [Listen to clicks with a 32KB buffer.](/jsyn/support_old/debug_clicks/playsine/?bufsize=32768)
*   [Listen to click free audio with a big 128 KB buffer](/jsyn/support_old/debug_clicks/playsine/?bufsize=131072).

The Java source code is available [here](/jsyn/support_old/debug_clicks/DebugAudioPops.java.txt).

A bug report, #8065290, was filed with Apple on 6/5/10.