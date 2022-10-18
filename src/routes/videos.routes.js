const express = require('express');
const { getList,
        getDetail,
        createItem, 
        updateItem, 
        deleteItem} = require('../controllers/videos.controller');
const router = express.Router();

router.get('/', getList);
router.get('/:id', getDetail)
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem)

module.exports = router;