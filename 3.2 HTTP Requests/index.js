import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
})
app.get("/contact", (req, res) => {
    res.send("<h1>Contact me<h1>\n<p>(61) 9-93246589</p>");
})
app.get("/about", (req, res) => {
    res.send("<h1>About me</h1>\n<p>My name is Kadu Oliver</p>");
})

app.listen(3000, () => {
    console.log(`Server started on port ${port}`);
});