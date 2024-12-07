import css from "./subcomps.module.css";
import { useContext } from "react";
import { ItemArr } from "../../store/items-store";

export default function Inp() {
  let itemObj = useContext(ItemArr);
  let inpData = itemObj.inpData;
  return (
    <input
      className={css.inputs}
      type="text"
      ref={inpData}
      placeholder="Enter Task"
    ></input>
  );
}
