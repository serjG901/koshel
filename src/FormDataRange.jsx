import { useStore } from "./store/store";

export default function FormDataRange() {
  const [setDateRange, resetDateRange] = useStore((state) => [
    state.setDateRange,
    state.resetDateRange,
  ]);

  const handleSubmitDateRange = (e) => {
    e.preventDefault();
    setDateRange(
      Date.parse(e.target["start-date"].value),
      Date.parse(e.target["end-date"].value)
    );
  };

  const handleResetDateRange = () => {
    resetDateRange();
    document.getElementById("add-date-range").reset();
  };

  return (
    <details>
      <summary>Установить период</summary>
      <form
        className='form-date-range'
        action='submit'
        id='add-date-range'
        onSubmit={handleSubmitDateRange}
      >
        <div>
          <label htmlFor='start-date'>
            <span>Начало</span>
            <input type='date' id='start-date' required />
          </label>
          <label htmlFor='end-date'>
            <span>Конец</span>
            <input type='date' id='end-date' required />
          </label>
        </div>
        <button type='submit'>Установить</button>
        <button type='button' onClick={handleResetDateRange}>
          Сбросить
        </button>
      </form>
    </details>
  );
}
