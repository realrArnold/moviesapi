const express = require("express")
const app = express();
const port =3000;
const router = require ("./router");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

dotenv.config()

connectDB();

app.use(express.json());
app.use(router);


app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
})