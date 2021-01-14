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
export declare const md = '@media (min-width:960px)'
export declare const sm = '@media (min-width:600px)'
export declare const lg = '@media (min-width:1280px)'
export declare const xl = '@media (min-width:1920px)'
export declare const mobileBreakpoint = 960
declare const theme: import('@material-ui/core/styles').Theme
export default theme
