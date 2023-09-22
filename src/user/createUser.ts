import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main(name:string, email:string) {
    // Prisma Queries will be put here

    // Create User
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email
        }
    })
    console.log('user : ', user)
}

main('Jacob Kim', 'jabob@gmail.com')
    .then(async() => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error('error', e)
        await prisma.$disconnect()
        process.exit(1)
    })

/**
 * $ npx ts-node src/user/createUser.ts
 *   ㄴ> user :  { id: 1, email: 'jabob@gmail.com', name: 'Jacob Kim' }
 */