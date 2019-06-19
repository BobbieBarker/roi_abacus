import { hoard } from './hoard_db';
import { inspecter } from '../../tool-box';
import { switchMapTo, switchMap, filter } from 'rxjs/operators';
import { gte } from 'ramda';
import { fromEventPattern, from } from 'rxjs';
import { seedDbOnLoad } from './seeds';


// bootstrap logic:
// dispatch bootstrap event
// check to see if db is seeded
// -- if not seeded seed it
// load app state and dispatch it in an event

const onReady = fromEventPattern(handler => hoard.on('ready', handler));
const ifEmpty = gte(0);

const ifEmptySeedDb = switchMapTo(from(hoard.towns.count).pipe(filter(ifEmpty), switchMapTo(seedDbOnLoad)))

// todo: Write an Interface for App State.
export const bootStrapAppState = onReady.pipe(
  ifEmptySeedDb,
  // load the universe and return it.
)

// TODO: after db is populated broadcast a "ready" message into apprun w/ initial state?
// apprun boot function should grab all of the state out of db and distribute into apprun ??


// TODO: create a subscriber/hook that will "trigger" db seed.
// place subscriber in the generic routing event that fires on app load?

// TODO: rename shop holder to town

// TODO: start with town type -- shop type logic -- then shop inventories

