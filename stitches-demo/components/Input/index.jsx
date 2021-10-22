import { styled } from '../../stitches.config';

export default function Input({ children, size = "md", ...props }) {
  return <StyledInput {...props} />
}


const StyledInput = styled('input', {
  border: "1px solid currentColor",
  br:"$md",
  background: "transparent",
  color: "$red",
  "&:focus": {
    outline: "none",
  },
  variants: {
    size: {
      sm: {
        p: "$0-5m",
        fontSize: "$sm",
      },
      md: {
        p: "$1m",
        fontSize: "$md",
      },
      lg: {
        p: "$2m",
        fontSize: "$lg",
      },
    },
  },
});

StyledInput.defaultProps = {
  size: "md",
}