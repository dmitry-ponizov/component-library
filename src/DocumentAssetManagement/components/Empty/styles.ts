import { createStyles, makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) =>
  createStyles({
    empty: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '90px',
      justifyContent: 'space-around',
      padding: theme.spacing(2, 0),
      outline: 'none',
    },
  })
)
