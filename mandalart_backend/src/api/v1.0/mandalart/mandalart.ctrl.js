const Joi = require('joi');
const MandalArt = require('../../../db/models/MandalArt');

// WRITE MandalArt: POST /api/v1.0/mandalart/
exports.write = async (ctx) => {
    const schema = Joi.object().keys({
        writer: Joi.string().required(),
        goal: Joi.string().min(1).max(15).required(),
        plans: Joi.object().keys({
            plan1: Joi.string().min(1).max(15).required(),
            plan2: Joi.string().min(1).max(15).required(),
            plan3: Joi.string().min(1).max(15).required(),
            plan4: Joi.string().min(1).max(15).required(),
            plan5: Joi.string().min(1).max(15).required(),
            plan6: Joi.string().min(1).max(15).required(),
            plan7: Joi.string().min(1).max(15).required(),
            plan8: Joi.string().min(1).max(15).required()
        })
    });

    const result = Joi.validate(ctx.request.body, schema);

    if (result.error) {
        ctx.status = 400; // Bad Request
        return;
    }

    let mandalart = null;
    try {
        // writer를 Request에 담아서 받아야함.
        mandalart = await MandalArt.Write(ctx.request.body);
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.body = mandalart;
}

// PUT MandalArt: PUT /api/v1.0/mandalart/:id
exports.modify = async (ctx) => {
    // CHECK MandalArt ID VALIDITY
    const { id } = ctx.params;
    
    if ( !MandalArt.validateObjectId(id) ) {
        ctx.status = 400; // Bad Request
        return;
    }

    const schema = Joi.object().keys({
        goal: Joi.string().min(1).max(15).required(),
        plans: Joi.object().keys({
            plan1: Joi.string().min(1).max(15).required(),
            plan2: Joi.string().min(1).max(15).required(),
            plan3: Joi.string().min(1).max(15).required(),
            plan4: Joi.string().min(1).max(15).required(),
            plan5: Joi.string().min(1).max(15).required(),
            plan6: Joi.string().min(1).max(15).required(),
            plan7: Joi.string().min(1).max(15).required(),
            plan8: Joi.string().min(1).max(15).required()
        })
    });

    const result = Joi.validate(ctx.request.body, schema);

    if (result.error) {
        ctx.status = 400; // Bad Request
        return;
    }

    // CHECK LOGIN STATUS

    MandalArt.findById(id, (err, mandalart) => {
        if (err)
            throw err;

        if (!mandalart) {
            ctx.status = 404; // Not Found -> No Resource
            return;
        }        
    });
}

// DELETE MandalArt: DELETE /api/v1.0/mandalart/:id
exports.delete = async (ctx) => {
    // CHECK MandalArt ID VALIDITY
    const { id } = ctx.params;
    let objId = MandalArt.generateObjectId(id);

    if ( !MandalArt.validateObjectId(objId) ) {
        ctx.status = 400; // Bad Request
        return;
    }

    MandalArt.findById(id, (err, mandalarts) => {
        if (err)
            throw err;

        if (!mandalarts) {
            ctx.status = 404; // Not Found -> No Resource
            return;
        }

        MandalArt.remove({ _id: id }, err => {
            if (err)
                throw err;
            ctx.body = 'success';
        });
    });
    // CHECK LOGIN STATUS
    // 마찬가지로 로그인 상태를..
}

// READ MandalArt: GET /api/v1.0/mandalart/
exports.get = async (ctx) => {
    await MandalArt.find()
        .sort({_id: -1})
        .limit(3)
        .exec((err, mandalarts) => {
            if (err)
                throw err;
            ctx.body = mandalarts;
        });
}

// READ OlderMandalArt: GET /api/v1.0/mandalart/older/:id
exports.getOlder = async (ctx) => {
    const { id } = ctx.params;
    let objId = MandalArt.generateObjectId(id);

    if ( !MandalArt.validateObjectId(objId) ) {
        ctx.status = 400; // Bad Request
        return;
    }

    await MandalArt.find({ _id: { $lt: id }})
        .sort({_id: -1})
        .limit(3)
        .exec((err, mandalarts) => {
            if (err)
                throw err;
            ctx.body = mandalarts;
        });
}