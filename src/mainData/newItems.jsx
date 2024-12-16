import { useContext } from "react";
import { ItemArr } from "../store/items-store";
export default function NewItems() {
  const itemObj = useContext(ItemArr);
  let itemArr = itemObj.itemArr;
  let delFunc = itemObj.delFunc;
  return (
    <>
      {itemArr.length > 0 ? (
        itemArr.map((item, index) => (
          <div className="cont" key={index}>
            <h2> {item.task} </h2>
            <h2> {item.due} </h2>
            <button onClick={() => delFunc(index)}>{item.del}</button>
          </div>
        ))
      ) : (
        <center>Add new items to Todo</center>
      )}
    </>
  );
}
