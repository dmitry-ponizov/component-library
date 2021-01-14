import { ITableComponentPropsTypes } from './types'
declare const TableComponent: ({
  rows,
  headCells,
  rowsTemplate,
  tableState,
  onUpdatePageLimit,
  onUpdateCurrentPage,
  totalRows,
  selected,
  setSelected,
  page,
  setPage,
  hasSelected,
  clickRowHandler,
  idKey,
  classContainer,
  disableSelect,
}: ITableComponentPropsTypes) => JSX.Element
export default TableComponent
