import { PrismaClient } from "@prisma/client";
const prisma =  new PrismaClient();


async function seed(){
    const Customer =await prisma.customer.create({
       data:{
        name: "esteban",
        address: "totoracocha",
        number: "09756428791"
    }
    });


async function seed(){
    const Bill =await prisma.bill.create({
       data:{
        date: new Date(4/12/23),
        pay: 25,
        nameProduct: "camisa"
    }
    });

    const Product =await prisma.product.create({
        data:{
         description: "camisa",
         price: 25,
         amountn: 100
     }
     });


     const Payment =await prisma.payment.create({
        data:{
         paymentDate: new Date (2/15/23) ,
         paymentMethod: "efectivo",
         
     }
     });
     console.log('Seed data insert succeblefully');
}



seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
}