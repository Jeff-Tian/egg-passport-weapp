const mock = require("egg-mock");
const request = require("supertest");
const nock = require("nock");

describe("test/passport-weapp.test.ts", () => {
  let app: any;
  before(async () => {
    app = mock.app({
      baseDir: "apps/passport-weapp-test"
    });

    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it("should get /", () => {
    return request(app.callback())
      .get("/")
      .expect("hi, passportWeapp")
      .expect(200);
  });

  it("should GET /passport/weapp with openid", async () => {
    return app
      .httpRequest()
      .get("/passport/weapp")
      .expect(500);
    // .expect(/openid/);
  });

  it("should not redirect", async () => {
    nock("https://api.weixin.qq.com")
      .get(
        "/sns/jscode2session?appid=xxx&secret=yyy&js_code=022b33C51dEMRS1gPoC51nVTB51b33CJ&grant_type=authorization_code"
      )
      .reply(200, {
        openid: "xxx",
        session_key: "xxx",
        unionid: "xxx"
      });

    return app
      .httpRequest()
      .get("/passport/weapp/callback?code=022b33C51dEMRS1gPoC51nVTB51b33CJ")
      .expect(200);
  });
});
