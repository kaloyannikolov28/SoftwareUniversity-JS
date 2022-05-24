function cinema(input) {
  let type = input[0];
  let rolls = Number(input[1]);
  let collumns = Number(input[2]);

  const pricePremiere = 12;
  const priceNormal = 7.5;
  const priceDiscount = 5.0;

  let income = 0;

  if (type === "Premiere") {
    income = pricePremiere * rolls * collumns;
    console.log(`${income.toFixed(2)} leva`);
  } else if (type === "Normal") {
    income = priceNormal * rolls * collumns;
    console.log(`${income.toFixed(2)} leva`);
  } else if (type === "Discount") {
    income = priceDiscount * rolls * collumns;
    console.log(`${income.toFixed(2)} leva`);
  }
}
cinema(["Premiere", "10", "12"]);
