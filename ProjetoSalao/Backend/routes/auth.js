const express = require('express');
const router = express.Router();
const { Client, Professional } = require('../models');
const sha256 = require('js-sha256');
const jwt = require('jsonwebtoken');


router.post('/', async (req, res)=>{
    const clientResult = await Client.findAll({
        where:{
            email: req.body.email,
            password: sha256("teste"+req.body.password+"15!@hklti_-=130O.asqu")
        }
    });

    const professionalResult = await Professional.findAll({
        where:{
            email: req.body.email,
            password: sha256("teste"+req.body.password+"15!@hklti_-=130O.asqu")
        }
    });

    if(clientResult.length){
        const token = jwt.sign({id: clientResult[0].id}, '@tiARA', {expiresIn: '999 years'});
        res.status(200).json({auth: true, token: token, id: clientResult[0].id});
    }

    else if(professionalResult.length){
        const token = jwt.sign({id: professionalResult[0].id}, '@tiARA', {expiresIn: '999 years'});
        res.status(200).json({auth: true, token: token, id: professionalResult[0].id});
    }

    res.status(401).json({auth: false})

    
});

module.exports = router;