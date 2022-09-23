import supertest from "supertest";
import "dotenv/config";

export default class AuthHelper {
  constructor() {
    this.response = null;
  }

  async register(firstName, lastName, countryName, phoneNumber, email, password) {
    await supertest(process.env.BASE_URL)
      .post("user")
      .send({ firstName, lastName, countryName, phoneNumber, email, password })
      .then((res) => {
        this.response = res;
      });
  }

  async login(email, password) {
    await supertest(process.env.BASE_URL)
      .post("user/login")
      .send({ email, password })
      .then((res) => {
        this.response = res;
      });
  }
}
