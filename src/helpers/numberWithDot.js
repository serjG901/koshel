export default function numberWithDot(number) {
  const str = number.toString();
  if (str.length === 2) return "0." + str;
  return str.slice(0, str.length - 2) + "." + str.slice(str.length - 2);
}
