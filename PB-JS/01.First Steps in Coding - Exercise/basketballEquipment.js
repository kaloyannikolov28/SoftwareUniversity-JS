function basketballEquipment(input) {
  let yearCost = Number(input[0]);

  let shoeCost = yearCost - yearCost * 0.4;
  let outfitCost = shoeCost - shoeCost * 0.2;
  let ballCost = (outfitCost * 1) / 4;
  let accCost = (ballCost * 1) / 5;

  let totalCost = yearCost + shoeCost + outfitCost + ballCost + accCost;
  console.log(totalCost);
}

basketballEquipment(["365"]);
