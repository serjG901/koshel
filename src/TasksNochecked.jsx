/* eslint-disable react/prop-types */
import StatTasks from "./StatTasks";
import PopoverTask from "./PopoverTask";

export default function TasksNochecked({ tasksNochecked }) {
  let taskDate = "";
  return (
    <details name='details-level-1'>
      <summary>Затраты не подтвержденные</summary>
      <StatTasks tasks={tasksNochecked} />
      <div className='tasks'>
        {!tasksNochecked.length ||
          tasksNochecked
            .toSorted(
              (task1, task2) =>
                Date.parse(new Date(task1.date)) -
                Date.parse(new Date(task2.date))
            )
            .map((task) => {
              let first = false;
              if (!taskDate) (taskDate = task.date), (first = true);
              let equal = task.date === taskDate;
              if (!equal) taskDate = task.date;
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
