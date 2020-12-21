import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from 'stores/selectors/theme'
import { MuiThemeProvider, Theme } from '@material-ui/core'

const ThemeManager = ({ children }: { children: React.ReactNode }) => {
  const storeTheme: Theme = useSelector(selectTheme())

  return <MuiThemeProvider theme={storeTheme}>{children}</MuiThemeProvider>
}

export default ThemeManager
