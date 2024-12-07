import { useRef, useState } from "react";
import Head from "./mainData/heading";
import "./App.css";
import { ItemArr } from "./store/items-store";
import NewItems from "./mainData/newItems";

function App() {
  const inpData = useRef("");
  const dateInp = useRef("");
  const [itemArr, setitemArr] = useState([]);
  const Addfunc = () => {
    let newObj = {
      task: inpData.current.value,
      due: dateInp.current.value,
      delete: "Delete",
    };
    let newArr = [...itemArr, newObj];
    setitemArr(newArr);
  };
  const delFunc = (idx) => {
    let newArr = itemArr.filter((_, x) => x !== idx);
    setitemArr(newArr);
  };
  return (
    <ItemArr.Provider
      value={{
        itemArr: itemArr,
        Addfunc: Addfunc,
        delFunc: delFunc,
        inpData: inpData,
        dateInp: dateInp,
      }}
    >
      <Head />
      <NewItems />
    </ItemArr.Provider>
  );
}

export default App;
