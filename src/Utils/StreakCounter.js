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
  let streakCount = 1;
  for (let i = 1; i < dates.length; i++) {
    const currentDate = new Date(dates[i]);
    const previousDate = new Date(dates[i - 1]);
    if (currentDate.getDate() === previousDate.getDate() - 1) {
      streakCount++;
    } else {
      break;
    }
  }
  return streakCount;
}

