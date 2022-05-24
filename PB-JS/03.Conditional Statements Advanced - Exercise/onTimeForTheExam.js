function onTimeForTheExam(input) {
  const hourOfExam = Number(input[0]);
  const minuteOfExam = Number(input[1]);
  const houtOfArrival = Number(input[2]);
  const minuteOfArrival = Number(input[3]);

  const totalExamMinutes = hourOfExam * 60 + minuteOfExam;
  const totalArrivalTime = houtOfArrival * 60 + minuteOfArrival;
  const differenceTime = Math.abs(totalExamMinutes - totalArrivalTime);
  const hourDifference = Math.floor(differenceTime / 60);
  let minuteDifference = differenceTime % 60;
  if (minuteDifference === 0 || (minuteDifference < 10 && hourDifference > 0)) {
    minuteDifference = `0${minuteDifference}`;
  }
  if (totalArrivalTime === totalExamMinutes) {
    console.log("On time");
  } else if (totalArrivalTime > totalExamMinutes && differenceTime < 60) {
    console.log("Late");
    console.log(`${minuteDifference} minutes after the start`);
  } else if (totalArrivalTime > totalExamMinutes && differenceTime >= 60) {
    console.log("Late");
    console.log(`${hourDifference}:${minuteDifference} hours after the start`);
  } else if (differenceTime <= 30) {
    console.log("On time");
    console.log(`${minuteDifference} minutes before the start`);
  } else if (differenceTime > 30 && differenceTime < 60) {
    console.log("Early");
    console.log(`${minuteDifference} minutes before the start`);
  } else {
    console.log("Early");
    console.log(`${hourDifference}:${minuteDifference} hours before the start`);
  }
}
