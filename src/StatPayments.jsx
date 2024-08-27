/* eslint-disable react/prop-types */
import filtredByChecked from "./helpres/filtredByChecked";
import sumByProperty from "./helpres/sumByProperty";

export default function StatTasks({
  payments
}) {
  const paymentsChecked = filtredByChecked(payments, true);
  const statPayments = Object.entries(
    Object.groupBy(paymentsChecked, ({ description }) => description)
  )
    .map((desk) => {
      return [
        desk[0],
        desk[1].reduce((acc, payment) => (acc.push(payment.amount), acc), []),
      ];
    })
    .map((desk) => {
      return (
        <div key={desk[0]}>
          <div>{desk[0]}</div>
          <div>{desk[1].join(", ")}</div>
          <div>{desk[1].reduce((acc, cost) => acc + +cost, 0)}</div>
        </div>
      );
    });

  return (
    <details>
      <summary>
        Статистика платежей
      </summary>
      <div className='statistic'>
        <div>
          <div>За что / наличка / безнал</div>
          <div>платежи</div>
          <div>сумма</div>
        </div>
        {statPayments}
        <div>
          <div>всего платежей:</div>
          <div>{paymentsChecked.length}</div>
          <div>{sumByProperty(paymentsChecked, 'amount')}</div>
        </div>
      </div>
    </details>
  );
}
