const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  apps: [
    {
      name: "flight-app",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.PORT,
        MONGO_URI: process.env.MONGO_URI,
        APP_ID: process.env.APP_ID,
        APP_KEY: process.env.APP_KEY,
      },
    },
  ],
};
