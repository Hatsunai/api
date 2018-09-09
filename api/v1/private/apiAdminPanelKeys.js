const express = require("express");
const app = express();
const { query } = require("../../objects/db");
const config = require("../../config.json");

async function getAllFromDB() {
    return await query("SELECT * FROM tokens WHERE allowed = 1")
}

app.get("/api/v1/getKeys", (req, res) => {
    var key = req.query.k;
    if (key != config.server.key) {
        return res.end("Invalid key")
    } else {
        var arr = [];
        getAllFromDB().then(q => {
            q.forEach(key => {
                const id = key.id;
                const t = key.token
                arr.push({id, t});
            });
            res.json(arr);
        })
    }
})

module.exports = app;

