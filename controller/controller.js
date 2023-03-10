// redirect the process to another service

const { logger } = require("../helper/logger")
const { sendjsonresponse } = require("../helper/response_sender")

// Sending request to another service

const controllerHelloworld = (request, response) => {
    let firstname = request.query.first_name
    let secondname = request.query.second_name

    const data = {
        "status":200,
        "your first name is ": firstname,
        "your second name is": secondname
    }
    logger("controllerHelloworld","controller.js","Hii ✋✋✋✋🙏",true)
    sendjsonresponse(response,data)

}

module.exports = {
    controllerHelloworld
}