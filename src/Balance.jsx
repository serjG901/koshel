/* eslint-disable react/prop-types */
export default function Balance({balance, sumTasks, sumPayments}) {
    return (
        <div className='salary'>
        <div className='balance' data-balance={balance >= 0 ? "+" : "-"}>
          <div>{balance}</div>
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
      </div>
    );
}