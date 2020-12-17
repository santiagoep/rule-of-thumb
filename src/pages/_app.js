import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from '@assets/styles/themes/light';
import BaseStyles from '@components/BaseStyles/BaseStyles';

const RootComponent = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <BaseStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);

RootComponent.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.instanceOf(Array)
  ]).isRequired
};

export default RootComponent;
