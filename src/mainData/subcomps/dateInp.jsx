import css from "./subcomps.module.css";

// eslint-disable-next-line react/prop-types
export default function Date({ date }) {
  return (
    <input
      type="date"
      ref={date}
      className={css.inputs}
      placeholder="Enter Task"
    ></input>
  );
}
