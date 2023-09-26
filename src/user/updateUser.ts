import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main(userId: number, name: string) {
    // Prisma Queries will be put here

    // Update User
    const user = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            name: name
        }
    })
    console.log('user : ', user)
}

main(1, 'updated name')
    .then(async() => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error('error', e)
        await prisma.$disconnect()
        process.exit(1)
    })

/**
 * $ npx ts-node src/user/updateUser.ts
 *   ㄴ> user :  { id: 1, email: 'jabob@gmail.com', name: 'updated name' }
 */