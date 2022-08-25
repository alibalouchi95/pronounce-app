import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Word } from '../types';

// "https://api.dictionaryapi.dev/media/pronunciations/en/water-uk.mp3"

type Props = { word: Word; removeWord: (inp: string) => void };

const CollectionWord = ({ word: { word, pronounciation }, removeWord }: Props) => {
  const audio = new Audio(pronounciation.audio);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {word}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pronounciation.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={
          audio.play
        } color={
          audio.ended
            ? 'primary'
            : 'warning'
        }>Play</Button>
      </CardActions>
    </Card>
    // <div className='container'>
    //   <div className='header'>
    //     <button
    //       onClick={() => removeWord(word)}
    //       style={{
    //         width: 5,
    //         height: 5,
    //         display: 'flex',
    //         flexDirection: 'row',
    //         justifyContent: 'flex-end',
    //         alignItems: 'center',
    //       }}>
    //       <img
    //         style={{width: 30, height: 30}}
    //         src='../assets/close-icons/icons8-close-67.png'
    //       />
    //     </button>
    //     <span className='word'>{word}</span>
    //     <span className='pronounciation'>{pronounciation.text}</span>
    //   </div>
    //   <button
    //     onClick={() => {
    //       setPlaying(true);
    //       audio.play()}}>
    //     <img
    //       style={{
    //         marginLeft: 8,
    //         color: playing ? '#004BA8' : '#24272B',
    //       }}
    //       src={
    //         audio.ended
    //           ? '../assets/play-icons/play-button-circled-50-blue.png'
    //           : '../assets/play-icons/play-button-circled-50-black.png'
    //       }
    //     />
    //   </button>
    // </div>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#FFFFFF',
//     padding: 10,
//     margin: 10,
//     width: '95%',
//     height: 100,
//     borderColor: '#004BA8',
//     borderWidth: 1.5,
//     borderRadius: 20,
//     alignItems: 'center',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   header: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-evenly',
//     alignItems: 'flex-start',
//     marginLeft: 20,
//   },
//   pronounciation: {
//     fontSize: 16,
//   },
//   word: {
//     fontSize: 25,
//     fontWeight: 'bold',
//   },
// });

export default CollectionWord;
