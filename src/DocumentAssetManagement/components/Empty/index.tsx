import React, { memo } from 'react'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import Typography from '@material-ui/core/Typography'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import useStyles from './styles'
import { IEmptyProps } from './types'

const Empty = ({ text }: IEmptyProps) => {
  const classes = useStyles()
  const { t } = useTranslation(['translation'])

  return (
    <Box className={classes.empty}>
      <ErrorOutlineIcon color="secondary" />
      <Typography variant="body1" color="secondary">
        {text ? text : t('No data found')}
      </Typography>
    </Box>
  )
}

export default memo(Empty)
