import { PrismaClient} from '@prisma/client'
// todo remove duplicate code by client structure

const prisma = new PrismaClient()

async function main(title: string, body:string) {
    // Prisma Queries will be put here

    // Create Article and associate it with user
    const article = await prisma.article.create({
        data: {
            title: title,
            body: body,
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })
    console.log('article : ', article)
}

main('Jacobs First Article', 'This is Jacobs first article')
    .then(async() => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error('error', e)
        await prisma.$disconnect()
        process.exit(1)
    })

/**
 * $ npx ts-node src/article/createArticle.ts
 *   ㄴ>
 *   article :  {
 *   id: 1,
 *   title: 'Jacobs First Article',
 *   body: 'This is Jacobs first article',
 *   authorId: 1
 *   }
 */
