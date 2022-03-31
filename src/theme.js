import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                positionStatic: {
                    backgroundColor: "rgb(45,67,81)",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: "#15AEF1",
                },
                outlined:{
                    color:"#FFFFFF",
                },
                outlinedSecondary:{
                    color:"#FFFFFF",
                    borderColor:"#FFFFFF",
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    background: "#FFFFFF",
                    borderRadius:"4px",
        
                }
            }
        },
        

    },
    // palette: {
    //     mode: 'dark',
    //   },

});


export default theme;
