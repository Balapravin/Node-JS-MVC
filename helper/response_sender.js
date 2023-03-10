const sendjsonresponse = (response,data)=>{
return response.status(data.status).json(data)
}

module.exports ={
    sendjsonresponse
}