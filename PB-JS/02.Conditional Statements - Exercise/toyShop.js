function toyShop(input) {
  const priceTrip = Number(input[0]);
  const numberPuzzel = Number(input[1]);
  const numberDoll = Number(input[2]);
  const numberBear = Number(input[3]);
  const numberMinion = Number(input[4]);
  const numberTruck = Number(input[5]);

  const pricePuzzel = 2.6;
  const priceDoll = 3;
  const priceBear = 4.1;
  const priceMinion = 8.2;
  const priceTruck = 2;

  let totalToys =
    numberPuzzel + numberDoll + numberBear + numberMinion + numberTruck;
  let totalPrice =
    pricePuzzel * numberPuzzel +
    priceDoll * numberDoll +
    priceBear * numberBear +
    priceMinion * numberMinion +
    priceTruck * numberTruck;

  if (totalToys >= 50) {
    totalPrice *= 0.75;
  }

  totalPrice *= 0.9;
  let finalMoney = Math.abs(totalPrice - priceTrip);

  if (totalPrice >= priceTrip) {
    console.log(`Yes! ${finalMoney.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${finalMoney.toFixed(2)} lv needed.`);
  }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
