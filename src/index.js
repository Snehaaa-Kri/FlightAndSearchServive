const express = require("express"); 
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverconfig')


//function making
const setUpAndStartServer = async () => {

    const app = express(); 


    //body-parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
  
    //express
    let PORT = 3002;
    app.listen(PORT, ()=>{
        console.log(`Server started at ${PORT}`);
        // console.log("Process obj is: ", process.env.PORT);
    });
}

//function calling
setUpAndStartServer();























        //app.listen(PORT, ()=>{
        //     console.log(`Server started at ${PORT}`);
        // });

            //jaise hi koi request iss app pr aaya jo ki 3000 port pr chl rha h- callback function execute ho jaega.


