import cn from "classnames";

const colors = {
  red: "text-red",
  blue: "text-blue",
  green: "text-green",
};

const sizes = {
  sm: "text-sm p-1/2m",
  md: "text-md p-1m",
  lg: "text-lg p-2m",
};

export default function Button({ children, color = "red", size = "md", ...props }) {
  return (
    <button
      className={cn(
        "appearance-none border border-current rounded-md bg-transparent",
        "hover:opacity-50",
        colors[color],
        sizes[size]
      )}
      {...props}
    >
      {children}
    </button>
  );
}