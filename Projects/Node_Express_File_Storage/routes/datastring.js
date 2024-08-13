const express = require("express");
const fs = require("node:fs");
const readline = require("readline");
const router = express.Router();

router.get("/", (req, res) => {
    
    let reader = readline.createInterface({
        input: fs.createReadStream("MyInfo.txt")
    });

    let firstString = "<html><head><title>Node/Express Site with File Storage</title><link rel='stylesheet' href='/css/bootstrap.min.css' /></head><button type='button'><a href='/userinput.html'>User Form</a></button><button type='button'><a href='/userfoods.html'>User Foods</a></button><form action='/user_table'><input type='submit' value='User Table'/></form><body><div class='jumbotron text-center'><h1>Info Table</h1></div><table class='table'><tr>First Name Last Name Favorite Food</tr>"
    let secondString = "</table></body></html>"

    reader.on("line", (line) => {
        console.log("Line read: ", line)
        firstString = firstString + "<br><tr>" + line + "</tr>"
    });

    //console.log(firstString);
    reader.on("close", () => {
        res.send(firstString + secondString);
    });

});

module.exports = router;