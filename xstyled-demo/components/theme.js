import { defaultTheme } from '@xstyled/styled-components'

const theme = {
  ...defaultTheme,
  colors: {
    red: '#F00',
    green: "#0F0",
    blue: "#00F"
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
}

export default theme;