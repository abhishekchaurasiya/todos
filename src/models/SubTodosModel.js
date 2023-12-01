const mongose = require("mongoose");
const { SubTodo } = require("../utils/CollectionsName");
const { Schema } = mongose;

const subTodosSchema = new Schema({
    is_active: {
        type: Boolean,
        default: false,
    },
    content: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongose.Schema.Types.ObjectId,
        ref: User
    },

});


exports.SubTodo = mongose.model(SubTodo, subTodosSchema);