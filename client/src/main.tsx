import '../_sass/main.scss';

import app from 'apprun';
import Home from './Home';


app.on('//', route => {
  // const menus = document.querySelectorAll('.navbar-nav li');
  // for (let i = 0; i < menus.length; ++i) menus[i].classList.remove('active');
  // const item = document.querySelector(`[href='${route}']`);
  // item && item.parentElement.classList.add('active');
  /**
   * generic router event logic can go here
   */
})

const App = () =>
<div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          ROI Abacus
        </h1>
        <h2 class="subtitle">
          A supply chain calculator.
        </h2>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div id="my-app"></div>
    </div>
  </section>
</div>

app.render(document.getElementById('main'), <App />);

const element = 'my-app';
new Home().start(element);


/**
 * landing page:
 * store buttons
 * -- find all the stores - load stores from inventory? -- yes it will help later for modding
 * -- pressing a store button triggers the inventory to display
 * -- -- small term goal setup some buttons that can trigger a child component to load.
 * -- -- load in bulma
 * -- -- load in dexie
 * -- -- write an adapter for dexie.
 * -- -- figure out how to populate dexie with some values.
 * -- -- figure out how to tie dexie to the appRun event system.
 *
 * store inventory
 * -- find all items for each store
 * -- pressing an inventory item activates it
 * -- load inventory from dexie
 *
 * Proof of concept
 * -- load data into and out of the DB operating in worker thread
 * -- display store recipe for one store
 * -- implement with the button mechanism to
 * -- load in the stores recipe list
 * MVP Prototype for #1 recipe/store -- agrictulre
 *
 *
 */

 /**
  * Resources:
  * https://dexie.org/
  * https://daneden.github.io/animate.css/
  */

  /** TOOLING
 * configure chrome debugger to attach to a chrome debugging sessions
 * -- get blair to load in the redux devtools to my profile
 * -- configure vsc task to launch dev server on debugger task.
 */