function fruitShop(input) {
  const fruit = input[0];
  const day = input[1];
  const num = input[2];
  let price = 0;

  if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
  ) {
    switch (fruit) {
      case "banana":
        price = num * 2.5;
        console.log(price.toFixed(2));
        break;
      case "apple":
        price = num * 1.2;
        console.log(price.toFixed(2));
        break;
      case "orange":
        price = num * 0.85;
        console.log(price.toFixed(2));
        break;
      case "grapefruit":
        price = num * 1.45;
        console.log(price.toFixed(2));
        break;
      case "kiwi":
        price = num * 2.7;
        console.log(price.toFixed(2));
        break;
      case "pineapple":
        price = num * 5.5;
        console.log(price.toFixed(2));
        break;
      case "grapes":
        price = num * 3.85;
        console.log(price.toFixed(2));
        break;

      default:
        console.log("error");
        break;
    }
  } else if (day === "Saturday" || day === "Sunday") {
    switch (fruit) {
      case "banana":
        price = num * 2.7;
        console.log(price.toFixed(2));
        break;
      case "apple":
        price = num * 1.25;
        console.log(price.toFixed(2));
        break;
      case "orange":
        price = num * 0.9;
        console.log(price.toFixed(2));
        break;
      case "grapefruit":
        price = num * 1.6;
        console.log(price.toFixed(2));
        break;
      case "kiwi":
        price = num * 3;
        console.log(price.toFixed(2));
        break;
      case "pineapple":
        price = num * 5.6;
        console.log(price.toFixed(2));
        break;
      case "grapes":
        price = num * 4.2;
        console.log(price.toFixed(2));
        break;

      default:
        console.log("error");
    }
  } else {
    console.log("error");
  }
}
fruitShop(["tomato", "Tuesday", "2"]);
