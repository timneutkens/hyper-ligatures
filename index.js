exports.decorateConfig = (config) => {
  config.termCSS = `
    ${config.termCSS || ''}
    x-screen x-row {
      font-variant-ligatures: initial;
    }
  `
  return config
}
