import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkHabit } from "../../features/Habits/HabitsSlice";

function CustomCheckBox({ date, habit, habitId, className, ...rest }) {
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();
  function handleCheckedChange(habitId, date) {
    setIsChecked(isChecked => !isChecked);
    if (!isChecked) {
      dispatch(checkHabit(habitId, date));
    } else {
      // Todo: Uncheck Habit
      return;
    }
  }
  return (
    <input
      className={className}
      {...rest}
      type="checkbox"
      checked={isChecked}
      onChange={() => handleCheckedChange(habitId, date)}
    />
  );
}

export default CustomCheckBox;
