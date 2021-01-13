import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(4.8),
      width: '100%',
      maxWidth: '100%',
      backgroundColor: theme.custom.mainBg,
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3),
      },
    },
  })
)
