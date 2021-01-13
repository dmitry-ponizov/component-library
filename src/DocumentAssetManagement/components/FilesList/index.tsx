import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Box, Paper, Typography } from '@material-ui/core'
import { useStyles } from './styles'
import { Theme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import TableView from '../TableView'

const FilesList = () => {
  const classes = useStyles()
  const { t } = useTranslation(['translation'])
  const [tableView, setTableView] = useState(true)

  return (
    <div>
      <Box className={classes.root}>
        <Paper elevation={2}>
          <Box className={classes.listHeader} id="listHeader">
            <Box display="flex" alignItems="center" className={classes.selectedFiles}>
              <Box mr={1}>
                <Typography variant="h4" id="files">
                  {t('translation:Files')}
                </Typography>
              </Box>
              <Typography color="textSecondary" id="filesSelected">
                {t('translation:(0 of 0 selected)', { value: 0, amount: 0 })}
              </Typography>
            </Box>
          </Box>
          <TableView />
        </Paper>
      </Box>
    </div>
  )
}

export default FilesList
