import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      red: '#F00',
      green: '#0F0',
      blue: '#00F',
    },
    space: {
      '0-5m': '4px',
      '1m': '8px',
      '2m': '16px',
      '3m': '24px',
      '4m': '32px',
      '5m': '40px',
    },
    fontSizes: {
      sm: "12px",
      md: "16px",
      lg: "20px",
    },
    radii: {
      sm: '2px',
      md: '4px',
      lg: '8px',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    br: (value) => ({ borderRadius: value }),
    p: (value) => ({ padding: value }),
    pl: (value) => ({ paddingLeft: value }),
    pr: (value) => ({ paddingRight: value }),
    pt: (value) => ({ paddingTop: value }),
    pb: (value) => ({ paddingBottom: value }),
    px: (value) => ({ paddingLeft: value, paddingRight: value }),
    py: (value) => ({ paddingTop: value, paddingBottom: value }),
  },
});
