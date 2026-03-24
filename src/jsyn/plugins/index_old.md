---
layout: base.njk
---

     Check JSyn Plugin  

## JSyn Plugin (V144)

This Java Applet will test whether your computer can support the JSyn plugin.

**Please note that this plugin is now considered obsolete. We have released a [beta version of a Pure Java JSyn](/jsyn/beta) that does not require a plugin. Developers can put the beta JSyn JAR file on their website. Then users will not need this plugin to run the JSyn Applets.**

0 ) { if( (substr\_count( $user\_agent, "OS X 10.6" ) > 0) || (substr\_count( $user\_agent, "OS X 10\_6" ) > 0) ) { ?>

Snow Leopard requires 64 bit libraries. So this JSyn plugin will not work. We will probably not release a 64-bit native version JSyn. Instead we are focussing on the Pure Java JSyn described above.

This Applet will check for the existence of a required Java Extensions folder and create one if it is missing.

**Please click "Yes" or "OK" or "Grant" or "Trust" when asked.**

You do not seem to have Java installed. Please visit the "www.java.com" website. 0 ) { ?>

**(Sorry: Linux is not currently supported.)**

You do not seem to have Java installed. Please visit the "www.java.com" website.

If you have **Windows Vista** please [click here](/jsyn/plugins/install_vista/) for instructions on installing JSyn **by hand**.

Or if the box above stays blank, or has a little red X in the corner, or you see instructions to install Java then please visit [www.java.com.](http://www.java.com/) After installing Java then refresh this page.

Click here to [UNINSTALL the JSyn plugin](/jsyn/plugins/uninstall_plugin/).

HTTP\_USER\_AGENT = " . $user\_agent . "

\\n"; ?>