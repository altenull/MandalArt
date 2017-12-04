const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');
const token = require('lib/token');

const {
    PASSWORD_SECRET_KEY: secret
} = process.env;

function hash(password) {
    return crypto.createHmac('sha256', secret).update(password).digest('hex');
}

const User = new Schema({
    email: String,
    nickname: String,
    password: String,    
    createAt: {
        type: Date,
        default: Date.now
    }
});

User.statics.findByEmail = function(email) {
    return this.findOne({email}).exec();
};

User.statics.findByNickname = function(nickname) {
    return this.findOne({nickname}).exec();
};

User.statics.findByEmailOrNickname = function({email, nickname}) {
    return this.findOne({
        $or: [
            { email },
            { nickname }
        ]
    }).exec();
};

User.statics.localRegister = function({ email, nickname, password }) {
    // 데이터를 생성할 때는 new this() 사용
    const user = new this({
        email,
        nickname,
        password: hash(password)
    });

    return user.save();
}

User.methods.validatePassword = function(password) {
    const hashed = hash(password);
    return this.password === hashed;
};

User.methods.generateToken = function() {
    const payload = {
        _id: this._id,
        email: this.email
    };

    return token.generateToken(payload, 'user');
};

module.exports = mongoose.model('User', User);