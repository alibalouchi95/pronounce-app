import axios from 'axios';
import {GetWordResult, Word} from './types';

export const cleanResult = (res: GetWordResult): Word | string | undefined => {
  const results: Array<Word> = [];
  if (res.results) {
    for (const _res of res.results) {
      if (_res.lexicalEntries)
        for (const lex of _res.lexicalEntries) {
          if (lex && lex.entries) {
            const prons = lex.entries.find(ent => ent.pronunciations);
            if (prons && prons.pronunciations)
              for (const pron of prons.pronunciations) {
                if (pron.dialects?.includes('American English')) {
                  if (pron.audioFile && pron.phoneticSpelling) {
                    results.push({
                      pronounciation: {
                        audio: pron.audioFile,
                        text: pron.phoneticSpelling,
                      },
                      word: _res.word,
                    });
                  }
                }
              }
          }
        }
    }
    if (results.length > 0 && results[0]) return results[0];
    else return 'The Word has not been found';
  }
};

export const API_CALL = {
  getWordData: async (word: string): Promise<Word | string> => {
    let result;
    axios.defaults.headers.common["app_id"] = "80d25e40"
    axios.defaults.headers.common["app_key"] = "525bbe4a6333dc13b43e2dbb8b9cf996"

    try {
      const res = await axios.get(
        `/entries/en-us/${word}`,
      );
      const results: Array<Word> = [];
      const _res = cleanResult(res.data);
      if (_res && typeof _res !== 'string') results.push(_res);
      results.length > 0
        ? (result = results[0])
        : (result = 'The word is not found');
    } catch (e: any) {
      console.log({e});
      result = 'There is a problem with Dictionary API';
    }

    return result;
  },
};

export const cleanDate = (date: Date | string) => {
  if (typeof date === 'string') date = new Date(date);
  const year = date.getUTCFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  return `${year}/${month + 1}/${day}`;
};
