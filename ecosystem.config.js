module.exports = {
    apps: [{
        name: "app-presentation",
        script: "node src/index.js",
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
            NODE_ENV: "development"
        }
    }]
}