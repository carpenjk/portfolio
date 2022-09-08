import '../styles/globals.css';
import {ThemeProvider} from 'styled-components';
import theme from  '../theme/theme';
import Background from '../components/Background';

function MyApp({ Component, pageProps }) {
  return (<ThemeProvider theme={theme}><Background><Component {...pageProps} /></Background></ThemeProvider>);
}

export default MyApp;
