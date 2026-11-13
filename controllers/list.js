const listModel = require("../models/list")

async function createList(req, res) {
    const body = req.body
    if (!body) {
        return res.status(400).json({ error: "fields are required" });

    }
    if (!body.description) {
        return res.status(411).json({ error: "description is required" })
    }
    if (!body.heading) {
        return res.status(411).json({ error: "heading is required" })
    }
    const { description, heading, category } = body;
    const userList = await listModel.create({
        description,
        heading,
        category
    })
    return res.status(401).json({ msg: "Success", userList })
}


async function renderList(req, res) {
    try {
        const todos = await listModel.find({});
        res.render('todo', { todos });
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}
module.exports = { createList, renderList };
