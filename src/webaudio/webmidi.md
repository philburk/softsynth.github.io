---
layout: base.njk
title: "WebMIDI Experiments - Overview"
---

# WebMIDI Overview

WebMIDI is a new standard that allows you to connect MIDI devices to JavaScript in a web page. You can use it to:

*   play online synthesizers
*   use online instrument editors
*   use MIDI controllers to interact with web based games or other apps

## How To Enable WebMIDI

WebMIDI is not yet available in all browsers. As of 5/8/15, it is only available in Chrome. If you have Chrome V43 then it is enabled by default. In earlier versions of Chrome you will have to enable it as follows:

1.  Open a new tab in Chrome.
2.  Copy this text: `chrome://flags/#enable-web-midi`
3.  Paste that text into the Chrome address bar.
4.  Select "Enable" link under the "Enable Web MIDI API" item.
5.  Plug in a MIDI keyboard using USB.
6.  Restart the Chrome browser.

You can test WebMIDI on [this page](/webaudio/midi_devices/).