const express = require('express');
const router = express.Router();
const {Calendar} = require("../models");

router.get('/', async(req, res)=>{
    const calendar = await Calendar.findAll();
    res.status(200).json(calendar);
});

router.get('/professional/:id', async(req, res)=>{
    const calendars = await Calendar.findAll({
        where: {
            id_professional: req.params.id
        }
    });
    res.status(200).json(calendars);
});

router.get('/client/:id', async(req, res)=>{
    const calendars = await Calendar.findAll({
        where: {
            id_client: req.params.id
        }
    });
    res.status(200).json(calendars);
});

router.get('/service/:id', async(req, res)=>{
    const calendars = await Calendar.findAll({
        where: {
            id_service: req.params.id
        }
    });
    res.status(200).json(calendars);
});

router.put('/service/status/:id', async(req, res)=>{
    const calendar = await Calendar.update(req.body, {
        where:{
            id_service: req.params.id
        }
    });
    res.status(200).json(calendar);
});

router.post('/', async(req, res)=>{
    const calendar = await Calendar.create({
        date: req.params.date,
        hour: req.params.hour,
        status: req.params.status,
        id_service: req.params.id_service,
        id_client: req.params.id_client,
        id_professional: req.params.id_professional
    });
    res.status(200).json(calendar);
});

module.exports = router;
