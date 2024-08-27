/* eslint-disable react/prop-types */
import filtredByChecked from "./helpres/filtredByChecked";

export default function StatTasks({ startDateRange, endDateRange, tasksAll }) {
  const tasks = filtredByChecked(tasksAll, true);
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
      <summary>
        <div>Статистика затрат</div>
        <div>
          {endDateRange - startDateRange === 0 && endDateRange
            ? ` за ${new Date(startDateRange).toLocaleDateString()}`
            : endDateRange - startDateRange > 0
            ? ` c ${new Date(
                startDateRange
              ).toLocaleDateString()} по ${new Date(
                endDateRange
              ).toLocaleDateString()}`
            : null}
        </div>
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
          <div>{tasks.length}</div>
        </div>
      </div>
    </details>
  );
}
