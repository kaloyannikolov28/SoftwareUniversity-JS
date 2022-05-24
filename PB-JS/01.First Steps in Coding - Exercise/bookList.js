function bookList(input) {
  let pageNumber = Number(input[0]);
  let pagesInHour = Number(input[1]);
  let daysForBook = Number(input[2]);
  let hoursPerDay = pageNumber / pagesInHour / daysForBook;
  console.log(hoursPerDay);
}

bookList(["212", "20", "2"]);
