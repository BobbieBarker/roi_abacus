import { from, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hoard } from '../hoard_db';
import { saveTown, TownType, saveShop, ShopType } from '../stores';


export const seedDB = (transaction: Hoard) => {
  return from(saveTown(TownType.rural))
    .pipe(
      switchMap(townId => {
        return forkJoin(
          saveShop(ShopType.farmers_market, townId),
          saveShop(ShopType.hardware_store, townId),
        )
      })
    )
};