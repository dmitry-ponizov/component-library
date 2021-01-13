import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4.8),
    },
    listHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing(0, 3),
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        padding: 0,
      },
    },
    filesDropZone: {
      margin: '0 -2px',
    },
    selectedFiles: {
      [theme.breakpoints.down('sm')]: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        padding: theme.spacing(3),
      },
    },
    sortWrapper: {
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-between',
        marginLeft: '-8px',
        padding: theme.spacing(3),
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    changeViewBtn: {
      padding: 0,
      minWidth: 'inherit',
    },
    dialogContent: {
      padding: '20px',
    },
  })
)
