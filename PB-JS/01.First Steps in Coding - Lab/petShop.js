function petShop(input) {
  let dog = Number(input[0]);
  let cat = Number(input[1]);
  let priceCat = 4;
  let priceDog = 2.5;
  let resultCat = cat * priceCat;
  let resultDog = dog * priceDog;
  let finalResult = resultCat + resultDog;
  console.log(`${finalResult} "lv."`);
}
petShop(["13", "9"]);
