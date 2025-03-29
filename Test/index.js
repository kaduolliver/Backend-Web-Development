import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {

    let myName = "Kadmu";

    res.render("index.ejs", {
        name: myName,
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});