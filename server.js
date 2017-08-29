const hapi = require("hapi");
const inert = require("inert");
const path = require("path");

const server = new hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: path.join(__dirname, 'dist')
            }
        }
    }
});
// Running on port 
server.connection({ port : process.env.PORT || 4200 })

// Allow static file service
server.register(inert, () => {});

server.route([
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: path.join(__dirname, 'dist'),
                listing: true
            }
        }
    }
]);

server.ext('onPreResponse', (request, reply) => {
    if (request.response.isBoom) {
        return reply.redirect('/');
    }
    return reply.continue();
});

server.start(() => console.log(`Running on ${server.info.port}`));