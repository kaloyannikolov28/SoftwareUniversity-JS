function journey(input) {
  const budget = Number(input[0]);
  const season = input[1];

  if (budget <= 100) {
    switch (season) {
      case "summer":
        cost = budget * 0.3;
        break;
      case "winter":
        cost = budget * 0.7;
        break;
    }
    location = "Bulgaria";
  } else if (budget <= 1000) {
    switch (season) {
      case "summer":
        cost = budget * 0.4;
        break;
      case "winter":
        cost = budget * 0.8;
        break;
    }
    location = "Balkans";
  } else if (budget > 1000) {
    location = "Europe";
    cost = budget * 0.9;
  }
  if (season === "summer") {
    if (budget <= 1000) {
      destination = "Camp";
    } else {
      destination = "Hotel";
    }
  } else {
    destination = "Hotel";
  }
  console.log(`Somewhere in ${location}`);
  console.log(`${destination} - ${cost.toFixed(2)}`);
}
journey(["50", "summer"]);
