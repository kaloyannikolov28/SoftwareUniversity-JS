function exam(input){
    const ammount = Number(input[0]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let avg = 0
  
    for (let i = 1; i <= ammount; i++) {
      let num = Number(input[i]);
      avg += num
  
      if (num >= 5) {
        p1Counter++;
      } else if (num >= 4 && num <= 4.99) {
        p2Counter++;
      } else if (num >= 3 && num <= 3.99) {
        p3Counter++;
      } else  {
        p4Counter++;
      } 

    }
    let p1 = (p1Counter / ammount) * 100;
    let p2 = (p2Counter / ammount) * 100;
    let p3 = (p3Counter / ammount) * 100;
    let p4 = (p4Counter / ammount) * 100;
    avg /= ammount
    
    console.log(`Top students: ${p1.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${p2.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${p3.toFixed(2)}%`);
    console.log(`Fail: ${p4.toFixed(2)}%`);
    console.log(`Average: ${avg.toFixed(2)}`)
    
}
exam(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])
