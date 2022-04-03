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
                outlined: {
                    color: "#FFFFFF",
                },
                outlinedSecondary: {
                    color: "#FFFFFF",
                    borderColor: "#FFFFFF",
                    "&:hover": {
                        borderColor: "#1976d2",
                    }

                }

            }

        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    background: "#FFFFFF",
                    borderRadius: "4px",

                }
            }
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    color: "white",
                    "& .MuiDataGrid-row": {
                        maxHeight: "none !important"
                    }
                },


            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: "white",
                },

            }
        },

    },
    // palette: {
    //     mode: 'dark',
    //   },

});


export default theme;
