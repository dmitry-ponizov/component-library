import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserDataRequest } from '../../../store/reducers/user'
import { selectUser } from '../../../store/selectors/user'
import FilesList from '../FilesList'
import { useStyles } from './styles'

const ProjectDetails = () => {
  const { user } = useSelector(selectUser)
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserDataRequest())
  }, [])

  return (
    <section className={classes.root} id="mainAuth">
      <FilesList />
    </section>
  )
}

export default ProjectDetails
