const mock = require("egg-mock");
const request = require("supertest");
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3BvcnQtd2VhcHAudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhc3Nwb3J0LXdlYXBwLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUVyQyxRQUFRLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO0lBQzNDLElBQUksR0FBUSxDQUFDO0lBQ2IsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ2IsT0FBTyxFQUFFLDBCQUEwQjtTQUNwQyxDQUFDLENBQUM7UUFFSCxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUV6QixTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXhCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFO1FBQ3RCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ1IsTUFBTSxDQUFDLG1CQUFtQixDQUFDO2FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN0RCxPQUFPLEdBQUc7YUFDUCxXQUFXLEVBQUU7YUFDYixHQUFHLENBQUMsaUJBQWlCLENBQUM7YUFDdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YscUJBQXFCO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==