function braceletStand(input) {
  let allowance = Number(input[0]);
  let salesMoney = Number(input[1]);
  let costs = Number(input[2]);
  let priceGift = Number(input[3]);

  let savedAllowance = allowance * 5;
  let savedSalesMoney = salesMoney * 5;
  let totalSavedMoney = savedAllowance + savedSalesMoney;

  let totalMoney = totalSavedMoney - costs;
  let difference = Math.abs(totalMoney - priceGift);

  if (totalMoney >= priceGift) {
    console.log(
      `Profit: ${totalMoney.toFixed(2)} BGN, the gift has been purchased.`
    );
  } else {
    console.log(`Insufficient money: ${difference.toFixed(2)} BGN.`);
  }
}
braceletStand(["2.10", "17.50", "20.20", "148.50"]);
