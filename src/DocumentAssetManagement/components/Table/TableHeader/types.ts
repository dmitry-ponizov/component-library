export type Order = 'asc' | 'desc'

export interface IEnhancedTableProps {
  numSelected: number
  // eslint-disable-next-line
  onRequestSort?: (event: React.MouseEvent<unknown>, property: any) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
  order?: Order
  orderBy?: string
  rowCount: number
  // eslint-disable-next-line
  headCells: Array<any>
  hasSelected?: boolean
}
