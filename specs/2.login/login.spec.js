import { expect } from "chai";
import supertest from "supertest";

import AuthHelper from "../../helper/auth.helper";

const authHelper = new AuthHelper();

describe.skip("login", () => {
  before(async () => {
    await authHelper.login(process.env.EMAIL, process.env.PASSWORD);
    console.log(authHelper.response.body);
  });
  it("status code", () => {
    expect(authHelper.response.statusCode).to.eq(200);
  });
});
