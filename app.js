//we require the built in http module
const http = require('http');
//my computer being the server
const hostname = '127.0.0.1';
//then we set the port to 3000
const port = 3000;

//create server method creates a http object
const server = http.createServer((req, res) => {
    //
    
    //if the request method is GET and the url is practice, we can handle it
    if (req.method == 'GET' && req.url == '/practice'){
        res.statusCode = 200; //set status code to 200
        res.setHeader('Content-Type', 'text/plain');//set content type to plain text
        res.end("Practice is done!");

    }

    else{
        res.statusCode = 200; //set the status code to 200
        res.setHeader('Content-Type', 'text/plain'); //set the content type to plain text
        res.end("Welcome to Re:Coded's Backend Bootcamp!"); //end the response with that message

    }
});
//listen method makes the server listen on the specified port and hostname
server.listen(port, hostname, () => {
    console.log(`server running at https://${hostname}:${port}/`);
});

//we can make the server variable available to other files
module.exports = server; //export the server variable