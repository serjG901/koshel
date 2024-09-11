/* eslint-disable react/prop-types */
import sumByProperty from "./helpers/sumByProperty";
import NumberDiv100 from "./ui/NumberDiv100";
import numberWithDot from "./helpers/numberWithDot";

export default function StatTasks({ tasks }) {
  const statTasks = Object.entries(
    Object.groupBy(tasks, ({ description }) => description)
  )
    .map((desk) => {
      return [
        desk[0],
        desk[1].reduce((acc, task) => (acc.push(task.amount), acc), []),
      ];
    })
    .sort((deskA, deskB) => {
      const nameA = deskA[0].toUpperCase();
      const nameB = deskB[0].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    .map((desk) => {
      return (
        <div key={desk[0]}>
          <div>{desk[0]}</div>
          <div>{desk[1].map((n) => numberWithDot(n)).join(", ")}</div>
          <div>
            <NumberDiv100>
              {desk[1].reduce((acc, amount) => acc + +amount, 0)}
            </NumberDiv100>
          </div>
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
          <div>
            <NumberDiv100>{sumByProperty(tasks, "amount")}</NumberDiv100>
          </div>
        </div>
      </div>
    </details>
  );
}
