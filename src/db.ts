// db.ts
import Dexie, { Table } from 'dexie';
import { Collection } from './types';

export class MySubClassedDexie extends Dexie {
  collections!: Table<Collection>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      collections: '++id, name, words, date' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();