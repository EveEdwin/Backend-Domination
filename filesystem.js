const fs = require("fs")

fs.rename( "changed.js","newfile.txt", function(err,data){
    if(err) console.log(err);
    else console.log("done")

});