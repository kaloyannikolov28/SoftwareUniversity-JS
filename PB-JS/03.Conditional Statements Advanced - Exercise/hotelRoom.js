function hotelRoom(input) {
  const month = input[0];
  const nights = Number(input[1]);
  let priceStudio = 0;
  let priceApartment = 0;

  switch (month) {
    case "May":
    case "October":
      if (nights > 14) {
        priceStudio = 50 * 0.7 * nights;
        priceApartment = 65 * 0.9 * nights;
      } else if (nights > 7) {
        priceStudio = 50 * 0.95 * nights;
        priceApartment = 65 * nights;
      } else {
        priceStudio = 50 * nights;
        priceApartment = 65 * nights;
      }
      break;
    case "June":
    case "September":
      if (nights > 14) {
        priceStudio = 75.2 * 0.8 * nights;
        priceApartment = 68.7 * 0.9 * nights;
      } else {
        priceStudio = 75.2 * nights;
        priceApartment = 68.7 * nights;
      }
      break;
    case "July":
    case "August":
      if (nights > 14) {
        priceStudio = 76 * nights;
        priceApartment = 77 * 0.9 * nights;
      } else {
        priceStudio = 76 * nights;
        priceApartment = 77 * nights;
      }
  }

  console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
