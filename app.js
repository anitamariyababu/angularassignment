const express = require('express');
const app = express();
app.set('view engine','ejs');
app.set('views','./src/views');
app.get('/',function(req,res){
    res.render("index",{books:['book1','book2'],title:'Library'});

});
app.listen(5000);
