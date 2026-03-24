// JavaScript Document
var console = document.getElementById('console')

function log(s) {
  console.textContent += '\n' + s;
}

log('This is the MIDI Log Console.');

function logPort(port) {
	log('----------------- id = ' + port.id);
	log('    manufacturer = ' + port.manufacturer);
	log('    name = ' + port.name);
	log('    version = ' + port.version);
}

function gotMIDI(access) {
    log('inputs.size = ' + access.inputs.size);
	for (var input of access.inputs.values()) {
        logPort(input);
    }
    log('outputs.size = ' + access.outputs.size);
    for (var output of access.outputs.values()) {
        logPort(output);
    }
    access.onstatechange = function(e) {
        log('e = ' + e);
        log('e.port = ' + e.port);
        log('inputs.size = ' + access.inputs.size);
        log('outputs.size = ' + access.outputs.size);
    };
}

function notGotMIDI(e) {
	log('rejected: ' + e);
}

try {
	navigator.requestMIDIAccess().then(gotMIDI).catch(notGotMIDI);
} catch (e) {
    log('exception: ' + e);
}

