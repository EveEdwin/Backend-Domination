const fs = require("fs")

fs.readdir("newfolder",{withFileTypes: true}, function(err,files){
    if(err) console.log(err);
    else console.log(files)

});