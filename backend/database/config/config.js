module.exports = {
  development: {
    "use_env_variable": process.env.NSBEMON_DB_DEV_URL,
    "url": process.env.NSBEMON_DB_DEV_URL,
    "dialect": "postgres",
  },
  production: {
    "use_env_variable": process.env.NSBEMON_DB_PROD_URL,
    "url": process.env.NSBEMON_DB_TEST_URL,
    "dialect": "postgres"
  }
};
