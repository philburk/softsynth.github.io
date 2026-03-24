// Example showing how to produce a tone using Web Audio API.
// Load the file webaudio_tools.js before loading this file.
var jsProcessor = 0;

// Variables used to control the tone generator.
var phase = 0.0;
var baseFrequency = 440.0;
var kSampleRate = 44100.0;
var kBufferSIze = 1024; // must be power of 2
var phaseIncrement = 2.0 * Math.PI * baseFrequency / kSampleRate;
var kTwoPi = 2.0 * Math.PI;
var soundEnabled = false;
var gainNode;

// Create a JavaScriptNode and a gainNode.
function initAudio()
{
	// Use audioContext from webaudio_tools.js
	if (audioContext)
	{
		// This AudioNode will generate a tone.
		// Node has zero inputs and one output.
		jsProcessor = audioContext.createScriptProcessor(kBufferSIze, 0, 1);
		jsProcessor.onaudioprocess = process;
		
		gainNode = audioContext.createGain();
	
		// Connect our process to the mixer of the audioContext.
		jsProcessor.connect(gainNode);
		gainNode.connect(audioContext.destination);
		gainNode.gain.value = 0.0;
	}
}

// This function will be called repeatedly to fill an audio buffer and
// generate sound. WebAudio now has built in oscillators so there are
// easier ways to generate a sine wave. But this shows you how to make
// custom waveforms.
function process(event)
{
	// Get array associated with the output port.
    var outputArray = event.outputBuffer.getChannelData(0);
    var n = outputArray.length;

	for (var i = 0; i < n; ++i)
	{
		// Generate a sine wave.
		var sample = Math.sin(phase);
		outputArray[i] = sample * 0.6;
	  
		// Increment and wrap phase.
		phase += phaseIncrement;
		if (phase > kTwoPi)
		{
			phase -= kTwoPi;
		}
	}
}

// Experiment with various ways of applying an envelope.
function startTone( mode )
{
	var now = audioContext.currentTime;
	gainNode.gain.cancelScheduledValues( now );
	
	// Anchor beginning of ramp at current value.
	gainNode.gain.setValueAtTime(gainNode.gain.value, now);
	if( mode == 1 )
	{
		// Ramp slowly up with a 1 second duration.
		gainNode.gain.linearRampToValueAtTime(1.0, now + 1.0);
	}
	else if( mode == 2 )
	{
		// Ramp up and down.
		gainNode.gain.linearRampToValueAtTime(1.0, now + 0.5);
		gainNode.gain.linearRampToValueAtTime(0.0, now + 1.0);
		gainNode.gain.linearRampToValueAtTime(1.0, now + 1.5);
		gainNode.gain.linearRampToValueAtTime(0.0, now + 2.0);
		gainNode.gain.linearRampToValueAtTime(1.0, now + 2.5);
	}
	else if( mode == 3 )
	{
		// Ramp quickly up.
		gainNode.gain.linearRampToValueAtTime(1.0, now + 0.1);
		// Then decay down to a sustain level.
		gainNode.gain.exponentialRampToValueAtTime(0.2, now + 0.3);
	}
	else if( mode == 4 )
	{
		gainNode.gain.setTargetValueAtTime(1.0, now, 0.2 );
	}
}

function stopTone( mode )
{
	var now = audioContext.currentTime;
	gainNode.gain.cancelScheduledValues( now );
	// Anchor beginning of ramp at current value.
	gainNode.gain.setValueAtTime(gainNode.gain.value, now);
	if( mode == 1 )
	{
		// Ramp down.
		gainNode.gain.linearRampToValueAtTime(0.0, now + 0.5);
	}
	else if( mode == 2 )
	{
		gainNode.gain.linearRampToValueAtTime(0.0, now + 0.5);
	}
	else if( mode == 3 )
	{
		// Third value controls how slow the value decays.
		gainNode.gain.setTargetAtTime(0.0, now, 0.7);
	}
	else if( mode == 4 )
	{
		gainNode.gain.setTargetAtTime(0.0, now, 0.7);
	}
}

// init once the page has finished loading.
window.onload = initAudio;
