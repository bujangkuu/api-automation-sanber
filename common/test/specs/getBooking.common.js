// ini adalah contoh menggunakan common js
const request = require("supertest")
const { expect } = require("chai")

const baseUrl = "https://restful-booker.herokuapp.com/booking"

//Describe the best suite
describe("Get All Booking", () => {
    it('Positive - success get all booking', () => {
        const response = request(baseUrl) //baseUrl
            .get("/booking") //endpoint

        //Assertion pake chai
        expect(response.status).to.equal(200)
    })
})