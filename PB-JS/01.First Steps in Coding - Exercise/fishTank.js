function fishTank(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let percentage = Number(input[3]);

  let volumeL = (length * width * height) / 1000;
  let takenSpace = percentage / 100;

  let finalLiters = volumeL * (1 - takenSpace);

  console.log(finalLiters);
}

fishTank(["85", "75", "47", "17"]);
