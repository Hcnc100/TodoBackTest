import express, { Router } from "express"

interface ServerOptions {
    port: number,
    publicPath: string,
    routes: Router
}


export class Server {

    private app = express()
    private readonly port: number
    private readonly publicPath: string
    private readonly routes: Router

    constructor(private options: ServerOptions) {
        const { port, publicPath, routes } = options;
        this.port = port;
        this.routes = routes;
        this.publicPath = publicPath;
    }

    start() {

        // // * publicPath is a string that represents the path to the public folder
        // this.app.use(express.static(this.publicPath))

        // * middlewares

        // * for using json
        this.app.use(express.json())
        // * for using url encoded data
        this.app.use(express.urlencoded({ extended: true }))


        // * Routes
        this.app.use(this.routes)

        this.listen(this.port)
    }

    listen(port: number) {
        this.app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })

    }
}