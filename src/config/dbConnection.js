
const mongoose = require("mongoose");
const URL_VALUE = process.env.MONGO_LOCAL;

mongoose.set('strictQuery', true);
mongoose
    .connect(URL_VALUE.toString())
    .then(() => console.log("Mongo DB Connected"))
    .catch((error) => {
        console.log("Mongo DB connection failed", error.message);
        process.exit(1)
    });

    