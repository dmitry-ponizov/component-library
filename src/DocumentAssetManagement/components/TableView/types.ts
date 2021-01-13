import { IFile } from 'stores/reducers/files/types'

export interface ITableViewProps {
  files: {
    list: IFile[]
    loading: boolean
    total: number
    offset: number
    limit: number
  }
  shareLinkHandle: (id: string) => void
  selectHandle: (selected: string[], withShiftKey?: boolean) => void
  selected: string[]
  onChangePage: (page: number) => void
  updatePageLimit: (limit: number) => void
  setDeleteFile: (fileId: string) => void
}
