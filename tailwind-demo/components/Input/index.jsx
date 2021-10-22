import cn from "classnames";

const sizes = {
  sm: "text-sm p-1/2m",
  md: "text-md p-1m",
  lg: "text-lg p-2m",
};


export default function Input({ children, size = "md", ...props }) {
  return (
    <input className={cn(
      "border border-current rounded-md text-red",
      "focus:outline-none",
      sizes[size]
    )} {...props} />
  );
}