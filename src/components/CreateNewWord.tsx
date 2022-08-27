import React, { useState } from 'react'
import { Card, CardContent, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { addNewWordToCollection } from '../storage';
import { Word } from '../types';
import { API_CALL } from '../utils';

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

const CreateNewModal = ({ close, collectionName }: { close: () => void, collectionName: string }) => {
  const classes = useStyles()

  const [wordText, setWordText] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)

  const submit = async () => {
    const word = await getWordData(wordText)
    if (word) {
      const res = await addNewWordToCollection(collectionName, word)
      if (typeof res !== "string") {
        console.log("ADDED")
      } else {
        console.error(res)
      }
    }
    setLoading(false)
  };

  const getWordData = async (wordText: string | undefined): Promise<Word | null> => {
    setLoading(true)
    if(wordText){
      const result = await API_CALL.getWordData(wordText)
      if(typeof result === "string"){
        console.error(result)
        return null
      }else{
        return result
      }
    }
    return null
  }


  return <Card className={classes.card}>
  <CardContent className={classes.container}>
    <span className={classes.header}>
      Add New Collection
    </span>
    <TextField
      onChange={evt => setWordText(evt.target.value)}
      placeholder="Word Name"
      className={classes.modalInput}
    />
    <button
      className={classes.button}
      style={{backgroundColor: loading ? "#F1BCBC" : "#358CFF"}}
      onClick={async () => { await submit(); close()}}>
      <span className={classes.submit}>SUBMIT</span>
    </button>
  </CardContent>
</Card>
}

export default CreateNewModal