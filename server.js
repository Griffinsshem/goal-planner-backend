const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();

server.use(cors());
server.use(jsonServer.router('db.json'));
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));