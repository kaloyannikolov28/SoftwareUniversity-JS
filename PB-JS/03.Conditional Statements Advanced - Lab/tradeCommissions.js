function tradeCommissions(input) {
  const city = input[0];
  const volume = input[1];
  let commission = 0;

  if (volume >= 0 && volume <= 500 && volume > 0) {
    switch (city) {
      case "Sofia":
        commission = volume * 0.05;
        console.log(commission.toFixed(2));
        break;
      case "Varna":
        commission = volume * 0.045;
        console.log(commission.toFixed(2));
        break;
      case "Plovdiv":
        commission = volume * 0.055;
        console.log(commission.toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else if (volume > 500 && volume <= 1000 && volume > 0) {
    switch (city) {
      case "Sofia":
        commission = volume * 0.07;
        console.log(commission.toFixed(2));
        break;
      case "Varna":
        commission = volume * 0.075;
        console.log(commission.toFixed(2));
        break;
      case "Plovdiv":
        commission = volume * 0.08;
        console.log(commission.toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else if (volume > 1000 && volume <= 10000 && volume > 0) {
    switch (city) {
      case "Sofia":
        commission = volume * 0.08;
        console.log(commission.toFixed(2));
        break;
      case "Varna":
        commission = volume * 0.1;
        console.log(commission.toFixed(2));
        break;
      case "Plovdiv":
        commission = volume * 0.12;
        console.log(commission.toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else if (volume > 10000 && volume > 0) {
    switch (city) {
      case "Sofia":
        commission = volume * 0.12;
        console.log(commission.toFixed(2));
        break;
      case "Varna":
        commission = volume * 0.13;
        console.log(commission.toFixed(2));
        break;
      case "Plovdiv":
        commission = volume * 0.145;
        console.log(commission.toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else {
    console.log("error");
  }
}
tradeCommissions(["Sofia", "1500"]);
