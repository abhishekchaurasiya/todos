const Todo = require("../models/TodosModel");

async function add(title, description, complete) {
    let result = await Todo.create({
        title: title,
        description: description,
        complete: complete
    });

    if (result) return true;
    return false;
};



module.exports = {
    add
}