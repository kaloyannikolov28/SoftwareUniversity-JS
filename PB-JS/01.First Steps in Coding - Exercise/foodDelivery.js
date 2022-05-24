function foodDelivery(input) {
  let chickenMenu = Number(input[0]);
  let fishMenu = Number(input[1]);
  let vegMenu = Number(input[2]);

  let chickenPrice = 10.35;
  let fishPrice = 12.4;
  let vegPrice = 8.15;

  let total =
    chickenMenu * chickenPrice + fishMenu * fishPrice + vegMenu * vegPrice;
  let desert = total * 0.2;
  let delivery = 2.5;
  let finalCost = total + desert + delivery;

  console.log(finalCost);
}

foodDelivery(["2", "4", "3"]);
