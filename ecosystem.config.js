module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "npm run start:prod",
      port: 3000,
      time: true,
    },
  ],
  deploy: {
    production: {
      user: "dev",
      host: "161.97.65.149",
      key: "radovanrasha.pem",
      ref: "origin/master",
      repo: "git@github.com:radovanrasha/radovanrasha-portfolio.git",
      path: "/home/dev/portfolio",
      env: {
        NODE_ENV: "production",
      },
      "post-deploy":
        "rm -rf node_modules && . ~/.nvm/nvm.sh && nvm use 20 && npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production",
    },
  },
};
