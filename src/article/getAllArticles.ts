import { PrismaClient} from '@prisma/client'
// todo remove duplicate code by client structure

const prisma = new PrismaClient()

async function main() {
    // Prisma Queries will be put here

    // Get All Articles
    const articles = await prisma.article.findMany()
    console.log('articles : ', articles)
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
 * $ npx ts-node src/article/getAllArticles.ts
 *   ㄴ>
 *   articles :  [
 *   {
 *     id: 1,
 *     title: 'Jacobs First Article',
 *     body: 'This is Jacobs first article',
 *     authorId: 1
 *   }
 *  ]
 */
