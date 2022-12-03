const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];

function countHours(year, holidays) {
  return holidays.reduce((acc, holiday) => {
    return new Date(holiday + "/" + year).getDay() % 6 ? acc + 2 : acc;
  }, 0);
}

console.log(year, holidays);
