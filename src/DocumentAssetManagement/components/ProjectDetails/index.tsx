import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserDataRequest } from '../../../store/redux-toolkit'
import { selectUser } from '../../../store/selectors/user'

const ProjectDetails = () => {
  const { user } = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserDataRequest())
  }, [])

  return <div>Hello from project details component ----- {`${user.firstname} ${user.lastname} `}</div>
}

export default ProjectDetails
