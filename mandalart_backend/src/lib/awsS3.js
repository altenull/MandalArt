const {
    AWS_BUCKET: awsBucket,
    AWS_ACCESS_KEY: awsAccessKey,
    AWS_SECRET_ACCESS_KEY: awsSecretAccessKey
} = process.env;

const AWS = require('aws-sdk');

AWS.config.region = 'ap-northeast-2';

const s3 = new AWS.S3({
    accessKeyId: awsAccessKey,
    secretAccessKey: awsSecretAccessKey,
    Bucket: awsBucket
});

const logger = require('lib/logger');
const fs = require('fs');

const uploadLogFile = async () => {
    const moment = require('moment');
    const today = moment().format('YYYY-MM-DD');
    const logFile = `log/${today}-server.log`;
    const logFileContent = fs.readFileSync(logFile, 'utf8');

    const param = {
        Bucket: awsBucket,
        Key: logFile,
        ACL: 'public-read',
        Body: logFileContent
    };
    
    await s3.upload(param, (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(`${logFile} upload success!`);
    });
}

exports.uploadLogFile = uploadLogFile;