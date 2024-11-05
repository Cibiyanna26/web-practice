const express = require("express")
const rateLimit = require("express-rate-limit")
const app = express()

const PORT = 3000

// create a rate limit rule

const apiRequestLimit = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 2, // limit each IP to 2 requests per windowMs
    handler: function(req, res, /*Next*/){
        return res.status(429).json({
            error:"you sent too many requests. Please wait a while!"
        })
    }
})   

app.use(apiRequestLimit)

app.get('/', (req, res)=>{
    return res.status(200).json({"message":"This is a world"})
})

app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`)
})
