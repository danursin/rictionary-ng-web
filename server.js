const hapi = require("hapi");
const inert = require("inert");
const path = require("path");
const routes = require("./routes").routes;

const server = new hapi.Server();

// Running on port 
server.connection({ port : process.env.PORT || 4200 })

// Allow static file service
server.register(inert, () => {});

server.route(routes);

server.ext('onPreResponse', (request, reply) => {
    if (request.response.isBoom) {
        return reply.redirect('/');
    }
    return reply.continue();
});

server.start(() => console.log(`Running on ${server.info.port}`));