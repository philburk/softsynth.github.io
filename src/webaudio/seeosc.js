// Example showing how to produce a tone using Web Audio API.
// Load the file webaudio_tools.js before loading this file.
// This code will write to a DIV with an id="soundStatus".
var oscillator;
var amp;
var visualizer

// Setup some audio nodes and a visualizer.
function initAudio()
{
	// Use audioContext from webaudio_tools.js
	if( audioContext )
	{
		oscillator = audioContext.createOscillator();
		fixOscillator(oscillator);
		oscillator.frequency.value = 440;
		
		amp = audioContext.createGain();
		amp.gain.value = 0.8;
	
		// Connect oscillator to amp and the amp to the mixer of the audioContext.
		// This is like connecting cables between jacks on a modular synth.
		oscillator.connect(amp);
		
		amp.connect(audioContext.destination);
		oscillator.start(0);
		
		writeMessageToID( "soundStatus", "<p>Audio initialized.</p>");
		
		visualizer = new AudioVisualizer(512, 400);
		amp.connect(visualizer.analyser);
		visualizer.startAnimation();
	}
}

function setOscillatorType(oscType)
{
	oscillator.type = oscType;
}

function updatePitch(sliderValue)
{
	oscillator.detune.value = ((sliderValue - 50) * 24);
}

// Start and stop the sound when moving between tabs of the browser.
document.addEventListener('webkitvisibilitychange', function()
	{
		if (document.webkitHidden) {
			oscillator.stop(0);
		} else {
			initAudio();
		}
	} );

// init once the page has finished loading.
window.onload = initAudio;
