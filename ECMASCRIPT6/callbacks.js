const myExpenses = [
    {
      gym: 99,
    },
    {
      ifood: 200,
    },
    {
      phone: 60,
    },
    {
      internet: 100,
    },
  ];
  
  const myIncome = 1000;

const mothlyBudget = (myIncome, myExpenses, callback) => {
    const totalExpenses = callback(myExpenses);
    const totalAfterExpenses = myIncome - totalExpenses;
    console.log(
        `Recebido: BRL:${myIncome}
         Gasto: BRL:${myExpenses}
         Saldo: BRL:${totalAfterExpenses}
        `
    )
}

mothlyBudget(myIncome, myExpenses)