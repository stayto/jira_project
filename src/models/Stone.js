const { Schema, model, Types } = require('mongoose');

//TODO add/change properies depending on exam description

const stoneSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    formula: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    likes: {
        type: [Types.ObjectId],
        ref: 'User',
        deafault: []
    },
    author: {
        type: Types.ObjectId,
        ref: 'User',
    }
});

const Stone = model('Stone', stoneSchema);

module.exports = { Stone };