import { createTheme } from '@mui/material/styles';

const darktheme = createTheme(
    {
        palette: {
            mode: 'dark',
            primary: {
                main: '#50abff',
                mainGradient: "background-image: linear-gradient(to right, #243949 0%, #517fa4 100%)"
            },
            secondary: {
                main: '#EF9C00',
            },
            background: {
                default: '#0f0f0f',
                paper: '#0c0c0c', //rgba(0, 0, 0, 0.40)
            },
            textColor: {
                default: '#E8E9F6',
                weaker: '#B8B8B8',
                subdued: '#5E5E5E'
            },
            detailsModal: {
                main: '#1e1e1e',
                section: '#2a2a2a',
            },
            alertModal: {
                main: '#1e1e1e',
                secondary: '#2a2a2a'
            },
            logoTitle: {
                textMain: '#EF9C00',
                textSub: '#595959'
            },
            aboutTitle: {
                main: '#B9B9B9'
            }
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        transition: "transform 0.17s ease-in-out",
                        "&:hover": { transform: "scale3d(1.16, 1.16, 1)", background: 'none', },
                    },
                }
            },
            MuiTabs: {
                styleOverrides: {
                    indicator: {
                        backgroundColor: '#50abff'
                    }
                }
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        "&.Mui-selected": { color: '#50abff' }
                    }
                }
            }
        },
    })

export default darktheme;