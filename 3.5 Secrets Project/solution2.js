import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

function funcPassword(req, res, next) {
    const userPassword = req.body.password;
    const correctPassword = "iLoveProgramming";
    if (userPassword === correctPassword) {
        console.log("Correto!", req.body);
        next();
    } else {
        res.status(401).send("Senha incorreta!");
    }
}

app.use(funcPassword);

app.post("/check", (req, res) => {
    res.sendFile(__dirname + "/public/secret.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});