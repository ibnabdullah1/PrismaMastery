import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
  // const singleDelete = await prisma.posts.delete({
  //   where: {
  //     id: 1,
  //   },
  // });
  // console.log(singleDelete);
  //   const deleteMany = await prisma.posts.deleteMany({});
  //   console.log(deleteMany);
};

deleteData();
