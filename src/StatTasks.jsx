/* eslint-disable react/prop-types */
import sumByProperty from "./helpers/sumByProperty";

export default function StatTasks({ tasks }) {
  const statTasks = Object.entries(
    Object.groupBy(tasks, ({ description }) => description)
  )
    .map((desk) => {
      return [
        desk[0],
        desk[1].reduce((acc, task) => (acc.push(task.cost), acc), []),
      ];
    })
    .map((desk) => {
      return (
        <div key={desk[0]}>
          <div>{desk[0]}</div>
          <div>{desk[1].join(", ")}</div>
          <div> {desk[1].reduce((acc, cost) => acc + +cost, 0)}</div>
        </div>
      );
    });
  return (
    <details>
      <summary>Статистика затрат</summary>
      <div className='statistic'>
        <div>
          <div>предмет/услуга</div>
          <div>затраты</div>
          <div>сумма</div>
        </div>
        {statTasks}
        <div>
          <div>всего оплат</div>
          <div>{tasks.length}</div>
          <div>{sumByProperty(tasks, "cost")}</div>
        </div>
      </div>
    </details>
  );
}
