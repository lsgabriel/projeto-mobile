const express = require('express');
const router = express.Router();
const { Client, Professional } = require('../models');
const sha256 = require('js-sha256');
const checkJWT = require('../middlewares/auth');

router.get('/', checkJWT, async(req, res)=>{
    const clients = await Client.findAll();
    res.status(200).json(clients);
});

router.get('/:id', checkJWT, async(req, res)=>{
    const client = await Client.findAll({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(...client);
});

router.post('/', async(req, res)=>{
    const client = await Client.create({
        name: req.body.name,
        password: sha256("teste"+req.body.password+"15!@hklti_-=130O.asqu"),
        email: req.body.email,
        phone: req.body.phone,
        profile_image: req.body.profile_image,
        birthdate: req.body.birthdate
    });
    res.status(201).json(client);
});

router.put('/:id', checkJWT, async (req, res) => {
    const client = await Client.update(req.body, {
        where:{
            id: req.params.id
        }
    });
    res.status(200).json(client);
});

router.delete('/:id', checkJWT, async(req, res)=>{
    const client = await Client.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(client);
});

router.post('/favorite/:id', checkJWT, async(req, res)=>{
    try {
        const client = await Client.findAll({
            where: {
                id: req.params.id
            }
        });
        await client[0].setProfessional(req.body.professionals);
        res.status(200).json(client);        
    } catch (e) {
           console.log(e);
           res.status(500);
    }
});

router.get('/favorite/:id', checkJWT, async(req, res)=>{
    const client = await Client.findAll({
        where:{
            id: req.params.id
        },
        include:[
            {
                model: Professional,
                as: 'Professional',
                through: {attributes: []}
            }
        ]
    });
    res.status(200).json(client);
});

module.exports = router;