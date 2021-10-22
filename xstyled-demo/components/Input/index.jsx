import { x } from '@xstyled/styled-components'

const sizes = {
  sm: {
    fontSize: "sm",
    padding: "1-5m",
  },
  md: {
    fontSize: "md",
    padding: "1m",
  },
  lg: {
    fontSize: "lg",
    padding: "2m",
  },
};

export default function Input({ children, color = "red", size = "md", ...props }) {
  let styleProps = {};

  if (sizes[size]) {
    styleProps = {...styleProps, ... sizes[size]}
  }

  return (
    <x.input
      borderWidth="1px"
      borderColor="currentColor"
      borderRadius="md"
      color="red"
      outline={{ focus: "none" }}
      {...styleProps}
      {...props}
    />
  );
}