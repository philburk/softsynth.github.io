if ( navigator.javaEnabled() )
{
//   alert("Trigger script says hello.\n");
   trigger = netscape.softupdate.Trigger;
//   document.write( "Trigger = " + trigger + "\n");
   if ( trigger.UpdateEnabled() )
   {
	  document.write("Platform = " + navigator.platform + "\n");
	  if( navigator.platform == "Win32" )
	  {
		  rslt = trigger.StartSoftwareUpdate (
		  	"http://www.softsynth.com/jsyn/plugins/jsynpcv13.jar",
		  	trigger.FORCE_MODE
		  	);
	  }
	  else
	  {
		  alert("Sorry - " + navigator.platform + " not supported!\n");
		  rslt = 0;
	  }
	  if (rslt) document.write("Installation started. Please wait for download......\n");
	  else document.write("Update failed.\n");
   }
   else
   {
	   document.write("Enable SmartUpdate before running this script.\n");
   }
}
else
{
	  document.write("Enable Java before running this script.\n");
}

