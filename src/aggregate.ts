import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const aggregate = async () => {
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });
  //   console.log(avgAge);
  const avgSum = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });
  //   console.log(avgSum);
  const avgTotal = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });
  //   console.log(avgTotal);

  const maxAvg = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });
  //   console.log(maxAvg);
  const minAvg = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });
  //   console.log(minAvg);
};
aggregate();
