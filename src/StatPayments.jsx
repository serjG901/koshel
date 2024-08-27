/* eslint-disable react/prop-types */
import filtredByChecked from "./helpres/filtredByChecked";

export default function StatTasks({
  startDateRange,
  endDateRange,
  paymentsAll,
}) {
  const payments = filtredByChecked(paymentsAll, true);
  const statPayments = Object.entries(
    Object.groupBy(payments, ({ description }) => description)
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
          <div>За что / наличка / безнал</div>
          <div>платежи</div>
          <div>сумма</div>
        </div>
        {statPayments}
        <div>
          <div>всего платежей:</div>
          <div>{payments.length}</div>
        </div>
      </div>
    </details>
  );
}
