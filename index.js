const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

var counter = 0;
app.listen(port, console.log('Server started and listening to 5000'));

app.get('/', function(request, response){
    response.send("Counter = "+ counter);
}); 

app.post('/', (req, res)=>{counter++; res.send("counter increased")});

