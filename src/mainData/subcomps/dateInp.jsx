import css from "./subcomps.module.css";
import { useContext } from "react";
import { ItemArr } from "../../store/items-store";

export default function Date() {
  let itemObj = useContext(ItemArr);
  let dateInp = itemObj.dateInp;
  return (
    <input
      type="date"
      ref={dateInp}
      className={css.inputs}
      placeholder="Enter Task"
    ></input>
  );
}
