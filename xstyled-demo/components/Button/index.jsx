import { x } from '@xstyled/styled-components'

const colors = {
  red: {
    color: "red"
  },
  blue: {
    color: "blue",
  },
  green: {
    color: "green",
  },
};

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

export default function Button({ children, color = "red", size = "md", ...props }) {
  let styleProps = {};

  if (colors[color]) {
    styleProps = {...styleProps, ... colors[color]}
  }

  if (sizes[size]) {
    styleProps = {...styleProps, ... sizes[size]}
  }

  return (
    <x.button
      appearance="none"
      borderWidth="1px"
      borderColor="currentColor"
      background="transparent"
      borderRadius="md"
      opacity={{ hover: 0.5 }}
      {...styleProps}
      {...props}
    >
      {children}
    </x.button>
  );
}