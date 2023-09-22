import { PrismaClient} from '@prisma/client'
// todo remove duplicate code by client structure

const prisma = new PrismaClient()

async function main(name: string, email: string, title: string, body:string) {
    // Prisma Queries will be put here

    // Create User with Article and associate them
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            articles: {
                create: {
                    title: title,
                    body: body
                }
            }
        }
    })

    // Get all Articles
    const articles = await prisma.article.findMany()

    console.log('user : ', user)
    console.log('articles : ', articles)
}

main('Jacobs', 'jacob2@gmail.com', 'Jacobs First Article', 'This is Jacobs first article')
    .then(async() => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error('error', e)
        await prisma.$disconnect()
        process.exit(1)
    })

/**
 * $ npx ts-node src/common/createUserWithArticleAndAssociate.ts
 *   ㄴ>
 * articles :  [
 *   {
 *     id: 1,
 *     title: 'Jacobs First Article',
 *     body: 'This is Jacobs first article',
 *     authorId: 1
 *   },
 *   {
 *     id: 2,
 *     title: 'Jacobs First Article',
 *     body: 'This is Jacobs first article',
 *     authorId: 2
 *   }
 *  ]
 */
