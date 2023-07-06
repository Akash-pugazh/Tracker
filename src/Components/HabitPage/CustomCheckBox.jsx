import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkHabit, unCheckHabit } from "../../features/Habits/HabitsSlice";

function CustomCheckBox({ date, checked, habit, habitId, className, ...rest }) {
  const [isChecked, setIsChecked] = useState(checked);
  const dispatch = useDispatch();

  console.log(date);
  function handleCheckedChange(habitId, date) {
    setIsChecked(isChecked => !isChecked);
    if (!isChecked) {
      dispatch(checkHabit(habitId, date));
    } else {
      dispatch(unCheckHabit(habitId, date));
    }
  }
  return (
    <input
      className={className}
      {...rest}
      type="checkbox"
      checked={checked}
      onChange={() => handleCheckedChange(habitId, date)}
    />
  );
}

export default CustomCheckBox;
