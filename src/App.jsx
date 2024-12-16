import { useReducer } from "react";
import Head from "./mainData/heading";
import "./App.css";
import { ItemArr } from "./store/items-store";
import NewItems from "./mainData/newItems";

const itemsReducer = (currItem, action) => {
  let itemArr = currItem;
  if (action.type === "NEW_ITEM") {
    itemArr = [
      ...itemArr,
      {
        task: action.payload.inp,
        due: action.payload.date,
        del: action.payload.del,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    itemArr = itemArr.filter((_, x) => x !== action.payload.idx);
  }
  return itemArr;
};

function App() {
  const [itemArr, dispatchItemArr] = useReducer(itemsReducer, []);
  const Addfunc = (inp, date) => {
    let newObj = {
      type: "NEW_ITEM",
      payload: {
        inp: inp.current.value,
        date: date.current.value,
        del: "Delete",
      },
    };
    dispatchItemArr(newObj);
  };
  const delFunc = (idx) => {
    const newObj = {
      type: "DELETE_ITEM",
      payload: {
        idx: idx,
      },
    };
    dispatchItemArr(newObj);
  };
  return (
    <ItemArr.Provider
      value={{
        itemArr: itemArr,
        Addfunc: Addfunc,
        delFunc: delFunc,
      }}
    >
      <Head />
      <NewItems />
    </ItemArr.Provider>
  );
}

export default App;
