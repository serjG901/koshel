import { useStore } from "./store/store";

export default function FormAddPayment() {
  const [addPayment] = useStore((state) => [state.addPayment]);

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    addPayment({
      date: e.target["payment-date"].value,
      amount: e.target["payment-amount"].value * 100,
      description: e.target["payment-description"].value,
      confirm: e.target["payment-confirm"].checked,
    });
    document.getElementById("add-payment").reset();
  };

  return (
    <details>
      <summary>Добавить платеж</summary>
      <form action='submit' id='add-payment' onSubmit={handleSubmitPayment}>
        <div>
          <label htmlFor='payment-date'>
            <span>Дата</span>
            <input type='date' id='payment-date' required />
          </label>
          <label htmlFor='payment-amount'>
            <span>Сумма</span>
            <input
              type='number'
              id='payment-amount'
              required
              step='0.01'
              min='0.01'
            />
          </label>
          <label htmlFor='payment-description'>
            <span>За что / наличка / безнал</span>
            <input type='text' id='payment-description' required />
          </label>
          <label htmlFor='payment-confirm'>
            Подтверждено
            <input type='checkbox' id='payment-confirm' checked />
          </label>
        </div>
        <button type='submit'>Добавить платеж</button>
      </form>
    </details>
  );
}
