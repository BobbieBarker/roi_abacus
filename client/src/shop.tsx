import app from 'apprun';
import Products from './products-list';

// should probably be a "component"
export default function Shop ({ type }) {
console.log("TCL: Shop -> type", type)
  return <div>
    <Products products={ type.products }/>
  </div>
}

