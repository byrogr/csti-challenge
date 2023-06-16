import Server from './infrastructure/http/rest/models/server';

const start = () => {
    const server: Server = new Server();
    server.listen();
}

start();
