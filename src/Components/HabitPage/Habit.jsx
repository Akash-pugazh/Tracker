import React from "react";
import CustomCheckBox from "./CustomCheckBox";
function Habit({ habit, habitId, habitCheckedDates, primaryDates }) {
  function computeChecked(primaryDate) {
    const dateIndex = habitCheckedDates.indexOf(primaryDate);
    if (dateIndex <= -1) return false;
    return true;
  }

  return (
    <tr>
      <th className="overflow-hidden text- border border-black font-semibold">
        <div className="w-40 text-center m-auto overflow-hidden">{habit}</div>
      </th>
      {primaryDates.map((primaryDate, index) => (
        <td key={index} className="py-4 border border-black text-center">
          <CustomCheckBox
            checked={computeChecked(primaryDate.date)}
            habit={habit}
            habitId={habitId}
            date={primaryDate.date}
          />
        </td>
      ))}
    </tr>
  );
}

export default Habit;
