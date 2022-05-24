function salary(input) {
  let index = 0;
  let openTab = Number(input[index]);
  index++;

  let money = Number(input[index]);
  index++;
  let haveSalary = true;
  for (let i = 0; i < openTab; i++) {
    let currTab = input[index];
    index++;

    if (currTab === "Facebook") {
      money -= 150;
    } else if (currTab === "Instagram") {
      money -= 100;
    } else if (currTab === "Reddit") {
      money -= 50;
    }
    if (money <= 0) {
      console.log(`You have lost your salary.`);
      haveSalary = false;
      break;
    }
  }
  if (haveSalary) {
    console.log(money);
  }
}
