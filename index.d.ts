import "egg";

declare module "egg" {
  interface Application {
    passportWechat: Indexed;
  }
}
