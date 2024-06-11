const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/check/:hash", async (req, res) => {
    try {
        const r = await fetch(
            `https://www.virustotal.com/api/v3/files/${req.params.hash}`,
            {
                method: "GET",
                headers: { "x-apikey": "1a666f5f70ebf40fb31624efa407c90f8db2e3b304f969143b03d0a1c15b924d" },
            }
        );

        res.json(await r.json());
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



app.listen(3000, () => console.log(`Server running.`));
