function bestPlayer(input) {
  let index = 0;
  let goal = 0;
  let best = 0;
  while (input[index] != "END") {
    let name = input[index];
    let n = Number(input[index + 1]);
    if (n > goal) {
      goal = n;
      best = name;
    }
    if (goal >= 10) break;
    index += 2;
  }
  console.log(`${best} is the best player!`);
  if (goal >= 3)
    console.log(`He has scored ${goal} goals and made a hat-trick !!!`);
  else console.log(`He has scored ${goal} goals.`);
}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
