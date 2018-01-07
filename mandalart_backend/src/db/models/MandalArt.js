const mongoose = require('mongoose');
const { Schema } = mongoose;

const MandalArt = new Schema({
    writer: String,
    goal: String,
    plans: {
        plan1: String,
        plan2: String,
        plan3: String,
        plan4: String,
        plan5: String,
        plan6: String,
        plan7: String,
        plan8: String
    },
    date: {
        created: {
            type: Date,
            default: Date.now
        },
        edited: {
            type: Date,
            default: Date.now
        }
    },
    is_edited: {
        type: Boolean,
        default: false
    },
    starred: [String]
});

MandalArt.statics.Write = function({writer, goal, plans}) {
    const mandalart = new this({
        writer,
        goal,
        plans
    });

    return mandalart.save();
}

MandalArt.statics.validateObjectId = function({id}) {
    return mongoose.Types.ObjectId.isValid(id);
}

module.exports = mongoose.model('MandalArt', MandalArt);