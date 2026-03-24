---
layout: base.njk
title: "JSyn - History"
eleventyNavigation:
  key: "/jsyn/press/jsyn_history.php"
  title: "History"
  order: 2
  parent: "/jsyn/press/index.php"
---

# History of [JSyn](/jsyn/)

by Phil Burk
July, 20, 2001

This history was written in request to an inquiry on the [JSyn mail list.](http://groups.yahoo.com/group/jsyn/)
From: "Ronald Edward Petty"
\> How did jsyn come around...?

Well, since you asked...

It might have started when I was a kid and my grandfather showed me how a doorbell worked. I really liked the idea of pushing a button in one place and making sound come out somewhere else. I experimented a bit with electronics when I was a kid but I didn't get turned on to electronic music until 1975 when I started listening to Tomita, Carlos and Subotnick. I wanted to be able to create those other-worldly sound scapes, but I could not afford to buy a synthesizer. Instead I found some books at Radio Shack that convinced me I could build one. So I started building analog synthesis modules into a Roots shoe box. It had 2 VCOs, a Sample/Hold, and a bunch of springs that I could stick wires in to make patches. I used to jam with my friend Todd Telford who had some pedal effects and a three headed cassette recorder that could make echoes.

Then my brother Jim suggested that I get a microprocessor so that I could control the sounds easier. I bought a Z80computer kit with 1 Kilobyte of RAM, a hex keypad, and 6 digit LED display. I built that up into a video based system with a custom editor and assembler. I used it to control a home-made digital waveform oscillator.  I play guitar so I hooked up a Schmidt Trigger to the Z80 Counter Timer Chip (CTC) and made a guitar pitch detector. Then I could play a guitar song into the Z80 and play it back using the digital oscillator.

Around 1982, I met Larry Polansky and David Rosenboom at the Mills College Center for Contemporary Music. They had a 68000 computer running Forth hooked up to a Buchla MARF, and a Serge analog system. Larry and I would hack late at night learning Forth. They gave me a key to the studio so I could write Forth code. In exchange I would leave them a note telling them how to use the code. In 1985, they hired me to develop the Hierarchical Music Specification Language (HMSL). It was a Forth API for experimental music based on their compositional ideas. I added an object-oriented layer called ODE, and eventually wrote a custom Forth for the Macintosh just for HMSL. HMSL had a windowing GUI toolbox that allowed you to write source code that could compile and run on either the Amiga or the Macintosh. So I was already heading in the cross platform direction of Java.

Robert Marsanyi, who was a student at Mills at the time, became a very active HMSL compose. He ran an FIDO-net bulletin board for HMSL out of his closet. Robert got a grant from Apple to develop a graphical patching system for music. (That eventually morphed into Wire for HMSL, and was the inspiration for JSyn's Wire.) While giving a talk on HMSL in New York, I met Nick Didkovsky. He also became a very active HMSL composer, and spent a one week vacation camping on Robert's floor in San Francisco, and then my floor in San Rafael so he could hack HMSL and JForth. On a later trip to California, he wrote a networked piece for four Amigas based on a Lottery that determined who could control the timbre.

Around 1990, I added a set of tools to HMSL for controlling unit generators on a 56000 DSP. The Amiga was too slow to do synthesis at 8 MHz, so we needed a screaming 33 MHz 56000. This package had oscillators, filters, multiple breakpoint envelopes and other familiar units that could be connected together from high level Forth.

In 1992, I got a call from RJ Mical, one of the original Amiga developers. He was building a new video game console that included a 3D graphics engine, a CD drive, and most importantly a DSP dedicated to audio. But they didn't know what to do with the DSP so I hired on as their audio guy. The console shipped as the 3DO Game Machine and was sold by Panasonic, Samsung, Goldstar, and others. It was the first game console to use DSP based software synthesis for its audio. It also had lots of DMA channels for streaming samples. 3DO eventually spun us systems folks off as Cagent, where we developed a really killer game chip with a custom RISC DSP. But, alas, it went the way of many startups. The technology was cool but the market was too small. (Note the recurring theme here.)

In my final days at 3DO, I got a call from SUN asking me to advise them on their upcoming JavaSound API. So I sketched out an API that I thought would be general purpose and useful. I got permission from 3DO to reveal the API publicly and showed it to SUN. But at that point they had already licensed the Beatnik sound engine.

Since SUN didn't jump on my API, I decided to write it myself at home. The first 'C' engine ran on Mac, and was then ported to the PC. I added a Java Native Interface (JNI) and released it as JSyn in early 1997. Since then, it has undergone a steady evolution - adding more unit generators, more browser plugins, and eventually adding Wire.

One of the main motivations for writing JSyn was so that computer musicians could reach their audience better. Often, in a computer music concert, the musician is having a great time on stage pushing buttons and twiddling faders, but the audience just hears a bunch of odd beeps and bloops with no context. I thought the audience would have much more fun, and understand the piece better, if they got to push the buttons themselves. By using Java as the base language, composers (that means you) can write interactive JSyn pieces that are cross-platform, and can live in a web page.

This feature is not without cost. Probably at least half my development time has been spent dealing with issues involving the Java to 'C' interface in web browsers. JNI does not work in a browser, so I have to write plugins. There are seemingly endless variations in the way Internet Explorer treats Java, and Netscape has recently changed their plugin interface. Luckily the MRJ system on the Mac has been consistently easy to access from the browser.

Future plans for JSyn involve making a port that runs on 100% Java using JavaSound to stream audio. Then browsers that support JavaSound will not need plugins. I also plan to extend Wire with composition level modules. I am also working with Nick on JMSL which is a successor to HMSL. We plan to integrate Wire more closely with his JScore to build an interactive compositional environment.

Update 11/24/10

There is now a [pure Java version of JSyn](/jsyn/beta). The plugin is no longer required for browsers.