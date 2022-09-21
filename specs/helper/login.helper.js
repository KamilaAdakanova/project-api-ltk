import supertest from "supertest";
import "dotenv/config"


export default class  LoginHelper {
    constructor(){
        this.response = null;
    }

async login(email, password){
    await supertest(process.env.BASE_URL)
    .post("user/login")
    .send({email, password})
    .then((res)=>{
        this.response = res
    })
}


}


