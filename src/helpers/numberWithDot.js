export default function numberWithDot(num) {
  num = Math.abs(num);
  if (num === 0) return "0";
  const str = num.toString();
  if (str.length === 2) return "0." + str;
  return str.slice(0, str.length - 2) + "." + str.slice(str.length - 2);
}
