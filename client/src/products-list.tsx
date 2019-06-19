import app from 'apprun';
import { pipe, prop, ifElse, always, isEmpty, map } from 'ramda';

function Product({ value }) {
  console.log("TCL: Product -> props", value)
  return <h1>{value.name}</h1>
}

const displayProducts = map(v => <Product value={v}></Product>);

const process = pipe(
  prop('products'),
  ifElse(isEmpty, always(<div></div>), displayProducts)
)

export default process;