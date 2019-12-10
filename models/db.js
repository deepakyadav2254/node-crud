const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB' ,{useNewUrlParser:true},err=>{
    if(!err){console.log('Mongo db connectes successfully.')}
    else{console.log('error in db connnection'+ err)}
});
require('./employee.model')