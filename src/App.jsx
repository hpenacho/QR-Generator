import { useEffect, useState } from 'react'
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material/styles'
import HeaderSection from './components/Header/HeaderSection'
import FooterSection from './components/Footer/FooterSection'
import { CssBaseline } from '@mui/material';
import darkTheme from './assets/darkTheme'
import lightTheme from './assets/lightTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';
import QrAppSection from './components/QrAppSection'

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
      <SnackbarProvider maxSnack={3}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          minHeight="100vh"
        >
          <HeaderSection theme={theme} setTheme={setTheme} />
          <QrAppSection />
          <FooterSection />
        </Grid>
      </SnackbarProvider>
    </ThemeProvider >
  );
}

export default App;
