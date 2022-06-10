const fixTransactions(userIds) => {
  console.log('Corrigindo transações dos usuários enviados')
}

const sendEmails(userEmails) => {
  console.log('Enviando comunicação para os usuários impactados')
}

const main = async () => {
  await fixTransactions()
  await sendEmails()
}

main()
  .then(() => console.log('Transações reprocessadas!')
  .catch(err => console.error(err))