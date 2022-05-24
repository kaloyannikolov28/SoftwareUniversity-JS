function worldSwimmingRecord(input) {
  const record = Number(input[0]);
  const length = Number(input[1]);
  const time = Number(input[2]);

  firstTime = time * length;
  secondTime = Math.floor(length / 15) * 12.5;
  totalTime = firstTime + secondTime;
  newTime = Math.abs(record - totalTime);

  if (totalTime < record) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(
        2
      )} seconds.`
    );
  } else {
    console.log(`No, he failed! He was ${newTime.toFixed(2)} seconds slower.`);
  }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
