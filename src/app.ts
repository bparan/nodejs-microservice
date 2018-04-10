import * as express from "express";

class App {

    public express;

    constructor() {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes(): void {
        this.express.get('/', (req, res) => res.send('Hello World'));
    }
}

export default new App().express;