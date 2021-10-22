import styles from "./styles.module.css";
import cn from "classnames";

export default function Button({ children, color = "red", size = "md", ...props }) {
  return (
    <button
      className={cn(
        styles.wrapper,
        styles[`color-${color}`],
        styles[`size-${size}`]
      )}
      {...props}
    >
      {children}
    </button>
  );
}