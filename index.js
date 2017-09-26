exports.decorateConfig = (config) => {
  config.termCSS = `
    ${config.termCSS || ''}
    x-screen x-row,
    .xterm-rows > div {
      font-variant-ligatures: initial;
    }
  `
  return config
}
