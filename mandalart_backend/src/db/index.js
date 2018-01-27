const mongoose = require('mongoose');
const logger = require('lib/logger');

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
                    logger.info('Successfully connected to mongoDB');
                }
            ).catch((e) => {
                logger.error(e);
            });
        },
        disconnect () {
            return mongoose.disconnect();
        }
    };
})();