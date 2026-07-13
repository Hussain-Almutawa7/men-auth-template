const mongoose = require("mongoose");

const exampleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: String,
    },
    {
        timestamps: true,
    }
);

const Example = mongoose.model("Example", exampleSchema);
module.exports = Example;
