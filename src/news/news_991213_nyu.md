---
layout: base.njk
title: "SoftSynth News from NYU"
---

# NYU Students Develop Interactive Computer Music Pieces using JSyn and JMSL

New York, NY, Dec. 13, 1999 - **Nick Didkovsky** reported on the final projects submitted by graduate students at New York University (NYU). The course was on Java Music Systems and focussed on [JSyn](/jsyn) and JMSL.

"My JSyn/JMSL class at NYU met for the last time today. Students showed their final projects. Brief summaries follow...

**James Forrest** wrote a Markov Chain utility class.  He used it and JMSL's MidiParser to implement a musical interaction where the performer's live Midi performance influences the pitch transition probabilities stored in the Markov tables. Over time, the piece changes from uniform probability of one pitch following any other, to the transition probabilities extracted from the performer's live playing. He implemented a voice allocator to allow for the performance of polyphonic JSyn voices.

**John Rice** built a computer keyboard instrument.  The user's performance of the computer keys is stored in JMSL MusicShapes.  Various unpredictable transformations are applied to the MusicShapes, which are voiced with JSyn instruments.  He implemented a timeout limit that determined the boundary between what is considered the end of one recorded MusicShape and the beginning of another.

**Alexander Bouchet** built a JSyn applet which uses a genetic fitness algorithm to guide the evolution of a population of FM instruments toward a target set of FM parameters. Parameters were: pitch, Fc:Fm ratio, and mod index.  The population evolves very quickly from even a completely random population to the target population,  creating a musical gesture sounding something like a swarm of sonic entities converging on a pitch/timbre attractor.

**Kristjan Varnik** built a JSyn sequencer running in the top half of a GUI. Faders can be assigned to pitch and/or amplitude of JSyn instruments.  The bottom half of the GUI was dedicated to networked performance. Based on my own TcpFMJammer, the application opens a socket connection between two IP addresses over a TCP/IP network.  He implemented a chat window and expects to implement realtime broadcast of fader movements. He also demonstrated a suite of alternative GUI controllers, dramatically outside the usual roster of awt buttons and sliders.  Included: a polar coordinate gadget where the user controls the radius and angle of a circular graphic object, a zooming interface that allows the user to jump deeper into and out of an abstract hierarchy, and a gadget which used an algorithm found in Clifford Pickover's "Keys to Infinity" to convert control information to inspiring spirograph-oid graphics.

**Joel Mellin**'s Music Ball Laboratory is as much an instrument as it is a framework specifying the behaviors of collisions between circular bodies and enclosing walls.  A CollisionListener interface is responsible for passing collision information from a virtual room to whatever class cares to sonify that event. The four walls of a given room reported this info to JSyn instruments.  Various instruments could be assigned to the various walls.  He used Swing extensively to build a beautiful GUI where the user can drag a ball from one frame (a sort of ball building factory) to another frame (the room). Releasing the ball sets it in motion. Ball size is correlated to amplitude as well as maximum velocity."

Nick Didkovsky, 12/13/99 9:11PM, NYC