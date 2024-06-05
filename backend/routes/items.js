const express = require('express')
const {
    createItem,
    getItems,
    getItem,
    deleteItem,
    updateItem
} = require('../controllers/itemController')

const router = express.Router()
//This file is for register the routes, no controller function

//GET all items '/api/items'
router.get('/', getItems)

//GET single item
router.get('/:id', getItem)

// POST a new item
router.post('/', createItem)

// DELETE an item
router.delete('/:id', deleteItem)

// UPDATE an item
router.patch('/:id', updateItem)
module.exports = router