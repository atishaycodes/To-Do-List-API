const express = require('express');
const { createList, renderList } = require("../controllers/list")


const router = express.Router();

router.post('/', createList)

router.get('/see', renderList);


module.exports = router