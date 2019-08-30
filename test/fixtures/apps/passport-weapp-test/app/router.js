"use strict";

module.exports = app => {
  const { router } = app;

  router.get("/", ctx => {
    ctx.body = "hi, " + app.plugins.passportWeapp.name;
  });

  app.passport.mount("weapp", app.config.passportWeapp);

  router.get("/passport/weapp/callback", ctx => {
    ctx.body = "hello";
  });
};
