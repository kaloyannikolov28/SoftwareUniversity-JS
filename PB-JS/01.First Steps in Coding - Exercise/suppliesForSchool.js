function suppliesForSchool(input) {
  let pens = Number(input[0]);
  let markers = Number(input[1]);
  let cleaner = Number(input[2]);
  let discount = Number(input[3]);
  let discountPercent = discount / 100;
  let penPrice = 5.8;
  let markerPrice = 7.2;
  let cleanerPrice = 1.2;

  let totalCost =
    pens * penPrice + markers * markerPrice + cleaner * cleanerPrice;
  let totalDiscountCost = totalCost - totalCost * discountPercent;

  console.log(totalDiscountCost);
}

suppliesForSchool(["2", "3", "4", "25"]);
