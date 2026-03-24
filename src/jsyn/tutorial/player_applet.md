---
layout: base.njk
title: "JSyn Tutorial"
---

The JSynPlayer is just a precompiled JSyn Applet that you can use on your web site. You can send commands to the Applet using JavaScript. You can tell it to load JSyn sounds and play them. These commands are typically just a line or two of JavaScript and can be integrated with HTML FORMS and other tags.

JSynPlayer uses LiveConnect to communicate between JavaScript and Java.

1.  Download the JSynPlayer from here and unpack the archive.
2.  Use your browser to view the "test\_jsyn\_player.html" file in the folder "ForYourWebSite".
3.  Place the contents of the folder "ForYourWebSite" in a folder on your website.
4.  Make a copy of the "test\_jsyn\_player.html" file and modify it to suit your needs. Or add the following text to your own HTML file. Then place the file in the same folder on your web site as the other files from above.

Copy and Paste this into any HTML file that will use the JSynPlayer: &lt;!-- Launch the JSynPlayer and give it a name to call from JavaScript --&gt; &lt;APPLET CODE="com.softsynth.jsyn.player.JSynPlayer.class" NAME="JSynPlayer" WIDTH="300" HEIGHT="100"&gt; &lt;/APPLET&gt;

For more information about using JSyn Applets, click [here](/jsyn/tutorial/applet_html/).