const express = require("express");
const router = express.Router();

const uuid = require("uuid").v4

const shows = [
    {
        id: uuid(),
        name: "Breaking Bad"
    },
    {
        id: uuid(),
        name: "Better Call Saul"
    },
    {
        id: uuid(),
        name: "Invisible"

    }
]

router.get("/", (req,res) => {
    res.json(shows)
})

module.exports = router;