

// Require Express to run server and routes
const express = require ('express');

// Start up an instance of app
const app = express();
// insialise port
const port =3000;
// folder used 
app.use(express.static('website'));

//setting server

const server = app.listen(port, listening);

// listening to server
function listening(){
    console.log("server running"); 
    console.log(`running on localhost: ` + port);
};
// PLEASE NOTE I'M USING UDACITY STARTER FILE

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Setup empty JS object to act as endpoint for all routes
let projectData = {};
// POST route


app.post("/addData", addData) ;
 async function addData (req,res){
     const body =await req.body
     projectData = body;
     res.send(projectData);
     console.log(projectData);
     //console.log ("XX");
 

    
  }
  //GET 
  //I used the tutorial in classroom to do this part
  app.get('/all', sendData);

async function sendData (req, res) {
  console.log("GET")
  res.send(projectData);
};

