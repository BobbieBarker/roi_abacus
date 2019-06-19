import Dexie from 'dexie';
import { Shop } from './stores';
import { Town } from './stores';

export class Hoard extends Dexie {
  towns: Dexie.Table<Town, number>
  shops: Dexie.Table<Shop, number>

  constructor() {
    super("abacus_engine_hoard")

    this.version(1).stores({
      towns: '++id, type',
      shops: '++id, townId, type'
    });

    this.towns.mapToClass(Town)
    this.shops.mapToClass(Shop)

  }
}

export const hoard:Hoard = new Hoard();