import styles from "./button.module.css";

export const Primarybutton = ({ label, onClick, type }) => {
  return (
    <>
      <button type={type ? type : "button"} onClick={onClick}>
        {label ? label : ""}
      </button>
    </>
  );
};
