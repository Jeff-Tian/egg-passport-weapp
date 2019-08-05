const mock = require("egg-mock");
const request = require("supertest");

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
});
