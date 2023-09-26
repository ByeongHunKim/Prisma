import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main(articleId: number) {
    // Prisma Queries will be put here

    // Remove Article
    const article = await prisma.article.delete({
        where: {
            id: articleId
        }
    })
    console.log('article : ', article)
}

main(1)
    .then(async() => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error('error', e)
        await prisma.$disconnect()
        process.exit(1)
    })

/**
 * $ npx ts-node src/article/removeArticle.ts
 *   ㄴ>
 *   article :  {
 *   id: 1,
 *   title: 'Jacobs First Article',
 *   body: 'This is Jacobs first article',
 *   authorId: 1
 *   }
 *
 * $ npx ts-node src/article/getAllArticles.ts
 *  ㄴ>
 *  articles :  [
 *   {
 *     id: 2,
 *     title: 'Jacobs First Article',
 *     body: 'This is Jacobs first article',
 *     authorId: 2
 *   }
 *  ]
 *
 */