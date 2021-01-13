import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { styled } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const IconCellWrap = styled('div')({
  marginRight: 26,
  textAlign: 'right',
})

interface IIconCellProps {
  pathTo: string
}

const IconCell = ({ pathTo }: IIconCellProps) => (
  <IconCellWrap>
    <IconButton component={RouterLink} to={pathTo} color="secondary" aria-label="project" size="small">
      <NavigateNextIcon />
    </IconButton>
  </IconCellWrap>
)

export default IconCell
