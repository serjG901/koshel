/* eslint-disable react/prop-types */
import FormAddPayment from "./FormAddPayment";
import PopoverPayment from "./PopoverPayment";

export default function Payments({ payments }) {
  return (
    <details>
      <summary>Платежи</summary>
      <FormAddPayment />
      <div className='payments'>
        {!payments.length ||
          payments
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
