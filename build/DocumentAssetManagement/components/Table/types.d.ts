export interface ITableComponentPropsTypes {
  rows: Array<any>
  headCells: Array<any>
  totalRows: number
  query?: string
  selected?: string[]
  setSelected?: any
  isEdit?: boolean
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
