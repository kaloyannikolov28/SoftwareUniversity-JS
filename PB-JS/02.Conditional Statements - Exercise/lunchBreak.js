function lunchBreak(input) {
  const series = input[0];
  const timeSeries = Number(input[1]);
  const breakTime = input[2];

  let lunchTime = (breakTime * 1) / 8;
  let chillTime = (breakTime * 1) / 4;
  let timeLeftSeries = (breakTime - lunchTime - chillTime);
  let timeLeft = Math.abs(timeLeftSeries - timeSeries);
  if (timeLeftSeries >= timeSeries) {
    console.log(
      `You have enough time to watch ${series} and left with ${Math.ceil(timeLeft)} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${series}, you need ${Math.ceil(timeLeft)} more minutes.`
    );
  }
}
lunchBreak(["Game of Thrones", "60", "96"]);
