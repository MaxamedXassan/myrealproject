const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()



async function seed() {
    try{
        // await prisma.loan.deleteMany()
        // await prisma.customer.deleteMany()
        // await prisma.user.deleteMany()

        // await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Loan'`
        // await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Customer'`;
        // await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'User'`;



        await prisma.user.create({
            data: {
                name: "Abdirahman",
                email: "moha@gamil.com"
            },

        });

        await prisma.user.create({
            data: {
                name: "mohamed",
                email: "moha@gmail.com"
            },
        })

        await prisma.user.create({
            
            data: {
                name: "muscab",
                email: "muscab@gmail.com"
            },
        })

    //    customer
    await prisma.customer.create({
            data: {
                userId: 1,
                name: "farxiyo",
                number: "612898990"
            }
        });

        await prisma.customer.create({
            data: {
                userId: 3,
                name: "hasan",
                number: "6135448990"
            }
        });

        await prisma.customer.create({
            data: {
                userId: 2,
                name: "hajara",
                number: "6135448876"
            }
        });

        // loan
        
await prisma.loan.create({
    data: {
        customerId: 1,
        title: "mohamed wuxu qatay bariis",
        price: "23"
    },

})
       
    } catch (error) {
        console.error(error)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
 
    
}

seed()