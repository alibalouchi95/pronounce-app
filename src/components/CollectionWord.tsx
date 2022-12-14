import { Button, CardActions, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Word } from '../types';

type Props = { word: Word; removeWord: (inp: string) => void };

const useStyles = makeStyles({
  container: {
    backgroundColor: '#24272B',
    padding: 10,
    margin: 10,
    width: "200px",
    height: "150px",
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    color: "#FFFFFF",
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  pronounciation: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  word: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#FFFFFF",
  },
});

const CollectionWord = ({ word: { word, pronounciation }, removeWord }: Props) => {
  const audio = new Audio(pronounciation.audio);

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <CardContent>
        <Typography className={classes.word} gutterBottom variant="h5" component="div">
          {word}
        </Typography>
        <Typography className={classes.pronounciation} variant="body2">
          {pronounciation.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='error' onClick={() => removeWord(word)}>Delete</Button>
        <Button size="small" onClick={() => audio.play()}
        >Play</Button>
      </CardActions>
    </div>
  );
};

export default CollectionWord;
