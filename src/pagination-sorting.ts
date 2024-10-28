import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // @ offset pagination
  //   const offsetData = await prisma.posts.findMany({
  //     skip: 5,
  //     take: 2,
  //   });
  //   console.log("Offset paginated data: ", offsetData);
  // @ cursor based pagination
  //   const cursorData = await prisma.posts.findMany({
  //     skip: 5,
  //     take: 2,
  //     cursor: {
  //       id: 18,
  //     },
  //   });
  //   console.log("cursor based paginated data: ", cursorData);
  // @ sorting
  const sortedData = await prisma.posts.findMany({
    orderBy: {
      //   id: "asc",
      title: "asc",
      //   id: "desc",
    },
    skip: 2,
    take: 10,
    // where: {
    //   title: "My First Post 4",
    // },
  });
  console.log("sorted data: ", sortedData);
};

paginationSorting();
