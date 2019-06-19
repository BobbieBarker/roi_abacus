import app, { Component, on, event } from 'apprun';
import Shop from './shop';
import { lensProp, pipe, over, __, not } from 'ramda';
import tap from 'ramda/es/tap';

const toggleDisplayOf = (state, val: string) => over(lensProp(val), not, state);


export default class HomeComponent extends Component {
  state = {
    displayFarmersMarket: false, // make this nested/deep and typed. display : { FarmersMarket: boolean }
    shops: { farmersMarket: { products: [{name: 'foo', description: 'blah blah'}, {name: 'bar', description: 'blah blah'}] } }
  };

  view = (state) =>
    <div class="buttons are-medium">
      { console.log("TCL: HomeComponent -> state", state) }
      <button class="button" onclick={e => this.run('toggle-store-display', 'displayFarmersMarket')}>
        Farmers Market
      </button>
      { this.state.displayFarmersMarket ? <Shop type={ state.shops.farmersMarket } /> : '' }
    </div>

  @on('toggle-store-display') toggleDisplay = toggleDisplayOf
  @on('#Home') root = tap(v => console.log('pkz on this state??', v))
}

