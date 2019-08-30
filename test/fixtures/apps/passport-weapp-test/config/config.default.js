"use strict";

module.exports = appInfo => {
  const config = {};

  config.keys = "123456";

  config.passportWeapp = {
    key: process.env.EGG_PASSPORT_WEAPP_CLIENT_ID || "xxx",
    secret: process.env.EGG_PASSPORT_WEAPP_CLIENT_SECRET || "yyy",
    successReturnToOrRedirect: ""
  };

  return config;
};
