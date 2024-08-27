/* eslint-disable react/prop-types */
import filtredByChecked from "./helpres/filtredByChecked";
import sumByProperty from "./helpres/sumByProperty";

export default function Balance({ tasks, payments }) {
  const tasksChecked = filtredByChecked(tasks, true);
  const paymentsChecked = filtredByChecked(payments, true);
  const sumTasksChecked = sumByProperty(tasksChecked, "cost");
  const sumPaymentsChecked = sumByProperty(paymentsChecked, "amount");

  const tasksNochecked = filtredByChecked(tasks, false);
  const paymentsNochecked = filtredByChecked(payments, false);
  const sumTasksNochecked = sumByProperty(tasksNochecked, "cost");
  const sumPaymentsNochecked = sumByProperty(paymentsNochecked, "amount");

  const balance = Math.trunc((sumPaymentsChecked - sumTasksChecked)*100)/100;
  const balanceNochecked = Math.trunc((sumPaymentsNochecked - sumTasksNochecked)*100)/100;

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
