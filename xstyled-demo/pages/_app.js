import {
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'

import theme from "../components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
