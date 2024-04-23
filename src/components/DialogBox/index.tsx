import { View } from 'react-native'
import React, { useState } from 'react'
import Dialog from 'react-native-dialog'

interface dialogInterface {
  title: string;
  description?: string;
  showDialog?: boolean;
  setShowDialog?: (showDialog: boolean) => void;
}


const DialogBox = ({ title, description, showDialog, setShowDialog }: dialogInterface) => {
  console.log('first')
  const handleCancel = () => {
    console.log("clicked on cancel");
    if(setShowDialog) return setShowDialog(!showDialog)
  }

  const handleDelete = () => {
    console.log("clicked on delete");
    if(setShowDialog) return setShowDialog(!showDialog)
  }
  return (
    <Dialog.Container visible={showDialog}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Description>{description}</Dialog.Description>
      <Dialog.Button label="Cancel" onPress={handleCancel} />
      <Dialog.Button label="delete" onPress={handleDelete} />
    </Dialog.Container>
  )
}

export default React.memo(DialogBox)
