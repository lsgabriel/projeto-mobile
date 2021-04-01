const express = require('express');
const router = express.Router();
const {Professional} = require('../models');
const sha256 = require('js-sha256');

router.get('/', async(req, res)=>{
    const professionals = await Professional.findAll();
    res.status(200).json(professionals);
});

router.post('/', async(req, res)=>{
    const professional = await Professional.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });
    res.status(201).json(professional);
});

router.delete('/:id', async(req, res)=>{
    const professional = await Professional.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(professional);
});

module.exports = router;