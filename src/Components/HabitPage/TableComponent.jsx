import React from "react";

const TableComponent = () => {
  // const generateDates = count => {
  //   const dates = [];
  //   const today = new Date();
  //   for (let i = count - 1; i >= 0; i--) {
  //     const date = new Date();
  //     date.setDate(today.getDate() - i);
  //     dates.push(date.toISOString().slice(0, 10));
  //   }
  //   return dates.reverse();
  // };

  // const dates = generateDates(7);

  const days = ["Today", "Yesteraday", "DBYesterday"];
  const habits = ["Workout", "Meditate", "Code", "WatchAnime"];
  return (
    <table className="w-full border border-collapse border-black text-lg">
      <thead className="w-full">
        <tr>
          <th className="font-medium border border-black p-2">Habit</th>
          {days.map((day, index) => (
            <th key={index} className="font-medium border border-black p-2">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {habits.map((habit, index) => (
          <tr key={index}>
            <th className="border font-normal border-black text-center">
              {habit}
            </th>
            {days.map((day, index) => (
              <React.Fragment key={index}>
                <td className="border border-black text-center">
                  <input type="checkbox" className="checked:bg-blue-700" />
                </td>
              </React.Fragment>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
