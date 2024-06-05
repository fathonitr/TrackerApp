const express = require('express')
const Item = require('../models/itemsModel')
const router = express.Router()

//GET all items '/api/items'
router.get('/', (req, res) => {
    res.json({ mssg: 'GET all workout' })
})

//GET single item
router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET single workout' })
})

// POST a new item
router.post('/', async (req, res) => {
    const { title, desc, load } = req.body

    try {
        const item = await Item.create({ title, desc, load }) //Async, create new item document
        res.status(200).json(item)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// DELETE an item
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE an item' })
})

// UPDATE an item
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'UPDATE an item' })
})
module.exports = router