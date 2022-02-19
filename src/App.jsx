import { useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Header from './components/HeaderSection/Header'
import Footer from './components/FooterSection/Footer'
import { CssBaseline } from '@mui/material';
import darkTheme from './assets/theme/darkTheme'
import lightTheme from './assets/theme/lightTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';
import BuildQrContainer from './components/BuildQRSection/BuildQrContainer'

const App = () => {
  const [theme, setTheme] = useState(darkTheme)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });

  useEffect(() => {
    const userTheme = window.localStorage.getItem('theme')
    if (userTheme) {
      userTheme === 'dark' ? setTheme(darkTheme) : setTheme(lightTheme)
      return;
    }
    else {
      prefersDarkMode ? setTheme(darkTheme) : setTheme(lightTheme)
      window.localStorage.setItem('theme', prefersDarkMode ? 'dark' : 'light')
    }
  }, [prefersDarkMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        minHeight="100vh"
      >
        <Header theme={theme} setTheme={setTheme} />
        <BuildQrContainer />
        <Footer />
      </Grid>
    </ThemeProvider >
  );
}

export default App;
