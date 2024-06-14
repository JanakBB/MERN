import http from 'http';

let users = [{
    id: 1, 
    userName: 'Janak Bohara',
    password: '1234abcd222'
}];

const server22 = http.createServer((req, res) => {
    let dataCollection = '';
    if(req.method === 'GET') {
        if(req.url === '/Users') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(users))
        } 
    } else if (req.method === 'POST') {
        if(req.url === '/addusers') {
            req.on('data', (chunk) => {
                dataCollection += chunk;
            });
            req.on('end', () => {
                res.setHeader('Content-Type', 'application/json');
                users.push(JSON.parse(dataCollection));
                res.end('User added successfully!');
            })
        }
    } else {
        res.writeHead(400);
    }
});

server22.listen(5500, () => console.log('server22 is running now'));