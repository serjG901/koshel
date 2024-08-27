/* eslint-disable react/prop-types */
export default function StatTasks({ startDateRange, endDateRange, tasks }) {
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
          {desk[0]}: {desk[1].join(", ")} ={" "}
          {desk[1].reduce((acc, cost) => acc + +cost, 0)}
        </div>
      );
    });
  return (
    <details>
      <summary>
        Статистика затрат
        {endDateRange - startDateRange === 0 && endDateRange
          ? ` за ${new Date(startDateRange).toLocaleDateString()}`
          : endDateRange - startDateRange > 0
          ? ` c ${new Date(startDateRange).toLocaleDateString()} по ${new Date(
              endDateRange
            ).toLocaleDateString()}`
          : ""}
      </summary>
      <div className='statistic'>
        <div>(предмет/услуга: затраты = общая сумма)</div>
        {statTasks}
        <div>всего оплат: {tasks.length}</div>
      </div>
    </details>
  );
}
