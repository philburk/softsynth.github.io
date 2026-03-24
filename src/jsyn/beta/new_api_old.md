---
layout: base.njk
title: "JSyn - Pure Java Beta Home"
eleventyNavigation:
  key: "/jsyn/beta/new_api_old.php"
  title: "NewPureJavaAPI"
  order: 3
  parent: "/jsyn/beta/index.php"
---

# JSyn Beta (Old)

This page was written when JSyn was converted from 'C' to pure Java back in 2010. We also updated the API. This code is no longer considered beta. This page is provided as a historical reference.

## What is Pure Java JSyn?

The original JSyn used a native 'C' code plugin for synthesis and audio I/O. This was necessary back in 1997 when JSyn began. Unfortunately, the native code plugin required a painful installation step when used in a browser. The native plugin is also difficult to maintain and has trouble running on Snow Leopard and Linux.

So we decided to replace the native code plugin with a pure Java synthesis engine. The Audio I/O is now done using JavaSound.

The disadvantages are that the synthesis runs slightly slower in Java than in native 'C' code. Also JavaSound has higher latency than the native code based on PortAudio. The advantages are that JSyn can now run on every platform that supports Java and JavaSound. It will also be much easier to add cool new features. And users do not have to install a plugin anymore.

Note: to hear the **Pure Java** JSyn you may need to uninstall your old native JSyn plugin. If you had installed it then you can uninstall it using the tool on this [page](/jsyn/plugins/uninstall_plugin/).

To check whether you are running the new version, look in the Java Console when you run the Applet. You should see "Pure Java JSyn".

*   [Download **Current Version** from the JSyn download page](/jsyn/developers/download/).

Release notes [here](/jsyn/beta/releases/).

Description of proposed [new JSyn API and How To Migrate is here](/jsyn/docs/migration/).

Please [notify me immediately](/contacts/) if you notice any difference between the old native and new pure Java JSyn. They should work the same.

This JSyn JAR is covered by the [same license as the Pure Java JSyn SDK](/jsyn/developers/jsyn_sdk_license.txt).

## Using Pure Java JSyn

Use the JAR file that you just downloaded in place of the old "jsyn.jar" from the SDK.

When the Pure Java JSyn is being used, you should see something like this in the Java Console. The version and date will change.

```text
---- Pure Java JSyn www.softsynth.com - rate = 44100, RT, V16.4 (build 423, 2011-05-01)
```

Note: If you have the JSyn plugin installed then you will need to uninstall it using the tool on this [page](/jsyn/plugins/uninstall_plugin/). Otherwise the JVM will use the plugin before using the new JAR file.

## Modifying &lt;APPLET&gt; Tags to Use Pure Java JSyn

You do not have to modify your JSyn Applet. You do not even have to recompile. You just modify your &lt;APPLET&gt; tag so that it will use the new Pure Java JSyn. Then your Applet will work for users that do not have the JSyn plugin. If a user has the old plugin then it will still work and will use the plugin.

1.  Place the new JSyn JAR file in your CODEBASE folder along with your APPLET classes. You can rename it to something like "jsyn\_pure.jar".
2.  Add the name of the JAR file to the ARCHIVE attribute.

For example:

```text
&lt;APPLET code="JSynExamples.TJ_Wind.class"            CODEBASE="../../classes"        ARCHIVE="jsyn_pure.jar"        name="TJ_Wind" WIDTH="491" HEIGHT="415"&gt;&lt;/APPLET&gt;
```

You can listen to some [Applets that use the new JSyn here.](/jsyn/examples)

## Testing Other Applets

Advanced Technique: If you install the Pure JSyn jar file in place of the old jsyn.jar then you can run any JSyn Applet on the web using the Pure Java JAR file. I do not recommend this for general use. But it is handy when testing lots of Applets.

### Thanks

Big thanks to Lisa Tolentino for converting many unit generators from 'C' to Java. Also thanks to Douglas Repetto, Nick Didkovsky, David Birchfield and John Clavin for testing.