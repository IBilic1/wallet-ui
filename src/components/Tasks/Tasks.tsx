import * as React from 'react'
import Task from './Task'
import { Box, styled } from '@mui/material'
import AddTask from '../AddTask'
import { useGetUsersContentsQuery } from '../../store/query/TagContent.query'

const TasksBox = styled(Box)`
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      min-height: 87VH;
      margin-top: 100px;
      gap: 16px;
      padding-bottom: 100px;
`
export default function Tasks() {
  const { data } = useGetUsersContentsQuery()
  return (
    <TasksBox>
      <h2>New Tasks</h2>
      <>
        <AddTask />
        {
          data?.map(userTask => {
            return <Task title={userTask.task.title} image={userTask.task.pictureContent} />
          })
        }
      </>
    </TasksBox>
  )
}