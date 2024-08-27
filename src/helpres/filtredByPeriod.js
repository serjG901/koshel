export default function filtredByPeriod(massAll, startDateRange, endDateRange) {
  const mass =
    endDateRange - startDateRange < 0 || !endDateRange
      ? massAll
      : massAll.filter((task) => {
          console.log(startDateRange, Date.parse(task.date), endDateRange);
          console.log(
            Date.parse(task.date) >= startDateRange &&
              Date.parse(task.date) <= endDateRange
          );
          return (
            Date.parse(task.date) >= startDateRange &&
            Date.parse(task.date) <= endDateRange
          );
        });

  return mass;
}
