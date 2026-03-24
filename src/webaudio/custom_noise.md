---
layout: base.njk
title: "WebAudio Experiments - AudioWorklet Noise"
---

Use an AudioWorklet to generate a custom sound using JavaScript.

The AudioContext must be started by a user gesture so use some buttons.

Start Sound Stop Sound <script>let audioContext; let noiseWorkletNode; const startButton = document.getElementById('startButton'); const stopButton = document.getElementById('stopButton'); startButton.addEventListener('click', () => { if (!audioContext) { audioContext = new AudioContext(); audioContext.audioWorklet.addModule('custom_noise.js').then(() => { noiseWorkletNode = new AudioWorkletNode(audioContext, 'noise-generator'); noiseWorkletNode.connect(audioContext.destination); }); } else { audioContext.resume().then(() => { if (noiseWorkletNode) { noiseWorkletNode.connect(audioContext.destination) } }); } }); stopButton.addEventListener('click', () => { if (audioContext && noiseWorkletNode) { // You cannot restart a node so just disconnect when you want to silence it. noiseWorkletNode.disconnect(audioContext.destination); } });</script>

Here is the source code for the NoiseGenerator.