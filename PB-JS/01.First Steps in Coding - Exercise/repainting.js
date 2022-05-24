function repainting(input) {
  let ammountNylon = Number(input[0]);
  let ammountPaint = Number(input[1]);
  let ammountDiluent = Number(input[2]);
  let ammountHours = Number(input[3]);

  let priceNylon = 1.5;
  let pricePaint = 14.5;
  let priceDiluent = 5;

  let price =
    (ammountNylon + 2) * priceNylon +
    (ammountPaint + ammountPaint * 0.1) * pricePaint +
    ammountDiluent * priceDiluent +
    0.4;
  let finalPrice = price * 0.3 * ammountHours + price;

  console.log(finalPrice);
}

repainting(["10", "11", "4", "8"]);
