import { styled } from '../../stitches.config';

export default function Button({ children, ...props }) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled('button', {
  appearance: "none",
  border: "1px solid currentColor",
  br: `$md`,
  background: "transparent",
  '&:hover': {
    opacity: 0.5,
  },
  variants: {
    color: {
      red: {
        color: "$red"
      },
      blue: {
        color: "$blue"
      },
      green: {
        color: "$green",
      },
    },
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

Button.defaultProps = {
  color: "red",
  size: "md",
}