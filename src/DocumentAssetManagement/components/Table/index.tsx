import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableContainer,
  TablePagination,
  Checkbox,
  Box,
} from '@material-ui/core'
import Empty from '../Empty'
import TableHeader from './TableHeader'
import useStyles from './styles'
import { ITableComponentPropsTypes } from './types'

const TableComponent = ({
  rows,
  headCells,
  rowsTemplate,
  tableState,
  onUpdatePageLimit,
  onUpdateCurrentPage,
  totalRows = 0,
  selected,
  setSelected,
  page,
  setPage,
  hasSelected = false,
  clickRowHandler,
  idKey = 'id',
  classContainer,
  disableSelect,
}: ITableComponentPropsTypes) => {
  const classes = useStyles()
  const rowsPerPage = tableState?.limit || 10
  const { t } = useTranslation(['translation'])

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n[idKey]).filter((selectedId) => selectedId !== disableSelect)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }
  // eslint-disable-next-line
  const handleClick = (event: any, name: string) => {
    if (clickRowHandler && event.target.dataset.table) {
      clickRowHandler(name)
      return
    }

    if (selected) {
      const selectedIndex = selected.indexOf(name)

      let newSelected: string[] = []
      if (event.target.dataset.table || event.target.dataset.indeterminate) {
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name)
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1))
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1))
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
        }

        setSelected(newSelected)
      }
    }
  }

  const isSelected = (name: string) => {
    return selected && selected.indexOf(name) !== -1
  }

  return (
    <Box className={classes.paperTable}>
      {!!rows && (
        <TableContainer className={classContainer}>
          <Table aria-labelledby="tableTitle" size={'medium'} aria-label="role table">
            <TableHeader
              numSelected={selected?.length || 0}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows ? rows.length : 0}
              headCells={headCells}
              hasSelected={hasSelected}
            />
            <TableBody>
              {rows.length > 0 &&
                // eslint-disable-next-line
                rows.map((row: any, index: number) => {
                  const isItemSelected = isSelected(row[idKey])
                  const labelId = `enhanced-table-checkbox-${index}`
                  return (
                    <TableRow
                      hover
                      onClick={(event) => disableSelect !== row[idKey] && handleClick(event, row[idKey])}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={`${row[idKey]}_${index}`}
                      selected={isItemSelected}
                    >
                      {hasSelected && (
                        <TableCell padding="checkbox" data-table="table-row">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                            color="primary"
                            disabled={disableSelect === row[idKey]}
                          />
                        </TableCell>
                      )}

                      {rowsTemplate(row)}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {!!rows && rows.length > 0 ? (
        <TablePagination
          rowsPerPageOptions={[10, 20, 50, 100]}
          component="div"
          count={totalRows}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={(e, page) => {
            setPage && setPage(page)
            onUpdateCurrentPage(page)
          }}
          onChangeRowsPerPage={(event) => onUpdatePageLimit(parseInt(event.target.value, 10))}
          backIconButtonProps={{ size: 'small' }}
          nextIconButtonProps={{ size: 'small' }}
          labelRowsPerPage={t('translation:Rows per page')}
          labelDisplayedRows={({ from, to, count }) => t(`translation:${from}-${to} of ${count !== -1 ? count : to}`)}
        />
      ) : (
        <Empty text={t('No data found')} />
      )}
    </Box>
  )
}

export default TableComponent
