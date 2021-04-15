const express = require('express');
const router = express.Router();
const {Professional} = require('../models');
const sha256 = require('js-sha256');
const checkJWT = require('../middlewares/auth');
const { Op } = require("sequelize");

router.get('/', checkJWT, async(req, res)=>{
    const professionals = await Professional.findAll();
    res.status(200).json(professionals);
});

router.get('/:id', checkJWT, async(req, res)=>{
    const professional = await Professional.findAll({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(...professional);
});

router.get('/search/:name', checkJWT, async(req, res)=>{
    const professionals = await Professional.findAll({
        where:{
            name: { [Op.like]: '%' + req.params.name + '%' }
        }
    });
    res.status(200).json(professionals);
});

router.get('/filter/:type', checkJWT, async(req, res)=>{
    const professionals = await Professional.findAll({
        where:{
            type: req.params.type
        }
    });
    res.status(200).json(professionals);
});

router.put('/:id', checkJWT, async(req, res)=>{
    const professional = await Professional.update(req.body, {
        where:{
            id: req.params.id
        }
    });
    res.status(200).json(professional);
});

router.post('/', async(req, res)=>{
    const professional = await Professional.create({
        name: req.body.name,
        password: sha256("teste"+req.body.password+"15!@hklti_-=130O.asqu"),
        email: req.body.email,
        phone: req.body.phone,
        profile_image: req.body.profile_image,
        type: req.body.type,
        description: req.body.description
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