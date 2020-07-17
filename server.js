const http = require('http'); 
const requestListener = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    // res.writeHead(200); 
    res.statusCode = 200; 
    // res.end("HI!")
    const [path, queryString] = req.url.split('?')
    let body;
    switch(path){
        case '/':
            body = 'Hello!'; break;
        case '/angie':
            // body = "Hello, angie!"; break;
            const name = queryString && queryString.split('=')[1];
            body = `Hello, ${name}`; break;
    }
    res.end(JSON.stringify(body));
};

// const data = { stuff: 'this', nonsense: 'that'}
// res.end(JSON.stringify(data));

const host = 'localhost'
const port = 8000
const server = http.createServer(requestListener);
server.listen(port, host, () => console.log('server is running now!'));