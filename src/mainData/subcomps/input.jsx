import css from "./subcomps.module.css";

// eslint-disable-next-line react/prop-types
export default function Inp({ inp }) {
  return (
    <input
      className={css.inputs}
      type="text"
      ref={inp}
      placeholder="Enter Task"
    ></input>
  );
}
