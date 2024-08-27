/* eslint-disable react/prop-types */
import filtredByChecked from "./helpres/filtredByChecked";
import sumByProperty from "./helpres/sumByProperty";

export default function StatTasks({ tasks }) {
  const tasksChecked = filtredByChecked(tasks, true);
  const statTasks = Object.entries(
    Object.groupBy(tasksChecked, ({ description }) => description)
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
      <summary>
        Статистика затрат
      </summary>
      <div className='statistic'>
        <div>
          <div>предмет/услуга</div>
          <div>затраты</div>
          <div>сумма</div>
        </div>
        {statTasks}
        <div>
          <div>всего оплат</div>
          <div>{tasksChecked.length}</div>
          <div>{sumByProperty(tasksChecked, 'cost')}</div>
        </div>
      </div>
    </details>
  );
}
