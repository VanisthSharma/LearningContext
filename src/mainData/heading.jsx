import Inp from "./subcomps/input";
import Date from "./subcomps/dateInp";
import css from "./subcomps/subcomps.module.css";
import { useContext, useRef } from "react";
import { ItemArr } from "../store/items-store";

export default function Head() {
  let inp = useRef("");
  let date = useRef("");

  let itemObj = useContext(ItemArr);
  let add = itemObj.Addfunc;
  return (
    <div className={css.container}>
      <Inp inp={inp} />
      <Date date={date} />
      <button
        onClick={() => {
          add(inp, date);
        }}
        className={css.addBtn}
      >
        Add
      </button>
    </div>
  );
}
