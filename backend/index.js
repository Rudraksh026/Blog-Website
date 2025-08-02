const express = require("express");
const router = require("./auth-router/router");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const db = require("./database/db");

const app = express()

app.use("/",router)

db().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})

