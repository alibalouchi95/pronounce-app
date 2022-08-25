import React, { useState } from 'react'
import { addNewCollection } from '../storage';

const CreateNewModal = ({ close }: { close: () => void }) => {
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


  return <div>
    <input
      onChange={evt => setCollectionName(evt.target.value)}
      placeholder="Collection Name"
      className='modalInput'
    />
    <button
      onClick={async () => { await submit(); close(); setCollectionName(undefined) }}>
      <span className='submit'>SUBMIT</span>
    </button>
  </div>
}

export default CreateNewModal