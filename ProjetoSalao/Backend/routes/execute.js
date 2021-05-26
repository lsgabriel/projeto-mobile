const express = require('express');
const router = express.Router();
const {Execute} = require("../models");

router.get('/', async(req, res)=>{
    const execute = await Execute.findAll();
    res.status(200).json(execute);
});

module.exports = router;