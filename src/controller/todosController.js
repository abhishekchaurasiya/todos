const Todo = require("../models/TodosModel");
const { add } = require("../services/todosServices");
const { textUpperCase } = require("../utils/Common");
const { NOT_FOUND, OK, BAD_REQUEST } = require("../utils/httpStatusCode")
const sendResponse = require("../utils/sendResponse");


const addTodo = async (req, res) => {
    try {
        const title = req.body.title ? textUpperCase(req.body.title) : "";
        const description = req.body.description ? req.body.description : "";
        const complete = req.body.complete ? req.body.complete : false;

        if ([title, description].some((fields) => fields.trim() === "")) {
            return res.status(BAD_REQUEST).json({ error: "All fields are required!" });
        }

        let createTodo = await add(title, description, complete);
        if (!createTodo) {
            return res.status(BAD_REQUEST).json({ error: "Not able to create a Todo!" });
        }

        return res.status(OK).json({ msg: "Todo create successfully!"});

    } catch (error) {
        return sendResponse(res, NOT_FOUND, { message: error.message })
    }
};

module.exports = {
    addTodo
}