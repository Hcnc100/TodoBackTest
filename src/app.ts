import { AppRoutes } from "./app.routes"
import { Server } from "./app.server"
import { envs } from "./config/envs"




main()


function main() {
    const server = new Server({
        port: envs.PORT,
        publicPath: envs.PUBLIC_URL,
        routes: AppRoutes.getRoutes
    })

    server.start()
}