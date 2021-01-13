import { createStyles, makeStyles } from '@material-ui/core'

export default makeStyles(() =>
  createStyles({
    videoPreview: {
      position: 'relative',
      width: '80px',
      height: '45px',
      pointerEvents: 'none',
    },
    badge: {
      position: 'absolute',
      right: 5,
      top: 8,
      display: 'flex',
      textAlign: 'center',
    },
    circle: {
      width: 10,
      height: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      color: '#fff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      '& svg': {
        width: '10px',
      },
    },
    noStatus: {
      color: '#666666',
    },
    needsReviewStatus: {
      color: '#ffbf00',
    },
    inProgressStatus: {
      color: '#227dff',
    },
    approvedStatus: {
      color: '#1dcfbb',
    },
    status: {
      fontSize: 5,
      fontWeight: 500,
      minWidth: '37px',
      padding: 2,
      borderRadius: 3,
      color: '#fff',
      marginLeft: '10px',
      '&$needsReviewStatus': {
        backgroundColor: '#ffbf00',
      },
      '&$inProgressStatus': {
        backgroundColor: '#227dff',
      },
      '&$approvedStatus': {
        backgroundColor: '#1dcfbb',
      },
    },
    previewImg: {
      objectFit: 'cover',
    },
  })
)
