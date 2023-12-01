const mongose = require("mongoose");
const { Todo, User, SubTodo } = require("../utils/CollectionsName");
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
        ref: User
    },
    subTodos: [
        {
            type: mongose.Schema.Types.ObjectId,
            ref: SubTodo
        }
    ]
}, { timestamps: true, id: false });


exports.Todo = mongose.model(Todo, todosSchema);
