import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
// import { Box, Paper, Divider, Typography, Button } from '@material-ui/core'
// import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
// import ViewModuleIcon from '@material-ui/icons/ViewModule'
// import FilesActions from 'stores/reducers/files'
// import { IFilesListProps } from './types'
// import { useStyles } from './styles'
// import SortSelect from 'common/SortSelect'
// import UploadFiles from '../UploadFiles'
// import TableView from '../TableView'
// import TableMobileView from '../TableMobileView'
// import CardView from '../CardView'
// import { ShareLinkPopUp } from '../ShareLinkPopUp'
// import { getFilesDataSelector, getSharedLinkId } from 'stores/selectors/files'
// import { useParams } from 'react-router-dom'
import { Theme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const FilesList = () => {
  //   const classes = useStyles()
  const { t } = useTranslation(['translation'])

  return (
    <div>
      Files list {t('mam:Are you sure you want to delete this file? All the users will lose access to this file')}
    </div>
  )
}

export default FilesList
