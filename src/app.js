const express = require("express");
const app = express();

app.use("/admin", (req, res, next) => {
    console.log("authirazation i sbeing checked for everything")
    const token = "xyz";
    if (token === "xyz") {
        console.log("admin is authorized")
        // res.send("authrized succefully")
        next()
    } else {
        console.log("admin is not authorized")
        res.send("authrized succefully not")
    }

})
app.get("/admin", (req, res) => {
    console.log("i am admin")
    res.send("i am fetching the admin data")
})
app.listen(3000, () => {
    console.log("server is running on port 3000");
})