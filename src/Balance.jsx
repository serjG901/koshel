/* eslint-disable react/prop-types */
export default function Balance({ sumTasks, sumPayments, sumTasksNochecked, sumPaymentsNochecked}) {

const balance = sumPayments - sumTasks;
const balanceNochecked = sumPaymentsNochecked - sumTasksNochecked;

  return (
    <div className='salary'>
      <div className='balance' data-balance={balance >= 0 ? "+" : "-"}>
        <div>{balance >= 0 ? "+" : ""}{balance}</div>
        <div>баланс</div>
      </div>
      <div className='sum-tasks'>
        <div>{sumTasks}</div>
        <div>сумма затрат</div>
      </div>
      <div className='sum-payments'>
        <div>{sumPayments}</div>
        <div>сумма денег</div>
      </div>
      <div className='balance-nochecked'>
        <div>{balanceNochecked >= 0 ? "+" : ""}{balanceNochecked}</div>
        <div>баланс неподтвержденных</div>
      </div>
      <div className='sum-tasks-nochecked'>
        <div>{sumTasksNochecked}</div>
        <div>сумма затрат неподтвержденных</div>
      </div>
      <div className='sum-payments-nochecked'>
        <div>{sumPaymentsNochecked}</div>
        <div>сумма денег неподтвержденных</div>
      </div>
    </div>
  );
}
