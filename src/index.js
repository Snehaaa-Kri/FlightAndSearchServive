const express = require("express"); //imports express.js library

const {PORT} = require('./config/serverconfig')


//function making
const setUpAndStartServer = async () => {

    const app = express();  //create express object/application
  

    app.listen(PORT, ()=>{
        console.log(`Server started at ${PORT}`);
        console.log("Process obj is: ", process.env.PORT);
    });
}

//function calling
setUpAndStartServer();























        //app.listen(PORT, ()=>{
        //     console.log(`Server started at ${PORT}`);
        // });

            //jaise hi koi request iss app pr aaya jo ki 3000 port pr chl rha h- callback function execute ho jaega.


