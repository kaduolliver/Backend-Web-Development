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

function pass(req, res, next) {
    const correctPassword = "iLoveProgramming";
    const userPassword = req.body.password;
    if (userPassword === correctPassword) {
        console.log("Correto!", req.body);
        next();
    } else{
        console.log("Senha incorreta!", req.body)
        res.status(401).send("Senha incorreta!");
    }
}

app.use(pass);

app.post("/check", (req, res) => {
    res.sendFile(__dirname + "/public/secret.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
