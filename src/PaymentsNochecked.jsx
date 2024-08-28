/* eslint-disable react/prop-types */
import StatPayments from "./StatPayments";
import PopoverPayment from "./PopoverPayment";

export default function PaymentsNochecked({ paymentsNochecked }) {
  return (
    <details>
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
              return <PopoverPayment key={payment.id} payment={payment} />;
            })}
      </div>
    </details>
  );
}
