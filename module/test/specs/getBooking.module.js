// ini adalah contoh menggunakan ES module js
import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://restful-booker.herokuapp.com/booking"

//Describe the best suite
describe("Get All Booking", () => {
    it('Positive - success get all booking', async() => {
        const response = request(baseUrl) //baseUrl
            .get("/booking") //endpoint

        //Assertion pake chai
        expect((await response).status).to.equal(200)
        console.log(await (response).body)
    })
})