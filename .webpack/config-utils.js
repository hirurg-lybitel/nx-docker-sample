const withWatchPoll = (config) => {
  if (process.env.ENV_PLATFORM === 'DOCKER') {
    config.watchOptions = {
      aggregateTimeout: 500,
      poll: 1000,
    }

    // Handle WebSocket port binding when Docker Host:Container port is different
    config.devServer = {
      ...config.devServer,
      client: {
        webSocketURL: "auto://0.0.0.0:0/ws",
      },
    };
  }

  return config;
}

module.exports = { withWatchPoll }
