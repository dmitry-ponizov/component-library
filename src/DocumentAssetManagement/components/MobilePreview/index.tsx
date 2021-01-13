import React from 'react'
import { Box } from '@material-ui/core'
import useStyles from './styles'
import { IMobilePreviewProps } from './types'
import app_config from '../../../config/app_config'

const MobilePreview = (props: IMobilePreviewProps) => {
  const { data } = props
  const classes = useStyles()

  return (
    <Box className={classes.videoPreview}>
      <img
        src={app_config.services.getFilePreview(data.thumbnail_url)}
        className={classes.previewImg}
        alt={data.name}
      />
    </Box>
  )
}

export default MobilePreview
