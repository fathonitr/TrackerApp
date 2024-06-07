const Item = require('../models/itemsModel')
const mongoose = require('mongoose')

// get all items
const getItems = async (req, res) => {
    const items = await Item.find({}).sort({ createdAt: -1 }) //Empty .find property{}, to get all items 

    res.status(200).json(items)
}

// get a single item

const getItem = async (req, res) => {
    // grab id from req parameter :id
    const { id } = req.params

    //check if id is valid type
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such item' })
    }

    const item = await Item.findById(id)

    if (!item) {
        return res.status(404).json({ error: 'No such item' })
    }

    res.status(200).json(item)
}
// create a new item
const createItem = async (req, res) => {
    // grabbing properties from req.body
    const { title, desc, load } = req.body

    // add doc to db
    try {
        const item = await Item.create({ title, desc, load }) //Async, create new item document
        res.status(200).json(item) //return it as json
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete an item
const deleteItem = async (req, res) => {
    // grabbing id
    const { id } = req.params

    //check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such item" })
    }
    // check if it exist
    const item = await Item.findById(id)

    if (!item) {
        return res.status(404).json({ error: 'No such item' })
    }

    try {
        const item = await Item.findByIdAndDelete(id)
        res.status(200).json(item)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// update an item
const updateItem = async (req, res) => {
    // grabbing property
    const { title, desc, load } = req.body
    // grabbing id
    const { id } = req.params

    //check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such item' })
    }
    // check if it exist
    const item = await Item.findById(id)

    if (!item) {
        return res.status(404).json({ error: 'No such item' })
    }

    try {
        const item = await Item.findByIdAndUpdate(id, {
            //Spread the object
            ...req.body
        })

        res.status(200).json({ updated: item })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// export as object
module.exports = {
    createItem,
    getItems,
    getItem,
    deleteItem,
    updateItem
}