const mock = require("egg-mock");
const request = require("supertest");
const nock = require("nock");
describe("test/passport-weapp.test.ts", () => {
    let app;
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
            .get("/sns/jscode2session?appid=xxx&secret=yyy&js_code=022b33C51dEMRS1gPoC51nVTB51b33CJ&grant_type=authorization_code")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3BvcnQtd2VhcHAudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhc3Nwb3J0LXdlYXBwLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFN0IsUUFBUSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRTtJQUMzQyxJQUFJLEdBQVEsQ0FBQztJQUNiLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNoQixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNiLE9BQU8sRUFBRSwwQkFBMEI7U0FDcEMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFekIsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV4QixFQUFFLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtRQUN0QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUNSLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQzthQUMzQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0NBQXdDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDdEQsT0FBTyxHQUFHO2FBQ1AsV0FBVyxFQUFFO2FBQ2IsR0FBRyxDQUFDLGlCQUFpQixDQUFDO2FBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLHFCQUFxQjtJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNuQyxJQUFJLENBQUMsMkJBQTJCLENBQUM7YUFDOUIsR0FBRyxDQUNGLGlIQUFpSCxDQUNsSDthQUNBLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDVixNQUFNLEVBQUUsS0FBSztZQUNiLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDO1FBRUwsT0FBTyxHQUFHO2FBQ1AsV0FBVyxFQUFFO2FBQ2IsR0FBRyxDQUFDLGdFQUFnRSxDQUFDO2FBQ3JFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=