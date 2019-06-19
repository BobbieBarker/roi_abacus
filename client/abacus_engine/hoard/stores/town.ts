import { Shop, ShopType } from './shop';
import { constructN, pipe } from 'ramda';
import { hoard } from '../hoard_db';
import invoker from 'ramda/es/invoker';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export class Town implements ITown {
  id: number;
  type: TownType;
  shops?: Shops;
  displayName: string;

  constructor(type: TownType, id?:number) {
    this.type = type;
    if (id) this.id = id;
    this.displayName = displayNames[type];

    // refactor: cleaner way to configure the props?
    Object.defineProperties(this, {
      shops: {value: {}, enumerable: false, writable: true }
    });
  }

  save(town: Town): Promise<number> {
    return hoard.towns.put(town)
  }
}

export enum TownType {
  industrial = 'INDUSTRIAL',
  heavy_industry = 'HEAVY_INDUSTRY',
  rural = 'RURAL',
  fishermen = 'FISHERMEN'
}

type IDisplayNames = {
  [key in TownType]: string;
}

const displayNames: IDisplayNames = {
  INDUSTRIAL: 'Industrial',
  HEAVY_INDUSTRY: 'Heavy Industry',
  RURAL: 'Rural',
  FISHERMEN: 'Fishermen'
}

interface Shops {
  [key: string]: Shop
}

export interface ITown {
  id?: number;
  type: TownType;
  shops?: Shops
}

const TownConstructor = constructN(1, Town as any);
type SaveTownType = (type: TownType) => Promise<number>;
export const saveTown: SaveTownType = pipe(TownConstructor, invoker(1, 'save'));
