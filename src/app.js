const express = require("express");
const app = express();
app.use("/test", (req, res) => {
    res.send("hello i am a test you have succefully created a server")
})
app.use("/server", (req, res) => {
    res.send("hello i am a new server you have succefully created a server")
})
app.listen(3000, () => {
    console.log("server is running on port 3000");
})