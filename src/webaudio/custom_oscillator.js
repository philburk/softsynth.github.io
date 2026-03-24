
// Example showing how to produce a tone using Web Audio API.
var oscillator = 0;

// Variables used to control the oscillator
var phase = 0.0;
var kSampleRate = 44100.0;
var kBufferSize = 256; // must be power of 2 >= 256
var phaseIncrement = 2.0 * Math.PI * 440.0 / kSampleRate;
var kTwoPi = 2.0 * Math.PI;
var soundEnabled = false;

// Create a ScriptProcessorNode
function initAudio()
{
	// Use audioContext from webaudio_tools.js
	if( audioContext )
	{
		oscillator = audioContext.createScriptProcessor(kBufferSize, 1, 1);
		oscillator.onaudioprocess = 
				// This function will be called repeatedly to fill an audio buffer and
				// generate sound.
				function (e) {
					// Get array associated with the output port.
					var output = e.outputBuffer.getChannelData(0);
					var n = output.length;
				
					if( soundEnabled )
					{
						for (var i = 0; i < n; ++i)
						{
							// Generate a sine wave.
							var sample = Math.sin(phase);
							output[i] = sample * 0.6;
						  
							// Increment and wrap phase.
							phase += phaseIncrement;
							if (phase > kTwoPi)
							{
								phase -= kTwoPi;
							}
						}
					}
					else
					{
						// Output silence.
						for (var i = 0; i < n; ++i)
						{
							output[i] = 0.0;
						}
					}
				}
				
		oscillator.connect(audioContext.destination);
		writeMessageToID( "soundStatus", "<p>Audio initialized.</p>");
	}
}

// Change HTML in a DIV or other element for debugging
function writeMessageToID(id,message)
{
	// Voodoo for browser compatibility.
	d=document;
	re = d.all ? d.all[id] : d.getElementById(id);
	re.innerHTML=message;
}

// Enable a sound and update the frequency of the oscillator.
function startTone( frequency )
{
	baseFrequency = frequency;
	phaseIncrement = 2.0 * Math.PI * baseFrequency / kSampleRate;
	soundEnabled = true;
	writeMessageToID( "soundStatus", "<p>Start tone at frequency = "
	        + frequency + ", phaseIncrement = " + phaseIncrement + "</p>");
}

function stopTone()
{
	soundEnabled = false;
	writeMessageToID( "soundStatus", "<p>Stop tone.</p>");
}

// init once the page has finished loading.
window.onload = initAudio;
