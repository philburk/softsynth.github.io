---
layout: base.njk
title: "WebAudio Experiments - AudioWorklet Noise"
---

Start Sound Stop Sound <script>let audioContext; let oscillator; let gainWorkletNode; const startButton = document.getElementById('startButton'); const stopButton = document.getElementById('stopButton'); startButton.addEventListener('click', () => { if (!audioContext) { audioContext = new AudioContext(); audioContext.audioWorklet.addModule('custom_noise.js').then(() => { oscillator = new OscillatorNode(audioContext); gainWorkletNode = new AudioWorkletNode(audioContext, 'gain-processor'); oscillator.connect(gainWorkletNode).connect(audioContext.destination); oscillator.start(); // Start the oscillator after successful setup }); } else { audioContext.resume().then(() => { if (oscillator) { oscillator.connect(gainWorkletNode) } }); } }); stopButton.addEventListener('click', () => { if (audioContext && oscillator) { oscillator.disconnect(gainWorkletNode); } });</script>