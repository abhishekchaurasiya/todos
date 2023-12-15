const mongose = require("mongoose");
const { Todos, Users, SubTodo } = require("../utils/Collections_Constant");
const { Schema } = mongose;

const todosSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        trim: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongose.Schema.Types.ObjectId,
        ref: Users
    },
    subTodos: [
        {
            type: mongose.Schema.Types.ObjectId,
            ref: SubTodo
        }
    ]
}, { timestamps: true, id: false });


const Todo = mongose.model(Todos, todosSchema);
module.exports = Todo;
