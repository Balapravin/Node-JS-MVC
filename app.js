// Core Import Files
//--------- Package Import ---------
const express = require ('express')


//----------- End Package import ----------
const app= express()
const controller = require('./controller/controller.js')
// Basic Midleware Functions


app.get('/test',(req,res)=>{

    console.log("✋Hello World✋")


})

app.get('/user',controller.controllerHelloworld)

// Roughting System





//Server Port => Development & Production





// Server Listener 
app.listen(3000,()=>{
    console.log('🙏App is running on port 3000🙏😒');
})




