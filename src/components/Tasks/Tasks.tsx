import * as React from 'react'
import Task from './Task'
import { Box, styled } from '@mui/material'

const TasksBox = styled(Box)`
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      margin-top: 100px;
      gap: 16px;
      padding-bottom: 100px;
`
export default function Tasks() {
  return (
    <TasksBox>
      <h2>New Tasks</h2>
      <Task title='Task 1' image="https://media.istockphoto.com/id/1368887626/photo/childs-drawing-spacecraft-in-space.jpg?s=612x612&w=0&k=20&c=SjXwc-VdVo7Ie14GvFQQedoBhLCbpWY9SU5BeWGCvmY=" />
      <Task title='Task 2' image="https://t3.ftcdn.net/jpg/02/51/13/00/360_F_251130064_AscAdazAK4GVG9as8Z9BsM8bMuKBNycO.jpg" />
      <Task title='Task 3' image="https://brisbanekids.com.au/wp-content/uploads/2017/07/Creative-Kids-Brisbane-2022-2.jpg" />
      <Task title='Task 4' image="https://brisbanekids.com.au/wp-content/uploads/2017/07/Creative-Kids-Brisbane-2022-2.jpg" />
    </TasksBox>
  )
}