import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableHead from '@material-ui/core/TableHead'
import Checkbox from '@material-ui/core/Checkbox'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox'
import { useTranslation } from 'react-i18next'
import useStyles from './styles'
import { IEnhancedTableProps } from './types'

export default function TableHeader(props: IEnhancedTableProps) {
  const classes = useStyles()
  const { t } = useTranslation()
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
    hasSelected = true,
  } = props

  const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
    onRequestSort && onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {hasSelected && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              indeterminateIcon={<IndeterminateCheckBoxIcon className={classes.indeterminateCheckBox} />}
              checked={numSelected !== 0 && (numSelected === rowCount || numSelected + 1 === rowCount)}
              onChange={onSelectAllClick}
              color="primary"
              inputProps={{ 'aria-label': 'select all members' }}
            />
          </TableCell>
        )}
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={'default'}
            style={!hasSelected && index === 0 ? { paddingLeft: '25px' } : {}}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {t(`${headCell.label}`)}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
