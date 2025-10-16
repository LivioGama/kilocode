/**
 * Provider configuration for AI models
 * Defines the hierarchy: Provider > Sub-provider > Model
 */
const providers = {
  'chutes': {
    name: 'Chutes.ai',
    subProviders: {
      'z': {
        name: 'Z.ai',
        models: ['GLM 4.6 Turbo', 'GLM 4.5', 'GLM 4']
      }
    }
  },
  'kilocode': {
    name: 'Kilocode',
    subProviders: {},
    models: ['GLM 4.6 Turbo', 'GLM 4.5']
  },
  'openrouter': {
    name: 'OpenRouter',
    subProviders: {},
    models: ['GLM 4.6 Turbo', 'GPT-4', 'Claude-3']
  }
};

/**
 * Format the model name with provider hierarchy
 * @param {string} provider - The main provider name
 * @param {string} model - The model name
 * @param {string} subProvider - Optional sub-provider name
 * @returns {string} Formatted string with provider hierarchy
 */
function formatModelName(provider, model, subProvider = null) {
  const providerConfig = providers[provider.toLowerCase()];
  
  if (!providerConfig) {
    throw new Error(`Unknown provider: ${provider}`);
  }
  
  let displayParts = [providerConfig.name];
  
  if (subProvider) {
    const subProviderConfig = providerConfig.subProviders[subProvider.toLowerCase()];
    if (subProviderConfig) {
      displayParts.push(subProviderConfig.name);
    }
  }
  
  displayParts.push(model);
  
  return displayParts.join(' > ');
}

/**
 * Get all available models for a provider
 * @param {string} provider - The provider name
 * @param {string} subProvider - Optional sub-provider name
 * @returns {Array} Array of model names
 */
function getAvailableModels(provider, subProvider = null) {
  const providerConfig = providers[provider.toLowerCase()];
  
  if (!providerConfig) {
    throw new Error(`Unknown provider: ${provider}`);
  }
  
  if (subProvider && providerConfig.subProviders[subProvider.toLowerCase()]) {
    return providerConfig.subProviders[subProvider.toLowerCase()].models || [];
  }
  
  return providerConfig.models || [];
}

module.exports = {
  providers,
  formatModelName,
  getAvailableModels
};
