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
        handler: (request, reply) => {
            reply.file(path.join(__dirname, "/dist/", request.params.param));
        }
    },
    {
        method: "GET",
        path: "/{param*}",
        handler: () => reply.file("/src/index.html")
    }
];