import { expect } from "chai";
import supertest from "supertest";
import AuthHelper from "../../helper/auth.helper";
import { client } from "../../data.json";
import Methods from "../../METHODS";

const authHelper = new AuthHelper();
const methods = new Methods();

describe("register new user", () => {
  before(async () => {
    await authHelper.register(client.firstName, client.lastName, client.countryName, client.phoneNumber, methods.generateEmail(), client.password);
    console.log(authHelper.response.body);
  });
  it("status code", () => {
    expect(authHelper.response.statusCode).to.eq(201);
  });
});
