const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {

  // cria usuário
  const user = await prisma.user.create({
    data: {
      email: `teste${Date.now()}@email.com`,
      name: "Argemiro"
    }
  })

  console.log("CRIADO:")
  console.log(user)

  // Atualizando usuário
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: "Atualizado" }
  })

  console.log("\nATUALIZADO:")
  console.log(updatedUser)

  // Deletando um usuário
  const deletedUser = await prisma.user.delete({
    where: { id: user.id }
  })

  console.log("\nDELETADO:")
  console.log(deletedUser)

  // lista todos
  const users = await prisma.user.findMany()

  console.log("\nLISTA:")
  console.log(users)
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })