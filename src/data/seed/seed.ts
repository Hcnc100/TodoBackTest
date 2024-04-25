import { Todo } from './../../../node_modules/.prisma/client/index.d';
import { PrismaClient } from "@prisma/client/extension";
import { myContainer } from "../../di/Container";
import { TYPES } from "../../di/Types";
import { seedData } from './data';


async function seed() {
    await deleteAll()
    await seedUsers()
    await seedTodos()
    console.log('Seeding end')
    process.exit(0)
}

const randomBetween0andX = (x: number) => {
    // ! change this to a random number if you want to seed with random data
    return seedData.users[0]
}


async function seedUsers() {
    const prisma = myContainer.get<PrismaClient>(TYPES.prisma)

    console.log('Seeding users init')
    await prisma.user.createMany({
        data: seedData.users
    })
    console.log('Seeding users end')
}


async function seedTodos() {
    const prisma = myContainer.get<PrismaClient>(TYPES.prisma)
    const users = await prisma.user.findMany()
    console.log('Seeding todos init')
    await prisma.todo.createMany({
        data: seedData.tasks.map((task) => {
            return {
                ...task,
                userId: randomBetween0andX(users.length).id,
            }
        })
    })
    console.log('Seeding todos end')
}


async function deleteAll() {
    const prisma = myContainer.get<PrismaClient>(TYPES.prisma)

    console.log('Deleting all data init')

    console.log('Deleting all todos')
    await prisma.todo.deleteMany()

    console.log('Deleting all users')
    await prisma.user.deleteMany()

    console.log('Deleting all data end')
}


(async () => {
    await seed()
})()