/* eslint-disable react/prop-types */
import sumByProperty from "./helpers/sumByProperty";
import NumberDiv100 from "./ui/NumberDiv100";

export default function Balance({
  tasksChecked,
  paymentsChecked,
  tasksNochecked,
  paymentsNochecked,
}) {
  const sumTasksChecked = sumByProperty(tasksChecked, "amount");
  const sumPaymentsChecked = sumByProperty(paymentsChecked, "amount");

  const sumTasksNochecked = sumByProperty(tasksNochecked, "amount");
  const sumPaymentsNochecked = sumByProperty(paymentsNochecked, "amount");

  const balance = sumPaymentsChecked - sumTasksChecked;
  const balanceNochecked = sumPaymentsNochecked - sumTasksNochecked;

  return (
    <div className='salary'>
      <div className='balance' data-balance={balance >= 0 ? "+" : "-"}>
        <div>
          {balance >= 0 ? "+" : "-"}
          <NumberDiv100>{balance}</NumberDiv100>
        </div>
        <div>баланс</div>
      </div>
      <div className='sum-tasks'>
        <div>
          -<NumberDiv100>{sumTasksChecked}</NumberDiv100>
        </div>
        <div>сумма затрат</div>
      </div>
      <div className='sum-payments'>
        <div>
          +<NumberDiv100>{sumPaymentsChecked}</NumberDiv100>
        </div>
        <div>сумма денег</div>
      </div>
      <div className='balance-nochecked'>
        <div>
          {balanceNochecked >= 0 ? "+" : "-"}
          <NumberDiv100>{balanceNochecked}</NumberDiv100>
        </div>
        <div>баланс неподтвержденных</div>
      </div>
      <div className='sum-tasks-nochecked'>
        <div>
          -<NumberDiv100>{sumTasksNochecked}</NumberDiv100>
        </div>
        <div>сумма затрат неподтвержденных</div>
      </div>
      <div className='sum-payments-nochecked'>
        <div>
          +<NumberDiv100>{sumPaymentsNochecked}</NumberDiv100>
        </div>
        <div>сумма денег неподтвержденных</div>
      </div>
    </div>
  );
}
