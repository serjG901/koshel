/* eslint-disable react/prop-types */
export default function StatTasks({ startDateRange, endDateRange, payments }) {
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
          {desk[0]}: {desk[1].join(", ")} ={" "}
          {desk[1].reduce((acc, cost) => acc + +cost, 0)}
        </div>
      );
    });

  return (
    <details>
      <summary>
        Статистика платежей
        {endDateRange - startDateRange === 0 && endDateRange
          ? ` за ${new Date(startDateRange).toLocaleDateString()}`
          : endDateRange - startDateRange > 0
          ? ` c ${new Date(startDateRange).toLocaleDateString()} по ${new Date(
              endDateRange
            ).toLocaleDateString()}`
          : ""}
      </summary>
      <div className='statistic'>
        <div>(За что / наличка / безнал: платежи = сумма)</div>
        {statPayments}
        <div>всего платежей: {payments.length}</div>
      </div>
    </details>
  );
}
