import {CollectionThumbnail, Word} from './types';
import { db as storage } from './db';

export const deleteDB = () => {
  storage.delete()
};

export const addNewCollection = async (collectionName: string) => {
    const collections = await storage.collections.toArray()
    if (!collections.find(coll => coll.name === collectionName)) {
      const collectionWords: Array<Word> = [];
      const collectionDate = new Date();
      await storage.collections.add(
        {words: collectionWords, date: collectionDate, name: collectionName},
        `collection_${collectionName}`,
        );
      }else{
        return "The Collection is already exists"
      }
};

export const addNewWordToCollection = async (
  collectionName: string,
  newWord: Word,
) => {
  const collections = await storage.collections.toArray()
  const collection = collections.find(coll => coll.name === collectionName)
  if (collection) {
    const collectionWords: Array<Word> = collection.words.concat(newWord);
    storage.collections.update(collection, {...collection, words: collectionWords}).then((updated) => {
      if(updated){
        console.log("WORD IS ADDED")
      }else{
        console.log("WORD IS NOT ADDED")
      }
    })
  }
//   const collection = await storage.collections.get(collectionName);
//   if (collection) {
//     if (collection && collection.words) {
//       collection.words.push(newWord);
//     }
//     await storage.collections.add(collection, collectionName);
//   }
};

export const removeWordFromCollection = async (
  collectionName: string,
  word: string,
) => {
  const collections = await storage.collections.where({name: collectionName}).toArray()
  if (collections && collections.length > 0) {
    const collection = collections[0]
      const words = collection.words.filter((_word: Word) => _word.word !== word);
      await storage.collections.update(collection, {words});
  }
};

export const getCollections = async () => {
  return await storage.collections.toArray()
};

export const getCollection = async (collectionName: string) => {
  const collections = await storage.collections.where({name: collectionName}).toArray()
  if (collections && collections.length > 0)
    return {
      words: collections[0].words,
      date: collections[0].date,
    };
};
