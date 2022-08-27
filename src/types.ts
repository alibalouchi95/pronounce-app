export type Collection = {
  id?: number;
  name: string;
  words: Array<Word>;
  date: string | Date
};

export type RootStackScreens = {
  Home: {};
  Collection: {id: string};
};

export type Word = {
  word: string;
  pronounciation: {
    text: string;
    audio: string;
  };
};

export type WordData = {
  word: string;
  phonetic: string;
  phonetics: Array<{
    text: string;
    audio: string;
    sourceUrl: string;
    license: {
      name: string;
      url: string;
    };
  }>;
  meanings: [
    {
      partOfSpeech: string;
      definitions: Array<{
        definition: string;
        synonyms: Array<any>;
        antonyms: Array<any>;
        example: string;
      }>;
      synonyms: Array<any>;
      antonyms: Array<string>;
    },
  ];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: Array<string>;
};

export type CollectionThumbnail = {
  name: string;
  wordsLength: number;
  date: Date | string;
};

export interface GetWordResult {
  id: string;
  metadata: Metadata;
  results?: ResultsEntity[] | null;
  word: string;
}
export interface Metadata {
  operation: string;
  provider: string;
  schema: string;
}
export interface ResultsEntity {
  id: string;
  language: string;
  lexicalEntries?: LexicalEntriesEntity[] | null;
  type: string;
  word: string;
}
export interface LexicalEntriesEntity {
  derivatives?:
    | DerivativesEntityOrDomainClassesEntityOrDomainsEntityOrLexicalCategoryOrSemanticClassesEntity[]
    | null;
  entries?: EntriesEntity[] | null;
  language: string;
  lexicalCategory: DerivativesEntityOrDomainClassesEntityOrDomainsEntityOrLexicalCategoryOrSemanticClassesEntity;
  text: string;
}
export interface DerivativesEntityOrDomainClassesEntityOrDomainsEntityOrLexicalCategoryOrSemanticClassesEntity {
  id: string;
  text: string;
}
export interface EntriesEntity {
  etymologies?: string[] | null;
  grammaticalFeatures?: GrammaticalFeaturesEntity[] | null;
  pronunciations?: PronunciationsEntity[] | null;
  senses?: SensesEntity[] | null;
}
export interface GrammaticalFeaturesEntity {
  id: string;
  text: string;
  type: string;
}
export interface PronunciationsEntity {
  dialects?: string[] | null;
  phoneticNotation: string;
  phoneticSpelling: string;
  audioFile?: string | null;
}
export interface SensesEntity {
  definitions?: string[] | null;
  examples?: ExamplesEntity[] | null;
  id: string;
  shortDefinitions?: string[] | null;
  subsenses?: SubsensesEntity[] | null;
  synonyms?: SynonymsEntity[] | null;
  thesaurusLinks?: ThesaurusLinksEntity[] | null;
  domainClasses?:
    | DerivativesEntityOrDomainClassesEntityOrDomainsEntityOrLexicalCategoryOrSemanticClassesEntity[]
    | null;
  domains?:
    | DerivativesEntityOrDomainClassesEntityOrDomainsEntityOrLexicalCategoryOrSemanticClassesEntity[]
    | null;
  notes?: NotesEntity[] | null;
  semanticClasses?:
    | DerivativesEntityOrDomainClassesEntityOrDomainsEntityOrLexicalCategoryOrSemanticClassesEntity[]
    | null;
}
export interface ExamplesEntity {
  text: string;
}
export interface SubsensesEntity {
  definitions?: string[] | null;
  examples?: ExamplesEntity[] | null;
  id: string;
  shortDefinitions?: string[] | null;
  synonyms?: SynonymsEntity[] | null;
  thesaurusLinks?: ThesaurusLinksEntity[] | null;
  domainClasses?:
    | DerivativesEntityOrDomainClassesEntityOrDomainsEntityOrLexicalCategoryOrSemanticClassesEntity[]
    | null;
  domains?:
    | DerivativesEntityOrDomainClassesEntityOrDomainsEntityOrLexicalCategoryOrSemanticClassesEntity[]
    | null;
}
export interface SynonymsEntity {
  language: string;
  text: string;
}
export interface ThesaurusLinksEntity {
  entry_id: string;
  sense_id: string;
}
export interface NotesEntity {
  text: string;
  type: string;
}
