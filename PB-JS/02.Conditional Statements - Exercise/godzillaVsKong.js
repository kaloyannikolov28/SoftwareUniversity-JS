function godzillaVsKong(input) {
  const budget = Number(input[0]);
  const numberExtras = Number(input[1]);
  let prieExtras = Number(input[2]);

  let decour = budget * 0.1;

  if (numberExtras > 150) {
    prieExtras = prieExtras * numberExtras * 0.9;
    let price = decour + prieExtras;
    let cost = budget - price;
    if (cost >= 0) {
      console.log("Action!");
      console.log(`Wingard starts filming with ${cost.toFixed(2)} leva left.`);
    } else {
      console.log("Not enough money!");
      console.log(`Wingard needs ${Math.abs(cost).toFixed(2)} leva more.`);
    }
  } else {
    let price = decour + prieExtras * numberExtras;
    let cost = budget - price;
    if (cost >= 0) {
      console.log("Action!");
      console.log(`Wingard starts filming with ${cost.toFixed(2)} leva left.`);
    } else {
      console.log("Not enough money!");
      console.log(`Wingard needs ${Math.abs(cost).toFixed(2)} leva more.`);
    }
  }
}
godzillaVsKong(["15437.62", "186", "57.99"]);
