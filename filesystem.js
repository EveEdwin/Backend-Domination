const fs = require("fs")

fs.mkdir("newfolder", function(err){
    if(err) console.log(err);
    else console.log("created")

});