import styles from "./Input.module.css";

const Input = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  isSubmitted,
}) => {
  return (
    <div className={styles["form-control"]}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
      {isSubmitted && !value ? (
        <span className={styles["error-message"]}>Please enter {label}</span>
      ) : null}
    </div>
  );
};

export default Input;
