import { createStyles, makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) =>
  createStyles({
    projectDetailsTable: {
      width: '100%',
      '& tr': {
        cursor: 'pointer',
      },
    },
    videoPreview: {
      position: 'relative',
      maxWidth: '80px',
      pointerEvents: 'none',
    },
    cellData: {
      pointerEvents: 'none',
    },
    cellText: {
      maxWidth: '250px',
    },
    versionIcon: {
      width: '24px',
      height: '24px',
      borderRadius: '3px',
      border: 'solid 1px',
      borderColor: theme.custom.borderTimeLine,
      backgroundColor: theme.custom.mainBg,
      '& p': {
        fontWeight: 500,
        fontSize: '12px',
      },
    },
  })
)
