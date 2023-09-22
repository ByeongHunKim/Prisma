import { PrismaClient} from '@prisma/client'
// todo remove duplicate code by client structure

const prisma = new PrismaClient()

async function main() {
    // Prisma Queries will be put here

    // Get All Users
    const users = await prisma.user.findMany({
        include: {
            articles: true
        }
    })

    // If just look user, you can't check user's articles

    // console.log('users : ', users)

    // Loop over User's articles
    users.forEach((user) => {
        console.log(`User: ${user.name}, Email: ${user.email}`)
        console.log(`Articles:`)
        user.articles.forEach((article) => {
            console.log(`- Title: ${article.title}, Body: ${article.body}`)
        })
        console.log('\n')
    })
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
 * $ npx ts-node src/user/getAllUsersWithArticles.ts
 *   ㄴ>
 *   User: Jacob Kim, Email: jabob@gmail.com
 *   Articles:
 *   - Title: Jacobs First Article, Body: This is Jacobs first article
 *
 *
 *   User: Jacobs, Email: jacob2@gmail.com
 *   Articles:
 *   - Title: Jacobs First Article, Body: This is Jacobs first article
 */
