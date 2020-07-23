const theme = {
  typography: {
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
  },
  palette: {
    primary: { main: "#002333", contrastText: "#ffffff" },
    secondary: { main: "#64ffda", contrastText: "#000000" },
    background: {
      // paper: "#546686",
      paper: "#002333",
      default: "#001823",
    },
    text: {
      primary: "#ffffff",
      secondary: "#64ffda",
    },
  },

  props: {
    // MuiButtonBase: {
    //   // disableRipple: true,
    // },
  },
  overrides: {
    MuiButton: {
      root: {
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0)",
          color: "#64ffda",
        },
      },
      textPrimary: {
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0)",
        },
      },
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0)",
          color: "#64ffda",
        },
      },
    },
    MuiListItem: {
      button: {
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0)",
          color: "#64ffda",
        },
      },
    },
  },
}

export default theme
