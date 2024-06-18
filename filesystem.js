const fs = require("fs")

fs.unlink("newfile.txt", function(err,data){
    if(err) console.log(err);
    else console.log("deleted")

});