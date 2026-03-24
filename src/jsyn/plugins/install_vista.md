---
layout: base.njk
---

     Install JSyn Plugin on Vista  &lt;!-- .style1 { font-family: "Courier New", Courier, monospace } --&gt; <script language="javascript">function JS_SetInnerHTML(id,message) { // Voodoo for browser compatibility. d=document; re=d.all?d.all[id]:d.getElementById(id); re.innerHTML=message; } function JS_ShowVersion( versionNumber ) { JS_SetInnerHTML('versionSpan1', versionNumber ); JS_SetInnerHTML('versionSpan2', versionNumber ); JS_SetInnerHTML('versionSpan3', versionNumber ); JS_SetInnerHTML('versionSpan4', versionNumber ); jreVersion = "5"; position = versionNumber.indexOf("1.6"); if( position == 0 ) { jreVersion = "6"; } else { position = versionNumber.indexOf("1.7"); if( position == 0 ) { jreVersion = "7"; } else { position = versionNumber.indexOf("1.8"); if( position == 0 ) { jreVersion = "8"; } } } JS_SetInnerHTML('versionSpan5', jreVersion ); JS_SetInnerHTML('versionSpan6', jreVersion ); JS_SetInnerHTML('versionSpan7', jreVersion ); JS_SetInnerHTML('versionSpan8', jreVersion ); }</script>

## Install JSyn Plugin on Windows Vista, Win7, or XP

Windows Vista has a much stronger security system than other versions of Windows. This prevents us from installing the JSyn plugin automatically. So, for Vista, this must be done by hand. Choose the short or long instructions depending on your experience. The end result is the same. Note that this will also work on Windows XP. If it works on Windows 7, please let us know.

### Short Instructions for Experts

1.  Please download "[JSynV144.dll](/jsyn/plugins/archives/JSynV144.dll)" to your disk.
2.  If you have the folder "C:\\Program Files\\Java\\jre###\\bin" then drag the DLL there. Otherwise drag it into the "C:\\Program Files\\Java\\jre###\\bin" folder.
3.  Download "[jsyn.jar](/jsyn/plugins/archives/jsyn.jar)" to your disk.
4.  If you have the folder "C:\\Program Files\\Java\\jre###\\lib\\ext" then drag the JAR file there. Otherwise drag it into the "C:\\Program Files\\Java\\jre###\\lib\\ext" folder.
5.  Restart the browser then try the JSyn examples.
6.  If this does not work then try the same thing using the Long Instructions below.

### OR Long Instructions for the Rest of Us

This does the same thing as the Short Instructions above but with more step-by-step help.

1.  You will need "Administrator" privilege to do this. If you have a home computer then you are probably OK. If you are sharing a computer at school then you may not have administrator privilege.  
    
2.  Download "[JSynV144.dll](/jsyn/plugins/archives/JSynV144.dll)" to the Desktop by right clicking on that link and selecting "Save Link As...".
3.  Click on "Desktop" on the left, then click on "Save" to save the file to your Desktop.
4.  Download "[jsyn.jar](/jsyn/plugins/archives/jsyn.jar)" to the Desktop by right clicking on that link and selecting "Save Link As...".
5.  Click on "Desktop" on the left, then click on "Save" to save the file to your Desktop.
6.  Click the Windows Start menu at the bottom left corner.
7.  Click on "Computer" on the right hand side of the menu.
8.  Double click on "C:\\" drive.
9.  Double click on "Program Files".
10.  Double click on "Java".
11.  Double click on "jre###" if you have it, or on "jre###".
12.  Double click on "bin".
13.  Drag and drop the "JSynV144.dll" file from your Desktop to the "bin" folder.
14.  You will see a series of security dialogs from Windows Vista warning you that you are placing a file in that folder. Just keep clicking "Continue" until it is done.
15.  Use the navigation tools to go up one folder above bin to the "jre###" if you have it, or to the "jre###" folder.
16.  Double click on "lib".
17.  Double click on "ext".
18.  Drag the "jsyn.jar" file to the "ext" folder. (Note: Windows Vista may be hiding the ".jar" file extension to protect you from knowing what type of file it is. So the file might look like it is just called "jsyn".)
19.  You will see a series of security dialog from Windows Vista warning you that you are placing a file in that folder. Just keep clicking "Continue" unitl it is done.
20.  Exit the browser completely by choosing Quit from the file menu or close all the browser windows then reopen the browser and try using JSyn.  
     

As far as we know, this procedure works. If the procedure does not work then please [send us an email here](/contacts/).

### Applet to Show Java Version