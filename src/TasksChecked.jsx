/* eslint-disable react/prop-types */
import StatTasks from "./StatTasks";
import PopoverTask from "./PopoverTask";

export default function TasksChecked({ tasksChecked }) {
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
              return <PopoverTask key={task.id} task={task} />;
            })}
      </div>
    </details>
  );
}
