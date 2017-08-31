const path = require("path");

exports.routes = [
    {
        method: 'GET',
        path: '/src/{param*}',
        handler: (request, reply) => {
            reply.file(path.join(__dirname, request.params.param));
        }
    },
    {
        method: 'GET',
        path: '/dist/{param*}',
        handler: {
            directory: {
                path: path.join(__dirname, 'dist'),
                listing: true
            }
        }
    },
    {
        method: "GET",
        path: "/{param*}",
        handler: () => reply.file(path.join(__dirname, "/src/index.html"))
    }
];