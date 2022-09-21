import { expect } from "chai"
import supertest from "supertest"

import LoginHelper from "../helper/login.helper"

const loginHelper = new LoginHelper();

describe("login", () => {

    before(async () => {
    await loginHelper.login("kadakanova@gmail.com", "KamiLove2021")
    console.log(loginHelper.response.body)
  });
it("status code", () => {
  expect(loginHelper.response.statusCode).to.eq(200)
})

  
})

//   import { expect } from "chai"; 
//   describe("Math functions", () => {
//      it("a+b=c", () => { let a = 5; let b = 7; 
//         let c = a + b; expect(c).to.eq(12); });
//          it("a-b=c", () => { 
//             let a = 5;
//              let b = 7; 
//             let c = a - b;
//              expect(c).to.eq(-2); }); 
             
//              it("a*b=c", () => {
//                  let a = 5; 
//                  let b = 7; 
//                  let c = a * b; 
//                  expect(c).to.eq(35); }); 
//                  it("a/b=c", () => { 
//                     let a = 35; 
//                     let b = 7;
//                      let c = a / b; 
//                      expect(c).to.eq(5); }); 
//                      it("a**b=c", () => { 
//                         let a = 5; 
//                         let b = 3; 
//                         let c = a ** b;
//                          expect(c).to.eq(125); 
//                         }); }); 