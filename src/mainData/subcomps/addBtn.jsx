import css from "./subcomps.module.css";
import { useContext } from "react";
import { ItemArr } from "../../store/items-store";

export default function Btn() {
  let itemObj = useContext(ItemArr);
  let add = itemObj.Addfunc;
  return (
    <button onClick={add} className={css.addBtn}>
      Add
    </button>
  );
}
