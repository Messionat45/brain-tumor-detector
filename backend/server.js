const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


let users = [];

// for signup push data
app.post('/api/signup', (req, res)=> { 
    const { username, password } = req.body;

    if(!username || !password) {
        return res.status(400).send("PLEASE FILL ALL DATA");
    }
    users.push({username, password});
    console.log(users);
console.log(users.map(i => i.username));
    res.status(201).send("ACCOUNT CRETED hmm successfully");
})

// for login chcek
app.post('/api/login',(req, res) => {
    const { username, password}  = req.body;

    if(!username || !password){
        return res.status(400).json({message: "PLZ FILL ALL FIELDS  TO LOGIN"});
    }

    const user = users.find(u => u.username === username && u.password === password);

    if(user){
        // json is used to send the message to front end in son format 
        res.status(200).json({message: "succesfully logged"});
    }
    else{
      res.status(400).json({message: "wrong credebnntial"});
    }
});

app.get('/api/display/', (req,res)=> {

    try{
    res.status(200).json(users);
    } catch(error){
        res.status(500).json({message: 'somethig went wrong', error});
    }
});



app.listen(port,()=> {
    console.log(`server running on https  port ${port}`);
})