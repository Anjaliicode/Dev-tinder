const express = require("express");
const app = express();

app.use("/server", (req, res, next) => {
    console.log("response")
    res.send("hello i am a new server you have succefully created a server")
    next();
}, (req, res) => {
    console.log("response 2nd")
    res.send("Response 2nd")
})
app.listen(3000, () => {
    console.log("server is running on port 3000");
})