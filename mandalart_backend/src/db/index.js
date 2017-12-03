const mongoose = require('mongoose');

const {
    MONGO_URI: mongoURI
} = process.env;

module.exports = (function() {
    mongoose.Promise = global.Promise;

    return {
        connect () {
            return mongoose.connect(mongoURI, {
                useMongoClient: true
            }).then(
                () => {
                    console.log('Successfully connected to mongodb');
                }
            ).catch(e => {
                console.error(e);
            });
        },
        disconnect () {
            return mongoose.disconnect();
        }
    };
})();