import * as React from 'react'
import { Box, TableCell, Typography } from '@material-ui/core'
import TableComponent from '../Table'
import { projectFields } from './constants'
import useStyles from './styles'
import MobilePreview from '../MobilePreview'

const TableView = () => {
  const classes = useStyles()
  return (
    <Box className={classes.projectDetailsTable}>
      <TableComponent
        idKey="file_id"
        totalRows={0}
        page={1}
        rows={[]}
        hasSelected={true}
        clickRowHandler={(fileId) => console.log('click')}
        headCells={projectFields}
        onUpdateCurrentPage={() => console.log('on change')}
        onUpdatePageLimit={() => console.log('update limit')}
        // selected={selected}
        setSelected={() => console.log('select handle')}
        rowsTemplate={(row) => (
          <>
            <TableCell align="left" data-table="table-row">
              <MobilePreview data={row} />
            </TableCell>
            <TableCell align="left" data-table="table-row">
              <Box display="flex" alignItems="center" className={classes.cellData}>
                <Box mr={2} display="inline-flex">
                  {/* {getPreviewIcons(row.mime)} */}
                </Box>
                <Typography noWrap className={classes.cellText}>
                  {/* {fileNameWithoutFormat(row.name)} */}
                </Typography>
              </Box>
            </TableCell>
            <TableCell align="left" data-table="table-row">
              <Typography variant="body1" className={classes.cellData}>
                {/* {moment(row.uploaded_at || '').format('DD.MM.YYYY, HH:mm')} */}
              </Typography>
            </TableCell>
            <TableCell align="left" data-table="table-row">
              <Box display="flex" alignItems="center" my={0.5} className={classes.cellData}>
                <Box mr={1}>
                  {/* <CreatorAvatar firstName={row.upload_by.firstname} lastName={row.upload_by.lastname} size={18} /> */}
                </Box>
                <Typography noWrap className={classes.cellText}>
                  {`${row.upload_by.firstname} ${row.upload_by.lastname}`}
                </Typography>
              </Box>
            </TableCell>
            <TableCell align="left" data-table="table-row">
              <Typography variant="body1" component="div" noWrap>
                <Box mr={1} display="inline-flex" className={classes.cellData}>
                  {row.size}
                </Box>
                KB
              </Typography>
            </TableCell>
          </>
        )}
      />
    </Box>
  )
}

export default TableView
