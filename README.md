# Kilocode

AI model provider and model name display tool that shows the complete provider hierarchy for AI models.

## Overview

Kilocode helps identify which provider is serving an AI model by displaying the full provider chain. This is important for:
- Understanding pricing differences between providers
- Tracking which intermediary services are being used
- Making informed decisions about model selection

## Usage

```javascript
const { formatModelName, getAvailableModels } = require('./index.js');

// Format a model name with full provider hierarchy
console.log(formatModelName('chutes', 'GLM 4.6 Turbo', 'z'));
// Output: Chutes.ai > Z.ai > GLM 4.6 Turbo

console.log(formatModelName('kilocode', 'GLM 4.6 Turbo'));
// Output: Kilocode > GLM 4.6 Turbo

console.log(formatModelName('openrouter', 'Claude-3'));
// Output: OpenRouter > Claude-3

// Get available models for a provider
const models = getAvailableModels('chutes', 'z');
console.log(models);
// Output: ['GLM 4.6 Turbo', 'GLM 4.5', 'GLM 4']
```

## Provider Hierarchy

The format follows this pattern:
```
Main Provider > Sub-Provider (optional) > Model Name
```

### Supported Providers

- **Chutes.ai**: Includes sub-provider Z.ai
- **Kilocode**: Direct provider
- **OpenRouter**: Direct provider

## API

### `formatModelName(provider, model, subProvider)`

Formats a model name with its full provider hierarchy.

**Parameters:**
- `provider` (string): The main provider name (e.g., 'chutes', 'kilocode', 'openrouter')
- `model` (string): The model name (e.g., 'GLM 4.6 Turbo')
- `subProvider` (string, optional): The sub-provider name (e.g., 'z')

**Returns:** String with formatted provider hierarchy

### `getAvailableModels(provider, subProvider)`

Gets all available models for a specific provider.

**Parameters:**
- `provider` (string): The main provider name
- `subProvider` (string, optional): The sub-provider name

**Returns:** Array of model names

## License

MIT
