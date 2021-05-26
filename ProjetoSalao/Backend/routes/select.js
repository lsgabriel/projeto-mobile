const express = require('express');
const router = express.Router();
const {Select} = require("../models");

router.get('/', async(req, res)=>{
    const select = await Select.findAll();
    res.status(200).json(select);
});

module.exports = router;