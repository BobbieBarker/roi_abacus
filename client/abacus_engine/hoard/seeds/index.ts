import { hoard, Hoard } from '../hoard_db';
import { bindCallback } from 'rxjs';
import { switchMapTo, switchMap } from 'rxjs/operators';
import { inspecter } from '../../../tool-box';
import { seedDB } from './seed';


const $transaction = bindCallback(hoard.transaction).bind(hoard);

// maybe this goes in the "seeds" directory??
// seeds exports a stream
export const seedDbOnLoad = $transaction('rw', hoard.towns, hoard.shops)
.pipe(
  switchMap(seedDB),
);