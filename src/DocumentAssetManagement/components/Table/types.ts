export interface ITableComponentPropsTypes {
  // eslint-disable-next-line
  rows: Array<any>
  // eslint-disable-next-line
  headCells: Array<any>
  totalRows: number
  query?: string
  selected?: string[]
  // eslint-disable-next-line
  setSelected?: any
  isEdit?: boolean
  // eslint-disable-next-line
  rowsTemplate: (row: any) => void
  onUpdatePageLimit: (limit: number) => void
  onUpdateCurrentPage: (page: number) => void
  tableState?: {
    limit?: number
    currentPage?: number
  }
  page: number
  setPage?: (page: number) => void
  hasSelected?: boolean
  clickRowHandler?: (id: string) => void
  idKey?: string
  classContainer?: string
  disableSelect?: string
}
