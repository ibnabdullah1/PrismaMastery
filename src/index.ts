import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.posts.create({
  //     data: {
  //       title: "My First Post",
  //       content: "This is the content of my first post.",
  //       published: true,
  //       author: "Arafat",
  //     },
  //   });
  //   console.log(result);
  // @ Find All
  const getAllPosts = await prisma.posts.findMany();

  // @ findFirst
  const getFirstPost = await prisma.posts.findFirst({
    where: {
      id: 2,
    },
  });

  console.log(getFirstPost);
};
main();
