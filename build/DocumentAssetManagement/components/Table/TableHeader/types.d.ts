/// <reference types="react" />
export declare type Order = 'asc' | 'desc'
export interface IEnhancedTableProps {
  numSelected: number
  onRequestSort?: (event: React.MouseEvent<unknown>, property: any) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
  order?: Order
  orderBy?: string
  rowCount: number
  headCells: Array<any>
  hasSelected?: boolean
}
