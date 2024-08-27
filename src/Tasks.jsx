/* eslint-disable react/prop-types */
import FormAddTask from "./FormAddTask";
import PopoverTask from "./PopoverTask";

export default function Tasks({ tasks }) {
  return (
    <details>
      <summary>Затраты</summary>
      <FormAddTask />
      <div className='tasks'>
        {!tasks.length ||
          tasks
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
