/* eslint-disable react/prop-types */
import StatTasks from "./StatTasks";
import PopoverTask from "./PopoverTask";

export default function TasksChecked({ tasksChecked }) {
  let taskDate = 0;
  return (
    <details>
      <summary>Затраты</summary>
      <StatTasks tasks={tasksChecked} />
      <div className='tasks'>
        {!tasksChecked.length ||
          tasksChecked
            .toSorted(
              (task1, task2) =>
                Date.parse(new Date(task2.date)) -
                Date.parse(new Date(task1.date))
            )
            .map((task) => {
              let first = false;
              if (!taskDate) (taskDate = task.date), (first = true);
              let equal = task.date === taskDate;
              return equal ? (
                <>
                  {first && <div className='break-line'>{task.date}</div>}
                  <PopoverTask key={task.id} task={task} />
                </>
              ) : (
                <>
                  <div className='break-line'>{task.date}</div>
                  <PopoverTask key={task.id} task={task} />
                </>
              );
            })}
      </div>
    </details>
  );
}
