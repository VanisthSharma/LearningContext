import Inp from "./subcomps/input";
import Date from "./subcomps/dateInp";
import Btn from "./subcomps/addBtn";
import css from "./subcomps/subcomps.module.css";

export default function Head() {
  return (
    <div className={css.container}>
      <Inp />
      <Date />
      <Btn />
    </div>
  );
}
