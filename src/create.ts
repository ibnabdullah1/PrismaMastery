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

  //   @ createMany
  const createMany = await prisma.posts.createMany({
    data: [
      {
        title: "My First Post 1",
        content: "This is the content of my first post.",
        published: true,
        author: "Arafat",
      },
      {
        title: "My First Post 2",
        content: "This is the content of my first post.",
        published: false,
        author: "Arafat",
      },
      {
        title: "My First Post 3",
        content: "This is the content of my first post.",
        published: false,
        author: "Arafat",
      },
      {
        title: "My First Post 4",
        content: "This is the content of my first post.",
        published: false,
        author: "Arafat",
      },
      {
        title: "My First Post 5",
        content: "This is the content of my first post.",
        published: false,
        author: "Arafat",
      },
    ],
  });

  console.log(createMany);
};
main();
