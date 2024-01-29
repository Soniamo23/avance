import { PrismaClient } from "@prisma/client";
const prisma =  new PrismaClient();

async function seed(){
    const user = await prisma.user.create({
        data:{
            name:"John Doe",
            email: "john@doe.com"
        },
    });
}