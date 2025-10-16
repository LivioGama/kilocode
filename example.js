const { formatModelName } = require('./index.js');

// Example 1: Using Chutes.ai with Z.ai sub-provider
console.log('Example 1: Chutes.ai chain');
console.log(formatModelName('chutes', 'GLM 4.6 Turbo', 'z'));
console.log('');

// Example 2: Using Kilocode directly
console.log('Example 2: Kilocode direct');
console.log(formatModelName('kilocode', 'GLM 4.6 Turbo'));
console.log('');

// Example 3: Using OpenRouter
console.log('Example 3: OpenRouter');
console.log(formatModelName('openrouter', 'GPT-4'));
console.log('');

// Example 4: Different models from the same provider
console.log('Example 4: Multiple models from Chutes.ai > Z.ai');
const models = ['GLM 4.6 Turbo', 'GLM 4.5', 'GLM 4'];
models.forEach(model => {
  console.log(formatModelName('chutes', model, 'z'));
});
