const fs = require("fs");

fs.writeFile("Message.txt", "Viver e a coisa mais rara do mundo, a maioria das pessoas apenas existe!\nPermita-se viver.", (err) => {
    if(err) throw err;
    console.log("The file has been saved!");
}); 