/* eslint-disable react/prop-types */
import sumByProperty from "./helpers/sumByProperty";

export default function StatTasks({ payments }) {
  const statPayments = Object.entries(
    Object.groupBy(payments, ({ description }) => description)
  )
    .map((desk) => {
      return [
        desk[0],
        desk[1].reduce((acc, payment) => (acc.push(payment.amount), acc), []),
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
          <div>{desk[1].join(", ")}</div>
          <div>{desk[1].reduce((acc, amount) => acc + +amount, 0)}</div>
        </div>
      );
    });

  return (
    <details>
      <summary>Статистика платежей</summary>
      <div className='statistic'>
        <div>
          <div>За что / наличка / безнал</div>
          <div>платежи</div>
          <div>сумма</div>
        </div>
        {statPayments}
        <div>
          <div>всего платежей:</div>
          <div>{payments.length}</div>
          <div>{sumByProperty(payments, "amount")}</div>
        </div>
      </div>
    </details>
  );
}
