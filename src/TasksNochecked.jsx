/* eslint-disable react/prop-types */
import StatTasks from "./StatTasks";
import PopoverTask from "./PopoverTask";

export default function TasksNochecked({ tasksNochecked }) {
  return (
    <details>
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
              return <PopoverTask key={task.id} task={task} />;
            })}
      </div>
    </details>
  );
}
