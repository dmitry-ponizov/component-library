import { createMuiTheme } from '@material-ui/core/styles'

interface Custom {
  lightTextColor: string
  logoBg: string
  sideBarBg: string
  mainBg: string
  sideBarColor: string
  mobUserProfileBg: string
  sideBarWidth: number
  colorSuccess: string
  colorWarning: string
  headerHeight: number
  footerHeight: number
  borderColor: string
  footerBg: string
  stepBorderColor: string
  stepHeaderBg: string
  inactiveColor: string
  activeColor: string
  borderTableViewColor: string
  borderTimeLine: string
  addTaskColor: string
  primaryLight: string
  sidebarDividerColor: string
  activeElementsColor: string
  activeElementsColorText: string
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: Custom
  }
  interface ThemeOptions {
    custom: Custom
  }
}

const headerHeight = 48
const footerHeight = 32
const paletteSecondaryMain = '#666666'
const borderColor = '#eeeef5'
export const md = '@media (min-width:960px)'
export const sm = '@media (min-width:600px)'
export const lg = '@media (min-width:1280px)'
export const xl = '@media (min-width:1920px)'
export const mobileBreakpoint = 960

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#227DFF',
      contrastText: '#ffffff',
    },
    secondary: {
      main: paletteSecondaryMain,
    },
    error: {
      main: '#dc0020',
      light: 'rgba(249, 197, 205, 0.68)',
    },
    warning: {
      main: '#fcad2f',
    },
    success: {
      main: '#66bb6a',
    },
    text: {
      primary: '#000',
    },
  },
  spacing: 5,
  typography: {
    htmlFontSize: 16,
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  custom: {
    lightTextColor: '#ffffff',
    logoBg: '#10205C',
    sideBarBg: '#10205C', //  change to rgb
    mainBg: '#f9f9fc',
    sideBarColor: '#aab1cb',
    mobUserProfileBg: '#2c3d7f',
    sideBarWidth: 241,
    colorSuccess: '#1dcfbb',
    colorWarning: '#fcad2f',
    headerHeight: headerHeight,
    footerHeight: footerHeight,
    borderColor: '#d5d5d5',
    footerBg: '#F1F1F6',
    stepBorderColor: '#D2D3DC',
    stepHeaderBg: '#F6F7F8',
    inactiveColor: '#AAB1CB',
    activeColor: '#F9F9FC',
    borderTableViewColor: borderColor,
    borderTimeLine: '#d4d4d4',
    addTaskColor: '#949494',
    primaryLight: '#f5f9ff',
    sidebarDividerColor: '#021456',
    activeElementsColor: '#142771',
    activeElementsColorText: '#fff',
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: 48,
        fontWeight: 'bold',
        lineHeight: 1.21,
        marginBottom: 30,
      },
      h2: {
        fontSize: 34,
        fontWeight: 500,
        lineHeight: 1.06,
        letterSpacing: '0.25px',
      },
      h3: {
        fontSize: 24,
        fontWeight: 500,
        lineHeight: 1.17,
      },
      h4: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: '0.15px',
      },
      h5: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.57,
      },
      h6: {
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1.57,
      },
      subtitle1: {
        fontSize: 24,
        lineHeight: 1,
        fontWeight: 'normal',
      },
      subtitle2: {
        fontSize: 12,
        lineHeight: 1.57,
        fontWeight: 'normal',
      },
      body1: {
        fontSize: 14,
        fontWeight: 'normal',
        color: paletteSecondaryMain,
        letterSpacing: '0.25px',
        lineHeight: '1.43',
      },
      body2: {
        fontSize: 16,
        fontWeight: 'normal',
        color: paletteSecondaryMain,
      },
    },
    MuiLink: {
      underlineHover: {
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
    MuiToolbar: {
      regular: {
        height: `${headerHeight}px!important`,
        minHeight: `${headerHeight}px!important`,
        [md]: {
          height: `${headerHeight}px!important`,
          minHeight: `${headerHeight}px!important`,
        },
      },
    },
    MuiStepper: {
      root: {
        padding: '24px 0',
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: 10,
        marginBottom: 22,
      },
    },
    MuiFormHelperText: {
      contained: {
        margin: '4px 0 -10px 0',
      },
    },
    MuiButton: {
      label: {
        fontWeight: 500,
      },
    },
    MuiAvatar: {
      root: {
        width: '32px',
        height: '32px',
      },
    },
    MuiSnackbarContent: {
      root: {
        color: '#000000',
        backgroundColor: '#ffffff',
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
      },
      action: {
        paddingLeft: 0,
      },
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiTab: {
      root: {
        fontSize: '14px !important',
        lineHeight: 1.14,
        letterSpacing: '1.25px',
        flexGrow: 1,
        [md]: {
          flexGrow: 0,
        },
      },
    },
    MuiTable: {
      root: {
        minWidth: 750,
        marginBottom: 'auto',

        [xl]: {
          tableLayout: 'fixed',
        },
      },
    },
    MuiTableHead: {
      root: {
        whiteSpace: 'nowrap',
      },
    },
    MuiTableRow: {
      root: {
        '&$selected': {
          backgroundColor: 'rgba(34, 125, 255, 0.08)',
        },
      },
    },
    MuiTableCell: {
      root: {
        padding: '15px 16px',
        fontSize: '14px',
      },
      body: {
        color: paletteSecondaryMain,
        fontSize: '14px',
        letterSpacing: '0.25px',
      },
      head: {
        padding: '15px 16px',
        lineHeight: 1.3,
      },
    },
    MuiTablePagination: {
      root: {
        color: paletteSecondaryMain,
      },
      spacer: {
        display: 'none',
      },
      input: {
        marginRight: 'auto',
      },
      caption: {
        fontSize: 14,
        fontWeight: 400,
        color: paletteSecondaryMain,
      },
      toolbar: {
        minHeight: '52px!important',
      },
      actions: {
        marginLeft: 24,
        marginRight: 24,
        '& button + button': {
          marginLeft: 12,
        },
      },
      select: {
        padding: '2px 0',
        paddingLeft: 0,
        borderBottom: '1px solid #d4d4d4',
        textAlignLast: 'left',
        minWidth: '65px',
        boxSizing: 'border-box',
      },
    },
    MuiGrid: {
      'spacing-xs-10': {
        width: 'calc(100% + 45px)',
      },
    },
    MuiTabs: {
      root: {
        overflow: 'auto',
      },
      fixed: {
        overflow: 'auto !important',
        maxWidth: '100vw',
      },
    },
    MuiDialog: {
      root: {
        justifyContent: 'space-between',
      },
      paper: {
        margin: 15,
        [sm]: {
          margin: 32,
        },
      },
      paperWidthSm: {
        width: '466px',
      },
    },
    MuiDialogTitle: {
      root: {
        padding: '20px 40px 6px 18px',
        [sm]: {
          padding: '32px 54px 6px 32px',
        },
        '& > button': {
          position: 'absolute',
          top: '5px',
          right: '5px',
        },
      },
    },
    MuiDialogContent: {
      root: {
        padding: '8px 18px',
        '&:first-child': {
          paddingTop: 5,
        },
        [sm]: {
          padding: '8px 32px',
          '&:first-child': {
            paddingTop: 20,
          },
        },
      },
    },
    MuiDialogActions: {
      root: {
        flexWrap: 'wrap',
        padding: '0 18px 8px',
        [sm]: {
          padding: '16px 32px 24px',
        },
        '&>button': {
          flex: '0 0 100%',
          marginBottom: 16,
          [sm]: {
            flex: '1 1 calc(50% - 8px)',
            marginBottom: 0,
          },
        },
      },
      spacing: {
        '&>:not(:first-child)': {
          marginLeft: '16px',
        },
      },
    },
    MuiListItemText: {
      primary: {
        fontSize: 'inherit',
        color: 'inherit',
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: '0 15px',
      },
    },
    MuiFilledInput: {
      multiline: {
        padding: '27px 16px 16px',
      },
    },
    MuiStepLabel: {
      label: {
        fontSize: 14,
      },
    },
    MuiPaper: {
      outlined: {
        border: `1px solid ${borderColor}`,
      },
      elevation2: {
        boxShadow: '0 3px 8px 2px rgba(186, 186, 192, 0.2)',
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: '#d4d4d4',
      },
      input: {
        color: '#000',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: '38px',
      },
    },
    MuiMenu: {
      paper: {
        maxHeight: '100%',
      },
    },
    MuiPopover: {
      paper: {
        maxWidth: '100%',
        maxHeight: '100%',
      },
    },
    MuiInputBase: {
      root: {
        fontSize: 'inherit',
      },
    },
    MuiMenuItem: {
      root: {
        lineHeight: '1.43',
      },
    },
    MuiSelect: {
      outlined: {
        fontSize: '14px',
        paddingTop: '12px',
        paddingBottom: '12px',
      },
      select: {
        '&:focus': {
          borderWidth: '1px',
          backgroundColor: 'transparent',
        },
      },
    },
    MuiStep: {
      horizontal: {
        '&:first-child': {
          paddingLeft: 0,
        },
        '&:last-child': {
          paddingRight: 0,
        },
      },
    },
    MuiStepConnector: {
      root: {
        minWidth: '62px',
      },
    },
  },
})

export default theme
