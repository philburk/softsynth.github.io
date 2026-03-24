// Decide whether to use JSyn Plugin for Navigator.
// Author: Phil Burk 1999
if( navigator.appName == "Netscape" )
{
// If we are running a Netscape browser then we should use the Netscape Plugin.
// Has the plugin been installed?
// Check for name that we used on both Mac and PC.
	var jsynPcPlugin = navigator.plugins["SoftSynth JSyn"];
	var jsynMacPlugin = navigator.plugins["npJSyn"];
	if( (jsynMacPlugin == undefined) && (jsynPcPlugin == undefined))
	{
		document.writeln("<p><b>ERROR:</b> The JSyn plugin could not be found!");
		document.writeln("You can download the free JSyn plugin from ");
		document.writeln('<A HREF="http://www.softsynth.com/jsyn/plugins">here</A>.<P>');
	}
	else
	{
	// check property on global navigator object to see if plugin window already open
	// If open, don't open it again because NEtscape may hang if
	// the garbage collector is running, or if threads call the plugin
	// while we are EMBEDding plugin.
		jsynPluginWindow = navigator.jsynPluginWindow;
		if (jsynPluginWindow)
		{
			document.writeln("Using already open JSyn Plugin Window.<P>");
		}
		else
		{
	// not open so we had better open it now
			navigator.jsynPluginWindow = window.open("embed_jsyn_plugin.html",
				"SharedJSynWindow",
				"toolbar=no,resizable=yes,scrollbars=yes,height=240,width=520");
			document.writeln("Opened Plugin Window for JSyn.<P>");
		}
	}
}
else
{
// For Internet Explorer, don't try to EMBED the Netscape Plugin for IE because IE may crash.
	document.writeln("This non-Netscape browser requires JSyn to run this Applet. ");
	document.writeln("If the Applet does not load correctly, then download JSyn from ");
	document.writeln('<A HREF="http://www.softsynth.com/jsyn/plugins">here</A>.<P>');
}
