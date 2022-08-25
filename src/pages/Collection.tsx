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
});

const Collection = () => {
  const [newData, setNewData] = useState<Word>();
  const [collectionWords, setCollectionWords] = useState<Array<Word>>([]);
  const [date, setDate] = useState<Date>();
  const { collectionName } = useParams<{ collectionName: string }>();
  const classes = useStyles()

  const { show, close, visible } = useModal(<CreateNewWord collectionName={collectionName!} close={() => close()} />)

  if (!collectionName) return null


  const removeWord = (word: string) => {
    removeWordFromCollection(collectionName, word);
    const collection = getCollection(collectionName);
    console.log({ collection })
    // if (collection) {
    //   const {words, date} = collection;
    //   if (words && typeof words !== 'string') setCollectionWords(words);
    //   if (date) setDate(date);
    // }
  };

  return (
    <div>
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
    </div>
  );
};

export default Collection;
