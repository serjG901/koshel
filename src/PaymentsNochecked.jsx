/* eslint-disable react/prop-types */
import StatPayments from "./StatPayments";
import PopoverPayment from "./PopoverPayment";

export default function PaymentsNochecked({ paymentsNochecked }) {
  let paymentDate = "";
  return (
    <details name='details-level-1'>
      <summary>Платежи неподтвержденные</summary>
      <StatPayments payments={paymentsNochecked} />
      <div className='payments'>
        {!paymentsNochecked.length ||
          paymentsNochecked
            .toSorted(
              (payment1, payment2) =>
                Date.parse(new Date(payment1.date)) -
                Date.parse(new Date(payment2.date))
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
