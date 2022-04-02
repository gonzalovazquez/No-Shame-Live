import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
const prisma = new PrismaClient();

async function main() {
  const encryptedPassword = await hash("noshame", 12);
  console.log(encryptedPassword)
  await prisma.user.upsert({
    where: { email: "gonzalo@gonzalovazquez.com" },
    update: {},
    create: {
      email: "gonzalo@gonzalovazquez.ca",
      name: "Gonzalo Vazquez",
      password: encryptedPassword,
    },
  });

  await prisma.user.upsert({
    where: { email: "todd.olson@att.net" },
    update: {},
    create: {
      email: "todd.olson@att.net",
      name: "Todd Olson",
      password: encryptedPassword,
    },
  });

  await prisma.user.upsert({
    where: { email: "camilla@camillaclark.net" },
    update: {},
    create: {
      email: "camilla@camillaclark.net",
      name: "Camilla Clark",
      password: encryptedPassword,
    },
  });

  await prisma.user.upsert({
    where: { email: "jeesolkim@gmail.com" },
    update: {},
    create: {
      email: "jeesolkim@gmail.com",
      name: "Rosemary Kim",
      password: encryptedPassword,
    },
  });

  await prisma.user.upsert({
    where: { email: "qhemmons@gmail.com" },
    update: {},
    create: {
      email: "qhemmons@gmail.com",
      name: "Quinn Hemmons",
      password: encryptedPassword,
    },
  });

  await prisma.user.upsert({
    where: { email: "heyitsfelipe@gmail.com" },
    update: {},
    create: {
      email: "heyitsfelipe@gmail.com",
      name: "Felipe Fernandez",
      password: encryptedPassword,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
