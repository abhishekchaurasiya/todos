const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./config/dbConnection");

const userRouter = require("./routes/userRouters")

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/dev/api/v1/user", userRouter);


app.listen(port, () => console.log('Server running at ' + port + '...'))


