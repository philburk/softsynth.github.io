---
layout: base.njk
---

# FMLab

This applet uses  [JSyn](/jsyn/) from [SoftSynth.com](/).

## FM is Frequency Modulation

This editor uses FM to create a variety of sounds. Each row has a sine wave oscillator.

#### To Do

*   Wait for separate editor window to appear.
*   (Note: an apparent bug in Netscape cause the editor window that pops up to be too wide and too short. If using Netscape, you may need to resize the editor to be taller and less wide.)
*   Select instruments from the menu such as "Bell" or "Clarinet". Click the "Play Keys" button. Play the ASCII keyboard to hear notes. (Note: a Java bug in **Macintosh** Java prevents one from holding down a note to sustain it. Use the "NoteOn" check box instead.)
*   Select "Simple" instrument. Uncheck box labelled '1' to hear carrier with no modulation. Check it again to turn on modulation.
*   Change the "index" in the second row to increase or decreas the amount of modulation.
*   Change the "freqMult" in the second to change the frequency ratio. Try typing in a new value and hit ENTER.

#### How To

*   "**Hear**" - check this to hear the output of an oscillator.
*   "1,2,3,4" - check one of these to request modulation by another oscillator.
*   "**Sust**" - check this to cause the envelope to stick on the second point and sustain its level.
*   "**Fixed**" - check this to use a **fixed frequency** for an oscillator. Otherwise the frequency will be determined by playing keys on the ASCII keyboard.
*   EnvelopeEditor - move points, or add new points to shape an oscillator's amplitude. Shift click a point to remove it.
*   "**frequency**" - set frequency of oscillator in Hz. ("FixedFreq" must be checked)
*   "**freqMult**" - scale the frequency from the keyboard by this amount. ("FixedFreq" must be UNchecked) Controls the "carrier:modulator ratio".
*   "**depth**" - to scale the amount of modulation input. Normally set to 1.0.
*   "**index**" - amount of modulation is "index \* modulatorFrequency"
*   "**amplitude(DB)**" - controls loudness in decibels.

#### Instrument Notes

*   **Bell** - Op#0 modulated by Op#1. Envelopes decay rapidly like a bell. FreqMult set to "1.4" which gives complex enharmonic spectrum.
*   **Brass** - Uses "sustain" to hold note while key pressed. Vibrato provided by Op#2 has delayed start because of envelope rising late. Vibrato frequency set to fixed low value by checking "Fixed" box. Vibrato frequency does not change with key pressed.
*   **Trumpet** - You can hear output of Ops 1,2 and 3. Ops 2 and 3 provide slightly detuned harmonics. Vibrato from Op#3.
*   **Woozy** - slowly rising modulation envelope provides "wah" like sound.

<applet
	code="com.softsynth.jsyn.examples.FMLab.class"
	codebase="../../classes"
	archive="jsyn-examples.jar"
    name="FMLab"
    WIDTH="554" HEIGHT="89">
Wait for CheerpJ to run the applet.
</applet>

<script>  cheerpjInit(); </script>
