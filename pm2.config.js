module.exports = {
  apps : [{
    name: "server",
    script: "src/main.js",
    watch: true,
    ignore_watch: ['src/node_modules'],
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
