const fs = require("fs")

fs.rm("newfolder",{recursive: true}, function(err){
    if(err) console.log(err);
    else console.log("deleted")

});