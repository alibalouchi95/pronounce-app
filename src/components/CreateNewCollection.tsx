import { Card, CardContent, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import { addNewCollection } from '../storage';

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  card: {
    width: "50vw",
    height: "50vh",
  },
  modalInput: {
    width: "90%",
  },
  button: {
    width: "65%",
    margin: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#358CFF",
    borderColor: "#004BA8",
    borderStyle: "dashed",
    borderWidth: 2,
    "&:hover": {
      backgroundColor: "#004BA8"
    }
  },
  submit: {
    color: "#FFFFFF",
    fontWeight: "bolder",
    fontSize: 17
  },
  header: {
    width: "90%",
    fontSize: 19,
    fontWeight: "bolder",
    marginHorizontal: 15,
    textAlign: "left",
  }
})

const CreateNewModal = ({ close }: { close: () => void }) => {
  const classes = useStyles()
  const [collectionName, setCollectionName] = useState<string>()

  const submit = async () => {
    if (collectionName) {
      const res = await addNewCollection(collectionName)
      if (typeof res !== "string") {
        console.log("ADDED")
      } else {
        console.error(res)
      }
    }
  };


  return <Card className={classes.card}>
    <CardContent className={classes.container}>
      <span className={classes.header}>
        Add New Collection
      </span>
      <TextField
        onChange={evt => setCollectionName(evt.target.value)}
        placeholder="Collection Name"
        className={classes.modalInput}
      />
      <button
        className={classes.button}
        onClick={async () => { await submit(); close(); setCollectionName(undefined) }}>
        <span className={classes.submit}>SUBMIT</span>
      </button>
    </CardContent>
  </Card>
}

export default CreateNewModal