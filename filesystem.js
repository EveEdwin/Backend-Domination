const fs = require("fs")

fs.rename("newfile.txt", "changed.js", function(err,data){
    if(err) console.log(err);
    else console.log("done")

});