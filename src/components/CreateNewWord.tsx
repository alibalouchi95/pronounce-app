import React, { useState } from 'react'
import { addNewCollection, addNewWordToCollection } from '../storage';
import { Word } from '../types';
import { API_CALL } from '../utils';

const CreateNewModal = ({ close, collectionName }: { close: () => void, collectionName: string }) => {
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


  return <div>
    <input
      onChange={evt => setWordText(evt.target.value)}
      placeholder="Word Name"
      className='modalInput'
    />
    <button
      disabled={loading}
      onClick={async () => { await submit(); close()}}>
      <span className='submit'>SUBMIT</span>
    </button>
  </div>
}

export default CreateNewModal