import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: false,
        },
      ],
    },
  });
  //   console.log(andFiltering);

  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "This",
          },
        },
        { published: true },
      ],
    },
  });
  //   console.log({ orFiltering });
  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "This",
          },
        },
      ],
    },
  });
  //   console.log({ notFiltering });

  const startsWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "user2@ph.com",
      },
    },
  });

  //   console.log(startsWith);
  const userNameArray = ["user1", "user2", "user5"];

  const userNamesByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });
  //   console.log(userNamesByArray);
  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 3,
    },
    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(inDepthData, { depth: Infinity });
};
filtering();
