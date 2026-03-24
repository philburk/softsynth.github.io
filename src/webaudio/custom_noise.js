
class NoiseGenerator extends AudioWorkletProcessor {

  // Custom AudioParams can be defined with this static getter.
  static get parameterDescriptors() {
    return [{ name: 'amplitude', defaultValue: 1 }];
  }

  constructor() {
    // The super constructor call is required.
    super();
  }

  process(inputs, outputs, parameters) {
    const output = outputs[0];
    const amplitude = parameters.amplitude;
    for (let channel = 0; channel < output.length; ++channel) {
      const outputChannel = output[channel];
      if (amplitude.length === 1) {
        for (let i = 0; i < outputChannel.length; ++i)
          outputChannel[i] = ((Math.random() * 2.0) - 1.0) * amplitude[0];
      } else {
        for (let i = 0; i < outputChannel.length; ++i)
          outputChannel[i] = ((Math.random() * 2.0) - 1.0) * amplitude[i];
      }
    }

    return true;
  }
}

registerProcessor('noise-generator', NoiseGenerator);


