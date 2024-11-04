import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (event: any) => {
  console.log(event);
});

const main = async () => {
  const getAllPosts = await prisma.post.findMany();

  //   console.log(getAllPosts);
};
main();
