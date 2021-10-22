import cn from "classnames";
import styles from "./styles.module.css";

export default function Input({ children, size = "md", ...props }) {
  return <input className={cn(styles.wrapper, styles[`size-${size}`])} {...props} />
}