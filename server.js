const app = require('./app');
const http = require('http');
const socket = require('./socket');

const server = http.createServer(app);
socket.init(server);

const PORT = process.env.PORT || 5555;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));