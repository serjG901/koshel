export default function filtredByProperty(massAll, property) {
  const mass = massAll.reduce((acc, a) => acc + +a[property], 0);
  return Math.trunc(mass*100)/100;
}
