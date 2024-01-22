import React, { ChangeEvent, useState } from 'react'
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useAddUserTaskMutation } from '../store/query/TagContent.query'
import { AddUserTask, ContentProp_, Task } from '../types/auth/types'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { DatePicker } from '@mui/x-date-pickers'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  display: block;
  margin: 8px;
  color: #333;
`
const Input = styled(Field)`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
  font-family: 'Young Serif';
`

export const styles = {
  fileInput: {
    padding: '10px',
    margin: '10px 0',
    backgroundColor: 'lightgray',
    fontFamily: 'Young Serif',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  imagePreview: {
    width: '60%',
    height: '60%',
    margin: '10px 10px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: 'lightblue',
    border: 'none',
    borderRadius: '5px',
    display: 'block',
  },
  submitButton2: {
    margin: '10px 0',
    padding: '10px 20px',
    backgroundColor: 'pink',
    border: 'none',
    borderRadius: '5px',
    display: 'block',
  },
}

function AddTask() {
  const [addUserTask, { data }] = useAddUserTaskMutation()
  const [file, setFile] = useState<File | undefined>()

  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    setFile(selectedFile)
    if (selectedFile) {
      setPreviewUrl(URL.createObjectURL(selectedFile))
    }
  }
  const handleSubmit = (values: ContentProp_) => {
    if (file) {
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onloadend = () => {
        const base64 = btoa(
          new Uint8Array(reader.result as ArrayBuffer)
            .reduce((data, byte) => data + String.fromCharCode(byte), ''),
        )
        const temp = {
          task: {
            pictureContent: base64,
            title: values.title,
            description: values.description,
            done: false,
            duration: values.duration,
            dateTime: values.dateTime?.toString(),
          } as Task,
        } as AddUserTask

        try {
          addUserTask(temp)
        } catch (e) {
          console.log(e)
        }
      }
    }
  }

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        ADD TASK
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add some cool picture...
          </DialogContentText>
          <Formik initialValues={{
            image: null,
            title: null,
            description: null,
            dateTime: null,
            duration: null,
          } as ContentProp_} onSubmit={handleSubmit}>
            {({ submitForm }: FormikHelpers<any>) => (
              <Form onSubmit={submitForm}>
                <input name={'image'} type='file' onChange={handleFileChange} style={styles.fileInput} />
                <img src={previewUrl ?? undefined} style={styles.imagePreview} />
                <Input id='title' name='title'
                       placeholder='Title'
                       variant='auth'
                       fontSize='sm'
                       ms={{ base: '0px', md: '0px' }}
                       mb='24px'
                       fontWeight='500'
                />
                <Input id='description' name='description'
                       placeholder='Description'
                       variant='auth'
                       fontSize='sm'
                       ms={{ base: '0px', md: '0px' }}
                       mb='24px'
                       fontWeight='500'
                />
                <Input id='duration' name='duration'
                       placeholder='Duration in minutes'
                       type='number'
                       fontSize='sm'
                       ms={{ base: '0px', md: '0px' }}
                       mb='24px'
                       fontWeight='500'
                />
                <br />
                <DatePicker name='deadline' defaultValue={dayjs()} disablePast />
                <br />
                <br />
                <Button type='submit'>SUBMIT</Button>
                <Button onClick={handleClose}>Cancel</Button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddTask