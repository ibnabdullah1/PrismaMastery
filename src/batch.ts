import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "arafat2231",
      email: "arafat2231@example.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 6,
    },
    data: {
      age: 20,
    },
  });
  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log("User created:", userData);
  console.log("User updated:", updateData);
};
batchTransaction();
