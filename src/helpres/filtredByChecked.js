export default function filtredByChecked(massAll, checked) {
  const mass = massAll.filter((task) => task.confirm === checked);
  return mass;
}
