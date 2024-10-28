import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.posts.update({
  //     where: {
  //       id: 3,
  //     },
  //     data: { title: "Hello World" },
  //   });
  //   console.log(result);

  //   update many
  const updateMany = await prisma.posts.updateMany({
    where: {
      title: "My First Post 1",
    },
    data: {
      published: false,
    },
  });

  console.log(updateMany);

  const upsertData = await prisma.posts.upsert({
    where: {
      id: 17,
    },
    update: {
      title: "Another Post",
    },
    create: {
      title: "Title 2",
      content: "content 2",
      author: "Arafat",
    },
  });

  console.log(upsertData);
};
main();
