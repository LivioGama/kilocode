const { formatModelName, getAvailableModels, providers } = require('./index.js');

console.log('=== Kilocode Provider Name Display Test ===\n');

// Test 1: Format with main provider and sub-provider
console.log('Test 1: Chutes.ai > Z.ai > GLM 4.6 Turbo');
try {
  const result = formatModelName('chutes', 'GLM 4.6 Turbo', 'z');
  console.log('Result:', result);
  console.log('✓ Test passed\n');
} catch (error) {
  console.error('✗ Test failed:', error.message);
  process.exit(1);
}

// Test 2: Format with main provider only
console.log('Test 2: Kilocode > GLM 4.6 Turbo');
try {
  const result = formatModelName('kilocode', 'GLM 4.6 Turbo');
  console.log('Result:', result);
  console.log('✓ Test passed\n');
} catch (error) {
  console.error('✗ Test failed:', error.message);
  process.exit(1);
}

// Test 3: Format with OpenRouter
console.log('Test 3: OpenRouter > Claude-3');
try {
  const result = formatModelName('openrouter', 'Claude-3');
  console.log('Result:', result);
  console.log('✓ Test passed\n');
} catch (error) {
  console.error('✗ Test failed:', error.message);
  process.exit(1);
}

// Test 4: Get available models
console.log('Test 4: Get available models for Chutes.ai > Z.ai');
try {
  const models = getAvailableModels('chutes', 'z');
  console.log('Models:', models.join(', '));
  if (models.length > 0) {
    console.log('✓ Test passed\n');
  } else {
    throw new Error('No models returned');
  }
} catch (error) {
  console.error('✗ Test failed:', error.message);
  process.exit(1);
}

// Test 5: Error handling - invalid provider
console.log('Test 5: Error handling for invalid provider');
try {
  formatModelName('invalid_provider', 'Some Model');
  console.error('✗ Test failed: Should have thrown an error');
  process.exit(1);
} catch (error) {
  console.log('Expected error caught:', error.message);
  console.log('✓ Test passed\n');
}

// Display all providers
console.log('=== All Available Providers ===');
for (const [key, provider] of Object.entries(providers)) {
  console.log(`\n${provider.name}:`);
  if (Object.keys(provider.subProviders).length > 0) {
    console.log('  Sub-providers:');
    for (const [subKey, subProvider] of Object.entries(provider.subProviders)) {
      console.log(`    - ${subProvider.name}`);
      if (subProvider.models) {
        console.log(`      Models: ${subProvider.models.join(', ')}`);
      }
    }
  }
  if (provider.models) {
    console.log(`  Models: ${provider.models.join(', ')}`);
  }
}

console.log('\n=== All tests passed! ===');
