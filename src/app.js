const express = require("express");
const app = express();
app.get("/user", (req, res) => {
    res.send({ firstname: "Anjali", lastname: "saini" })
})
app.post("/user", (req, res) => {
    res.send("i am succefully post the data to database")
})
app.delete("/user", (req, res) => {
    res.send("i am succefully delete the data to database")
})
app.use("/server", (req, res) => {
    res.send("hello i am a new server you have succefully created a server")
})
app.listen(3000, () => {
    console.log("server is running on port 3000");
})