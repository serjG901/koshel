/* eslint-disable react/prop-types */
import sumByProperty from "./helpers/sumByProperty";

export default function Balance({
  tasksChecked,
  paymentsChecked,
  tasksNochecked,
  paymentsNochecked,
}) {
  const sumTasksChecked = sumByProperty(tasksChecked, "cost") / 100;
  const sumPaymentsChecked = sumByProperty(paymentsChecked, "amount") / 100;

  const sumTasksNochecked = sumByProperty(tasksNochecked, "cost") / 100;
  const sumPaymentsNochecked = sumByProperty(paymentsNochecked, "amount") / 100;

  const balance = (sumPaymentsChecked - sumTasksChecked) / 100;
  const balanceNochecked = (sumPaymentsNochecked - sumTasksNochecked) / 100;

  return (
    <div className='salary'>
      <div className='balance' data-balance={balance >= 0 ? "+" : "-"}>
        <div>
          {balance >= 0 ? "+" : ""}
          {balance}
        </div>
        <div>баланс</div>
      </div>
      <div className='sum-tasks'>
        <div>-{sumTasksChecked}</div>
        <div>сумма затрат</div>
      </div>
      <div className='sum-payments'>
        <div>+{sumPaymentsChecked}</div>
        <div>сумма денег</div>
      </div>
      <div className='balance-nochecked'>
        <div>
          {balanceNochecked >= 0 ? "+" : ""}
          {balanceNochecked}
        </div>
        <div>баланс неподтвержденных</div>
      </div>
      <div className='sum-tasks-nochecked'>
        <div>-{sumTasksNochecked}</div>
        <div>сумма затрат неподтвержденных</div>
      </div>
      <div className='sum-payments-nochecked'>
        <div>+{sumPaymentsNochecked}</div>
        <div>сумма денег неподтвержденных</div>
      </div>
    </div>
  );
}
