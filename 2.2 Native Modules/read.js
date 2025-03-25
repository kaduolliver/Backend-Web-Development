const fs = require("fs");

fs.readFile("./Message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

//Also...

// fs.readFile("./Message.txt", (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });