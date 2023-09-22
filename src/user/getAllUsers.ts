import { PrismaClient} from '@prisma/client'
// todo remove duplicate code by client structure

const prisma = new PrismaClient()

async function main() {
    // Prisma Queries will be put here

    // Get All Users
    const users = await prisma.user.findMany()
    console.log('users : ', users)
}

main()
    .then(async() => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error('error', e)
        await prisma.$disconnect()
        process.exit(1)
    })

/**
 * $ npx ts-node src/user/getAllUsers.ts
 *   ㄴ> users :  [ { id: 1, email: 'jabob@gmail.com', name: 'Jacob Kim' } ]
 */
