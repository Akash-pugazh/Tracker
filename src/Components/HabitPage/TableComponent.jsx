import React from "react";
import getDates from "../../Utils/dates";
const TableComponent = () => {
  const primaryDates = getDates();
  const habits = ["Workout", "Meditate", "Code", "WatchAnime", "Bat"];
  return (
    <div className="Table-Wrapper w-full h-full">
      <table className="w-full h-full text-sm">
        <caption className="text-left mb-1">Checkout here !</caption>
        <thead className="w-full">
          <tr className="w-full">
            <th className="font-medium border border-black p-2 w-[30%]">Habit</th>
            {primaryDates.map(primaryDate => (
              <th
                key={primaryDate.date}
                className="font-medium border border-black p-2 w-[10%]"
              >
                {primaryDate.day}
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
              {primaryDates.map(primaryDate => (
                <React.Fragment key={primaryDate.day}>
                  <td className="border border-black text-center">
                    <input type="checkbox" />
                  </td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
