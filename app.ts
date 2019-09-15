import { Application } from "egg";

const debug = require("debug")("egg-passport-weapp");
const assert = require("assert");
const Strategy = require("passport-weapp").Strategy;

function mountOneClient(
  config: any,
  app: Application,
  client: string = "weapp"
) {
  config.passReqToCallback = true;

  assert(config.key, "[egg-passport-weapp] config.passportWeapp.key required");
  assert(
    config.secret,
    "[egg-passport-weapp] config.passportWeapp.secret required"
  );

  app.passport.use(
    client,
    new Strategy(
      {
        ...config,
        appID: config.key,
        appSecret: config.secret
      },
      (
        req: any,
        accessToken: string,
        refreshToken: string,
        profile: any,
        expires_in: number,
        verified: any
      ) => {
        console.log("arguments = ", {
          accessToken,
          refreshToken,
          profile,
          expires_in,
          verified
        });
        const user = {
          provider: "weapp",
          id: profile.unionid || profile.openid,
          name: profile.unionid || profile.openid,
          displayName: profile.unionid || profile.openid,
          photo: "",
          gender:
            profile.gender === "FEMALE"
              ? "female"
              : profile.gender === "MALE"
                ? "male"
                : "unknown",
          accessToken,
          refreshToken,
          session_key: profile.session_key,
          profile
        };

        debug("%s %s get user: %j", req.method, req.url, user);

        console.log("do verifying...", app.passport.doVerify);
        app.passport.doVerify(req, user, verified);
      }
    )
  );
}

export default (app: Application) => {
  const config = app.config.passportWeapp;

  if (config.clients) {
    for (const client in config.clients) {
      const c = config.clients[client];

      mountOneClient(c, app, client);
    }
  } else {
    mountOneClient(config, app);
  }
};
