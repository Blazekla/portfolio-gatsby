const theme = {
  palette: {
    primary: { main: "#002333", contrastText: "#ffffff" },
    secondary: { main: "#64ffda", contrastText: "#000000" },
    // secondary: { main: "#00ff84", contrastText: "#000000" },
    // primary: { main: "#283c59", contrastText: "#ccd6f6" },
    background: {
      // paper: "#546686",
      paper: "#002333",
      default: "#333"
    },
    text: {
      primary: "#ffffff",
      secondary: "#64ffda"
    }
    // action: {
    //   hoverOpacity: 0.4
    // }
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
          color: "#64ffda"
        }
      },
      textPrimary: {
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0)"
        }
      }
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0)",
          color: "#64ffda"
        }
      }
    },
    MuiListItem: {
      button: {
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0)",
          color: "#64ffda"
        }
      }
    }
  }
}

export default theme
