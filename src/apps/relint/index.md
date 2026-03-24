---
layout: base.njk
title: "Relative Intonation Editor"
eleventyNavigation:
  key: "/apps/relint/index.php"
  title: "RelativeIntonation"
  order: 2
  parent: "/apps/index.php"
---

# Relative Intonation Editor

Just Intonation is a system of tuning note frequencies based on whole number ratios. This can produce intervals that are very harmonious. But the ratios are generally relative to a single fundamental pitch. So if you tune a piano to just intonation then you are stuck in the key of that fundamental. Also some intervals in the key are a bit dissonant.

The invention of 12-tone equal temperament allowed musicians to easily change keys. But every key is a little bit "out of tune".

With computers and digital synthesizers it is possible to choose note frequencies that are relative to another note. This allows a musician or composer to create chords that always very harmonious. There does not have to be a single fundamental pitch. So the tuning can drift in a way that is more optimal. Vocal choirs and string quartets sometimes drift in this way.

I have created a new Relative Intonation Editor web app that allows composers to explore this new way of composing. The first version was written in Java back in 2014. It used JSyn as the synthesizer. But it could not run in a web page.

So I have recreated the app by showing Gemini a video of the original editor and then used Gemini Canvas to add new features.

### [Click Here for the Relative Intonation Editor web app.](/apps/relint/relint/)

## How to Create Relatively Tuned Notes

1.  Click on the grid near the left side to create a note in equal temperament. The number of the note is a MIDI pitch value where 60.00 is middle C.
2.  Click in the middle of that note and then drag away from that note. You will see the ratio of the new note relative to the old note in a popup window.
3.  Release the mouse button to drop the note.
4.  Hit the SPACE BAR to start or stop playback.

## How to Edit a Composition

*   Press the pencil icon or hit the 'A' key for Actions.
*   Click at the left edge of a note to move the note.
*   Click at the right edge of a note to change its duration.
*   Hit the 'E' key for Eighth notes or use the "Dur:" menu to set the duration for new notes.

*   Hit the 'V' key for Selection mode so you can drag select notes. Then Cut Copy and Paste.
*   Hit the 'C' key for chaining notes. You can change the note relationships or relink notes after a Paste operation.
*   Explore and have fun. Hit '?' for a popup Help window.