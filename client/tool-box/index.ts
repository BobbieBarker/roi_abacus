import { tap } from 'rxjs/operators';

export const inspecter = tap(
  v => console.log('on success:', v),
  v => console.log('on error:', v)
)


