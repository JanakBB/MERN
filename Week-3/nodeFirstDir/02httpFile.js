import http from 'http';
import fs from 'fs';
let user11 = [
    {
        id: 1,
        userName: 'Janak'
    },
];
 
const server = http.createServer((req, res) => {
    console.log(req.method, req.url);
    if(req.url === '/') {
        res.write('Homepage')
    } else if (req.url === '/node') {
        res.write(`<a href='https://nodejs.org/en'>node</a>`)
    } else if (req.url === '/profile') {
        fs.readFile('./03index.html', (err, data) => {
            console.log(data.toString())
            res.end(data.toString());
        });
    } else if (req.url === '/users') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(user11));
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h1>404 not found</h1>')
    }
    res.end()
   
});
server.listen(3000, () => console.log('server is running'))


const server11 = http.createServer((req, res) => {
    console.log(req.method, req.url);
    if(req.url === '/') {
        res.write('<h1>HomePage</h1>')
        res.end()
    } else if (req.url === '/about') {
        res.write('<h1>AboutPage</h1>')
        res.end()
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h1><span style="color: red">404</span> NOT FOUND</h1>')
    }
});

server11.listen(5000, () => {
    console.log('Server is running')
})

const server22 = http.createServer((req, res) => {
    console.log(req.url)
 switch(req.url) {
    case '/':
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>This is Home Page</h1>');
        break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end('<h2>This is AboutPage</h2>')
            break;
            default: 
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h1><span style="color: red">404</span> Not Found Try Again');
 }
});

server22.listen(4500, () => {
    console.log('Server22 is running now')
})

