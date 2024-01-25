import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Chip } from '@mui/material'

export type TaskProps = {
  title: string,
  image: string,
  description: string
}

export default function Task({ title, description, image }: TaskProps) {
  return (
    <div>
      <Card sx={{ maxWidth: 700 }}>
        <img
          style={{ width: '100%', height: '340px' }}
          src={`data:image/png;base64,${image}`}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>{title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
            {/*Lorem Ipsum is simply dummy text of the printing and typesetting industry.*/}
            {/*Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,*/}
            {/*when an unknown printer took a galley of type and scrambled it to...*/}
          </Typography>
        </CardContent>
        <CardActions>
          <Chip label='30 min' style={{ backgroundColor: 'pink' }} />
          <Chip label='21.01.2024' style={{ backgroundColor: 'pink' }} />
        </CardActions>
      </Card>
    </div>
  )
}