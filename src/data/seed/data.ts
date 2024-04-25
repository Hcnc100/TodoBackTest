import { PrismaClient } from "@prisma/client"
import { Hasher } from "../../adapters/hasher/hasher"
import { myContainer } from "../../di/Container"
import { TYPES } from "../../di/Types"



const hasher = myContainer.get<Hasher>(TYPES.hash)

export const seedData = {

    users: [
        { id: "clvfm0jfn000308l2fhsv6lme", email: 'test1@gmail.com', password: hasher.hashSync("123456"), name: 'Juanito Perez', },
    ],

    tasks: [
        { title: 'Tarea 1', description: 'Descripcion de tarea 1' },
        { title: 'Tarea 2', description: 'Descripcion de tarea 2' },
        { title: 'Tarea 3', description: 'Descripcion de tarea 3' },
        { title: 'Tarea 4', description: 'Descripcion de tarea 4' },
        { title: 'Tarea 5', description: 'Descripcion de tarea 5' },
    ]
}



