import React, { useEffect, useState } from 'react';
import CollectionWord from '../components/CollectionWord';
// import NewWord from '../components/NewWord';
import { Word } from '../types';
import {
  addNewWordToCollection,
  getCollection,
  removeWordFromCollection,
} from '../storage';
import { useParams } from 'react-router-dom';
import { useModal } from 'global-modal';
import CreateNewWord from '../components/CreateNewWord';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles({
  createNewWord: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    margin: 10,
    width: '95%',
    height: 100,
    borderColor: '#004BA8',
    borderStyle: 'dashed',
    borderWidth: 1.2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createNewWordText: {
    color: '#24272B',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    width: "95%",
    display: "flex",
    flexWrap: "wrap",
    margin: 15,
    padding: 10
  }
});

const Collection = () => {
  const [collectionWords, setCollectionWords] = useState<Array<Word>>([]);
  const [collectionDate, setCollectionDate] = useState<Date |string>()
  const { collectionName } = useParams<{ collectionName: string }>();
  const classes = useStyles()

  const { show, close, visible } = useModal(<CreateNewWord collectionName={collectionName!} close={() => close()} />)

  const _getData = async (collectionName: string) => {
    const collection = await getCollection(collectionName)
    if(collection?.words){
      setCollectionWords(collection?.words)
    }
      setCollectionDate(collection?.date)
  }

  useEffect(() => {
    if(collectionName)
    _getData(collectionName)
  }, [visible])


  const removeWord = async (word: string) => {
    if(collectionName){
      await removeWordFromCollection(collectionName, word);
      await _getData(collectionName)
    }
  };

  return (
    <Box className={classes.container}>
      {collectionWords
        ? collectionWords.map(word => (
          <CollectionWord
            key={word.word}
            word={word}
            removeWord={removeWord}
          />
        ))
        : null}
      <button
        className={classes.createNewWord}
        onClick={show}>
        <span className={classes.createNewWordText}>Create new</span>
      </button>
    </Box>
  );
};

export default Collection;
