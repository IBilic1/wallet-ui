import * as React from 'react'
import { PieChart } from '@mui/x-charts/PieChart'
import { useGetUsersContentsQuery } from '../store/query/TagContent.query'

export default function BasicPie() {
  const { data } = useGetUsersContentsQuery()

  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: data?.filter((userTask) => userTask.task.done).length ?? 0, label: 'Tasks done' },
            { id: 1, value: data?.filter((userTask) => !userTask.task.done).length ?? 1, label: 'Tasks not done' },
          ],
        },
      ]}
      width={540}
      height={280}
    />
  )
}