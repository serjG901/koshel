/* eslint-disable react/prop-types */
import StatPayments from "./StatPayments";
import PopoverPayment from "./PopoverPayment";

export default function PaymentsChecked({ paymentsChecked }) {
  return (
    <details>
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
              return <PopoverPayment key={payment.id} payment={payment} />;
            })}
      </div>
    </details>
  );
}
