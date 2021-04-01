const express = require('express');
const router = express.Router();
const { Client } = require('../models');
const sha256 = require('js-sha256');
const checkJWT = require('../middlewares/auth');

router.get('/', async(req, res)=>{
    const users = await Client.findAll();
    res.status(200).json(users);
});

router.post('/', async(req, res)=>{
    const user = await Client.create({
        name: req.body.name,
        password: sha256("teste"+req.body.password+"15!@hklti_-=130O.asqu"),
        email: req.body.email
    });
    res.status(201).json(user);
});

router.delete('/:id', async(req, res)=>{
    const user = await Client.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(user);
});

module.exports = router;