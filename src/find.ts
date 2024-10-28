import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  // @ create
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
  //   const getAllPosts = await prisma.posts.findMany();

  // @ findFirst
  const getFirstPost = await prisma.posts.findFirstOrThrow({
    where: {
      id: 17,
    },
    select: {
      author: true,
      title: true,
    },
  });
  console.log(getFirstPost);

  // @ findFirstOrThrow
  //   const getFirstPost2 = await prisma.posts.findFirstOrThrow({
  //     where: {
  //       id: 23,
  //     },
  //   });
  //   console.log(getFirstPost2);

  //  @ findUnique
  //   const findUnique = await prisma.posts.findUnique({
  //     where: {
  //       id: 2,
  //     },
  //   });

  //   console.log(findUnique);
  //  @ findUniqueOrThrow
  // const findUniqueOrThrow = await prisma.posts.findUniqueOrThrow({
  //   where: {
  //     id: 223,
  //   },
  // });

  // console.log(findUniqueOrThrow);
};
main();
