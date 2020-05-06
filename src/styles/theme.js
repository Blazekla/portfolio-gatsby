const theme = {
  palette: {
    primary: { main: "#283c59", contrastText: "#ccd6f6" },
    secondary: { main: "#64ffda", contrastText: "#000000" },
    background: {
      paper: "#546686",
      // default: "#020c1b"
      default: "#333",
    },
    text: {
      primary: "#ccd6f6",
      secondary: "#64ffda",
    },
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
  //Other colors to use #cee1d5, #b5a282, #e0462b

  //     Alternative colors
  // Rhino	#324763	Primary
  // Timber Green	#1c3137	Info
  // Goblin	#449056	Success
  // Ochre	#c2801e	Warning
  // Pomegranate	#f44336	Danger
}

export default theme
