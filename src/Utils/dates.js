import moment from "moment/moment";

export default function getDates() {
  const primaryDates = [];
  const countDays = 3;
  for (let i = 0; i < countDays; i++) {
    const date = moment().subtract(i, "days");
    const dateObj = {
      date: date.format("DD/MM/YYYY"),
      day: date.format("ddd"),
    };
    primaryDates.push(dateObj);
  }
  return primaryDates;
}
