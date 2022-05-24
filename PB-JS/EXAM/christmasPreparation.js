function christmasPreparation(input) {
  let numPaper = Number(input[0]);
  let numFabric = Number(input[1]);
  let litersGlue = Number(input[2]);
  let discountPercent = Number(input[3]);

  let pricePaper = 5.8;
  let priceFabric = 7.2;
  let priceGlue = 1.2;

  let totalPrice =
    (numPaper * pricePaper + numFabric * priceFabric + litersGlue * priceGlue) *
    (1 - discountPercent / 100);
  console.log(totalPrice.toFixed(3));
}
christmasPreparation(["2", "3", "2.5", "25"]);
