import React from "react";
import Habit from "../HabitPage/Habit";
import getDates from "../../Utils/dates";

const TableComponent = ({ habitsList }) => {
  const primaryDates = getDates();

  return (
    <div className="Table-Wrapper w-full h-full px-1 flex justify-center">
      <table className="w-full text-sm border-collapse lg:w-1/2">
        <caption className="text-left mb-2">Checkout here !</caption>
        <thead>
          <tr className="w-full">
            <th className="font-medium w-[15%] lg:w-[30%] border border-black">
              <div className="w-40 text-center m-auto p-2 h-auto">Habit</div>
            </th>
            {primaryDates.map(primaryDate => (
              <th
                key={primaryDate.date}
                className="font-medium p-2 border border-black lg:p-4 w-[10%]"
              >
                {primaryDate.day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full">
          {habitsList.map(el => (
            <Habit
              key={el.id}
              habit={el.habit}
              habitId={el.id}
              habitCheckedDates={el.checkedDates}
              primaryDates={primaryDates}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
