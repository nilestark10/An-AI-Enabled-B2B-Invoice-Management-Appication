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

                },

            },

        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    background: "#FFFFFF",
                    borderRadius: "4px",

                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    color: "white",
                },
            },
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    color: "white",
                    border: "0px",
                },
                columnSeparator: {
                    visibility: "hidden",
                },
                row: {
                    maxHeight: "none !important"
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
});


export default theme;
