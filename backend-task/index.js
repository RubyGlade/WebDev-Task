const express = require("express");
const Product = require("./models");
require("./server");

const app = express();

//create

app.get('/save', function(req, res) {
    var newUser = new UserModel({ Name:"Sam", Email:"sam123@gmail.com"});

    newUser.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

app.post('/save', function(req, res) {
    var newUser = new UserModel();
       newUser.Name = req.body.Name;
       newUser.Email = req.body.Email;
       
       newStudent.save(function(err, data){
           if(err){
               console.log(error);
           }
           else{
               res.send("Data inserted");
           }
       });
    });


//retrieve

app.get('/findall', function(req, res) {
    UserModel.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});

//delete

app.get('/delete', function(req, res) {
    UserModel.remove({Name:"sam"}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});


//update

app.post('/update', function(req, res) {
    UserModel.findByNameAndUpdate(req.body.Name, 
    {Email:req.body.Email}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
});
