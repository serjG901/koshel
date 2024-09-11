/* eslint-disable react/prop-types */
import numberWithDot from "../helpers/numberWithDot";

export default function NumberDiv100({ children }) {
  return <>{numberWithDot(children)}</>;
}
