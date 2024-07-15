const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Seba is an Elden Lord');
});

server.listen(5555, () => {
    console.log('Server started on port 5555...');
});