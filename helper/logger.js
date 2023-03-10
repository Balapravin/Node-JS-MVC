const prodmode=require('../prod.json')


const logger = (function_name, file_name, message,type) =>{
    let displaymessage= `Function Name : ${function_name}- File Name : ${file_name} - Message : ${message}`
    return prodmode.Production_Mode? ' ' : console.log(type?'❤️❤️❤️❤️'+displaymessage:'🐛🐛🐛🐛'+displaymessage)
}

module.exports = {
    logger
}