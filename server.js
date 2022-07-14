const http = require('http')

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer(()=>{
	resizeBy.statusCode = 200;
	resizeBy.end('Zeet Code')
})

server.listen(port,hostname,()=>{
	console.log(`http://${hostname}:${port}/`);
})
