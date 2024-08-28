/* eslint-disable react/prop-types */
import { useStore } from "./store/store";

export default function PopoverPayment({ payment }) {
  const [updatePayment] = useStore((state) => [state.updatePayment]);

  const handleSubmitPaymentUpdate = (e, id) => {
    e.preventDefault();
    updatePayment({
      id,
      date: e.target["payment-date"].value,
      amount: e.target["payment-amount"].value,
      description: e.target["payment-description"].value,
      confirm: e.target["payment-confirm"].checked,
    });
    document.getElementById(`update-popover-${id}`).hidePopover();
  };

  return (
    <div key={payment.id} className='payment'>
      <div
        popover='auto'
        id={`update-popover-${payment.id}`}
        className='popover'
      >
        <form
          action='submit'
          id='update-payment'
          onSubmit={(e) => handleSubmitPaymentUpdate(e, payment.id)}
        >
          <div>
            <label htmlFor='payment-date'>
              <span>Дата</span>
              <input
                type='date'
                id='payment-date'
                required
                defaultValue={payment.date}
              />
            </label>
            <label htmlFor='payment-amount'>
              <span>Сумма</span>
              <input
                type='number'
                id='payment-amount'
                required
                step='0.01'
                min='0.01'
                defaultValue={payment.amount}
              />
            </label>
            <label htmlFor='payment-description'>
              <span>За что / наличка / безнал</span>
              <input
                type='text'
                id='payment-description'
                required
                defaultValue={payment.description}
              />
            </label>
            <label htmlFor='payment-confirm'>
              Подтверждено
              <input
                type='checkbox'
                id='payment-confirm'
                defaultChecked={payment.confirm}
              />
            </label>
          </div>
          <button type='submit'>Обновить платеж</button>
        </form>
      </div>
      <div className='date'>{payment.date}</div>
      <div className='amount'>{payment.amount}</div>
      <div className='description'>{payment.description}</div>
      <div
        className='confirm'
        data-confirm={payment.confirm ? "Confirm" : "Not confirm"}
      >
        {payment.confirm ? "Подтвержден" : "Не подтвержден"}
      </div>
      <button className='update' popovertarget={`update-popover-${payment.id}`}>
        Обновить
      </button>
    </div>
  );
}
