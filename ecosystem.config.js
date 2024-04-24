module.exports = {
    apps : [{
      name   : "app-presentation",
      script : "npm start",
      env_production: {
         NODE_ENV: "production"
      },
      env_development: {
         NODE_ENV: "development"
      }
    }]
  }