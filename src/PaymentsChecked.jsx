/* eslint-disable react/prop-types */
import StatPayments from "./StatPayments";
import PopoverPayment from "./PopoverPayment";

export default function PaymentsChecked({ paymentsChecked }) {
  let paymentDate = "";
  return (
    <details name='details-level-1'>
      <summary>Платежи</summary>
      <StatPayments payments={paymentsChecked} />
      <div className='payments'>
        {!paymentsChecked.length ||
          paymentsChecked
            .toSorted(
              (payment1, payment2) =>
                Date.parse(new Date(payment2.date)) -
                Date.parse(new Date(payment1.date))
            )
            .map((payment) => {
              let first = false;
              if (!paymentDate) (paymentDate = payment.date), (first = true);
              let equal = payment.date === paymentDate;
              if (!equal) paymentDate = payment.date;
              return equal ? (
                <>
                  {first && <div className='break-line'>{payment.date}</div>}
                  <PopoverPayment key={payment.id} payment={payment} />
                </>
              ) : (
                <>
                  <div className='break-line'>{payment.date}</div>
                  <PopoverPayment key={payment.id} payment={payment} />
                </>
              );
            })}
      </div>
    </details>
  );
}
