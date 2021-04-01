const express = require('express');
const router = express.Router();
const { Client } = require('../models');
const sha256 = require('js-sha256');
const jwt = require('jsonwebtoken');


router.post('/', async (req, res)=>{
    const result = await Client.findAll({
        where:{
            name: req.body.name,
            password: sha256("teste"+req.body.password+"15!@hklti_-=130O.asqu")
        }
    });

    if(!result.length){
        res.status(401).json({auth: false})
    }

    const token = jwt.sign({id: result.id}, '@tiARA', {expiresIn: '999 years'});
    res.status(200).json({auth: true, token: token});
});

module.exports = router;