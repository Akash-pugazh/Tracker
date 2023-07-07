import moment from "moment";

export function sortDates(dateArr) {
  const formattedDates = dateArr.map(date => {
    const dateF = date.slice(0, 2);
    const monthF = date.slice(3, 5);
    const yearF = date.slice(6);
    return `${monthF}/${dateF}/${yearF}`;
  });
  formattedDates.sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateB - dateA;
  });
  return formattedDates;
}

export function calculateStreakCount(dates) {
  const presentDate = moment().format("MM/DD/YYYY");
  const previousDateOfPresentDate = moment(presentDate, "MM/DD/YYYY")
    .subtract(1, "days")
    .format("MM/DD/YYYY");
  let streakCount = 0;
  const firstDate = moment(dates[0], "MM/DD/YYYY").format("MM/DD/YYYY");
  const secondDate = moment(dates[1], "MM/DD/YYYY").format("MM/DD/YYYY");

  // ! 4 Possibilities
  // ! main > Compare 1st ele either present day or yesterday

  if (firstDate === presentDate) {
    // ^ First date is present
    // ^ Check it is continued or not yes -> loop no -> 1
    if (secondDate === previousDateOfPresentDate) {
      // ^ Continuous presentdate , yesterday ....
      streakCount = 2;
      for (let i = 2; i < dates.length; i++) {
        if (
          moment(dates[i], "MM/DD/YYYY").format("MM/DD/YYYY") ===
          moment(dates[i - 1], "MM/DD/YYYY")
            .subtract(1, "days")
            .format("MM/DD/YYYY")
        ) {
          streakCount += 1;
        } else {
          break;
        }
      }
    } else {
      // ^ only presentdate, ...Breaked from yesterday
      streakCount = 1;
    }
  } else if (firstDate === previousDateOfPresentDate) {
    // ^ previous date is here
    // ^ Check its followed by its previ yes -> loop no -> 1
    if (
      secondDate ===
      moment(firstDate, "MM/DD/YYYY").subtract(1, "days").format("MM/DD/YYYY")
    ) {
      streakCount = 1;
      for (let i = 1; i < dates.length; i++) {
        if (
          moment(dates[i], "MM/DD/YYYY").add(1, "days").format("MM/DD/YYYY") ===
          moment(dates[i - 1], "MM/DD/YYYY").format("MM/DD/YYYY")
        ) {
          streakCount += 1;
        } else {
          break;
        }
      }
    } else {
      streakCount = 1;
    }
  }
  // ^ First date is not either present date or yesterday
  else {
    streakCount = 0;
  }

  return streakCount;
}
