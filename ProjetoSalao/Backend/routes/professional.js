const express = require('express');
const router = express.Router();
const {Professional} = require('../models');
const sha256 = require('js-sha256');
const checkJWT = require('../middlewares/auth');

router.get('/', checkJWT, async(req, res)=>{
    const professionals = await Professional.findAll();
    res.status(200).json(professionals);
});

router.post('/', checkJWT, async(req, res)=>{
    const professional = await Professional.create({
        name: req.body.name,
        password: sha256("teste"+req.body.password+"15!@hklti_-=130O.asqu"),
        email: req.body.email
    });
    res.status(201).json(professional);
});

router.delete('/:id', checkJWT, async(req, res)=>{
    const professional = await Professional.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(professional);
});

module.exports = router;