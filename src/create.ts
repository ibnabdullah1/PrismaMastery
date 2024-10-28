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
  // const createMany = await prisma.posts.createMany({
  //   data: [
  //     {
  //       title: "My First Post 1",
  //       content: "This is the content of my first post.",
  //       published: true,
  //       author: "Arafat",
  //     },
  //     {
  //       title: "My First Post 2",
  //       content: "This is the content of my first post.",
  //       published: false,
  //       author: "Arafat",
  //     },
  //     {
  //       title: "My First Post 3",
  //       content: "This is the content of my first post.",
  //       published: false,
  //       author: "Arafat",
  //     },
  //     {
  //       title: "My First Post 4",
  //       content: "This is the content of my first post.",
  //       published: false,
  //       author: "Arafat",
  //     },
  //     {
  //       title: "My First Post 5",
  //       content: "This is the content of my first post.",
  //       published: false,
  //       author: "Arafat",
  //     },
  //   ],
  // });
  // console.log(createMany);
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user1",
  //     email: "user1@ph.com",
  //     role: Role.user,
  //   },
  // });
  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "this is bio...",
  //     userId: 1,
  //   },
  // });
  // console.log(createProfile);
  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "software engineering",
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "This is title 2",
      content: "this is content of the post. 2",
      authorId: 1,
      postCategory: {
        create: {
          category: {
            connect: {
              id: 3,
            },
          },
        },
        // create: [
        //   {
        //     categoryId: 1,
        //   },
        //   {
        //     categoryId: 3,
        //   },
        //   {
        //     categoryId: 4,
        //   },
        // ],
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);

  // console.log(createCategory);
};
main();
